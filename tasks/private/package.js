/* jslint node: true */
"use strict";

/**
 * A gulp build task to copy files to the `package.json:directories.build` directory.
 * The existing build, tasks and reports directories are ignored.
 * @alias tasks:package
 */
module.exports = function(gulp) {
    gulp.task('package', function() {
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        return gulp.src([
            '**/*.*',
            '!' + directories.build + '/**/*.*',
            '!' + directories.reports + '/**/*.*',
            '!' + directories.tasks + '/private/**/*.*',
            '!node_modules/**/*.*',
            '!package.json'
        ])
            .pipe(gulp.dest(directories.build));
    });
};
