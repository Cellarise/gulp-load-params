/* jslint node: true */
"use strict";
var checker = require('npm-license');
var GulpDustCompileRender = require('gulp-dust-compile-render');
var rename = require("gulp-rename");

/**
 * A gulp build task to generate license documentation from all dependent packages.
 * @alias tasks:license
 */
module.exports = function (gulp) {
    gulp.task('license', function () {
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        var processed = false; //workaround to enable pause and resume stream functions to work

        return gulp.src([directories.doc + '/**/additional_licenses.json', directories.doc + '/readme.dust.md'])
            .on('data', function (vinyl) {
                var self = this;
                if (!processed) {
                    processed = true;
                    self.pause();
                    checker.init({
                        unknown: false,          // Boolean: generate only a list of unknown licenses
                        start: '.',              // String: path to start the dependency checks
                        depth: '1',            // Number | 'all': how deep to recurse through the dependencies
                        meta: JSON.parse(vinyl.contents),             // String: path to a metadata json file (see below)
                        include: 'all' // String | Array | 'all': recurse through various types of dependencies (https://npmjs.org/doc/json.html)
                    }, function (dependencies) {
                        context.licenses = [];
                        //process to get into format for dust
                        var dep, result;
                        for (dep in dependencies) {
                            if (dependencies.hasOwnProperty(dep)) {
                                result = {
                                    name: dep,
                                    license: JSON.stringify(dependencies[dep].licenses),
                                    repository: JSON.stringify(dependencies[dep].repository)
                                };
                                //if (dependencies[dep] instanceof Array){
                                //    result.repository
                                //}
                                context.licenses.push(result);
                            }
                        }
                        //ensure this sub task gets executed to update the
                        gulp.src([directories.doc + '/**/readme-license.dust.md'])
                            .pipe(new GulpDustCompileRender(context))
                            .pipe(rename(function (path) {
                                path.basename = path.basename.replace('.dust', '');
                            }))
                            .pipe(gulp.dest(directories.doc))
                            .on('end', function () {
                                self.resume();
                            });
                    });
                }
            });
    });
};
