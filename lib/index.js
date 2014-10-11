"use strict";
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var _ = require('underscore');
var exists = fs.existsSync;
var stat = fs.statSync;
var join = path.join;
var resolve = path.resolve;
var isWindows = process.platform === 'win32';
var splitter = isWindows ? ';' : ':';


function TaskManager(gulp, opts) {
    // global path
    this.modulePrefix = opts.modulePrefix;
    this.taskPath = opts.taskPath;
    this.globalPath = process.env.NODE_PATH ?
        process.env.NODE_PATH.split(splitter) : [];
    this.tasks = [];
    this.gulp = gulp;
}

TaskManager.prototype.load = function (moduleName, opts) {
    var gulp = this.gulp;
    this.lookup(moduleName);
    this.tasks.forEach(function (task) {
        require(task)(gulp, opts);
    });
    this.tasks = [];
};

TaskManager.prototype.lookup = function (moduleName) {
    // set current working directory if moduleName doesn't exist
    if (!moduleName) {
        moduleName = process.cwd();
    }

    if (exists(moduleName)) {
        var s = stat(moduleName);

        // .loadTasks('path/to/tasks/task.js')
        if (s.isFile()) {
            this.tasks.push(moduleName);
            return;
        }

        // .loadTasks('path/to/module')
        if (s.isDirectory()) {
            this.lookupTasks(resolve(moduleName));
            this.lookupDeps(resolve(moduleName));
        }
    }

    // .loadTasks('moduleName')
    // lookup path
    // 1. global path
    // 2. node_modules path
    var paths = this.globalPath.concat(resolve('node_modules'));
    paths.forEach(function (p) {
        p = join(p, moduleName);
        if (exists(p)) {
            this.lookupTasks(p);
            this.lookupDeps(p);
        }
    }.bind(this));
};

TaskManager.prototype.lookupTasks = function (modulePath) {
    var tasksPath = join(modulePath, this.taskPath);
    var tasks = glob.sync(tasksPath + '/**/*.js');
    this.tasks = this.tasks.concat(tasks);
};

TaskManager.prototype.lookupDeps = function (modulePath) {
    var self = this;
    if (!fs.existsSync(modulePath)) {
        return;
    }

    var pkg = require(join(modulePath, 'package.json'));
    if (pkg && pkg.dependencies) {
        Object.keys(pkg.dependencies).filter(function (f) {
            return new RegExp('^' + self.modulePrefix).test(f);
        }).forEach(function (deps) {
            var depsPath = join(modulePath, 'node_modules', deps);
            this.lookupTasks(depsPath);
            this.lookupDeps(depsPath);
        }.bind(this));
    }
};

/**
 * {description}
 * @module {name}
 * @param gulp {Object} - The gulp module
 * @param opts {Object} - optional options
 * @param {Object} [opts.modulePrefix='gulp-'] - load dependencies that start with this prefix in package.json.
 * @param {Object} [opts.taskPath='tasks'] - load tasks from this directory path.
 * @returns {loadTasks}
 * @example
 {>example-index/}
 */
module.exports = function (gulp, opts) {
    opts = opts || {};
    _.defaults(opts, {
        modulePrefix: 'gulp-',
        taskPath: 'tasks'
    });
    var tm = new TaskManager(gulp, opts);

    function loadTasks(moduleName, opts) {
        tm.load(moduleName, opts);
    }

    gulp.loadTasks = loadTasks;
    return loadTasks;
};
