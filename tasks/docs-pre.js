/* jslint node: true */
"use strict";
var rename = require("gulp-rename");
var path = require('path');
var GulpDustCompileRender = require('gulp-dust-compile-render');

/**
 * A gulp build task to prepare document templates that must be saved to disk for the JSDoc documentation generator (run as part of the `doc` gulp task).
 * @alias tasks:docs-pre
 */
module.exports = function(gulp) {
    gulp.task("docs-pre", function(){
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        var options = {
            partialsGlob: path.join(process.cwd(), directories.doc) + '/*.dust*'
        };

        return gulp.src([directories.doc + '/**/*.dust.md'])
            .pipe(new GulpDustCompileRender(context, options))
            .pipe(rename(function (path) {
                path.basename = path.basename.replace('.dust','');
            }))
            .pipe(gulp.dest(directories.doc));
    });
};
