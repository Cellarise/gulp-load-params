/* jslint node: true */
"use strict";
var jeditor = require('gulp-json-editor');
var _ = require('underscore');

/**
 * A gulp build task to establish or update the structure and build setup for a module or product.
 * @alias tasks:scaffold
 */
module.exports = function(gulp) {
    gulp.task('scaffold', function() {
        var pkgDefaults = require('../../lib/index').package;

        return gulp.src(['package.json'])
            .pipe(jeditor(function(json) {
                //set attributes based on JIRA
                //json.name;
                //json.description;

                //set template properties
                json.config = pkgDefaults.config;
                json.license = pkgDefaults.license;
                json.main = pkgDefaults.main;
                json.directories = pkgDefaults.directories;
                json.optionalDependencies = pkgDefaults.optionalDependencies;
                _.defaults(json.devDependencies, pkgDefaults.devDependencies);

                return json;
            }))
            .pipe(gulp.dest(''));
    });
};
