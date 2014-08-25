/* jslint node: true */
"use strict";
var concat = require("gulp-concat");
var path = require('path');
var jsdoc2md = require("gulp-jsdoc-to-markdown");
var GulpDustCompileRender = require('gulp-dust-compile-render');

/**
 * A gulp build task to generate JSDoc documentation, license documentation, and README file.
 * Dependent on gulp build task `docs-pre`.
 * @alias tasks:docs
 */
module.exports = function(gulp) {
    gulp.task("docs", function(){
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        var options = {
            template: './doc_templates/readme.md',
            preserveWhitespace: true,
            partialsGlob: path.join(process.cwd(), directories.doc) + '/*.dust*'
        };

        return gulp.src([directories.lib + '/**/*.js'])
            .pipe(concat("README.md"))
            .pipe(jsdoc2md(options))
            .pipe(new GulpDustCompileRender(context, options))
            .pipe(gulp.dest(""));
    });
};
