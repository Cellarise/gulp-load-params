/* jslint node: true */
"use strict";
var gulp = require("gulp");
require('gulp-load')(gulp);

// load tasks from tasks directory and
// dependencies of start with `priv-` in package.json
gulp.loadTasks(__dirname, {modulePrefix: 'priv'});
