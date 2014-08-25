/* jslint node: true */
"use strict";
var path = require('path');
var Both = require('gulp-yadda-steps');

/**
 * A gulp build task to create missing test steps in new or existing step libraries.
 * @alias tasks:steps
 */
module.exports = function(gulp) {
    gulp.task("steps", function(cb){
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        gulp.src([directories.test + '/**/*.feature'])
            .pipe(new Both({
                libraryBasePath: path.join(process.cwd(), directories.test),
                featureBasePath: path.join(process.cwd(), directories.test)
            }))
            .pipe(gulp.dest(directories.test))
            .on('end', cb);
    });
};
