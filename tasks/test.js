/* jslint node: true */
"use strict";
var mocha = require('gulp-mocha');

/**
 * A gulp build task to run tests.
 * @alias tasks:test
 */
module.exports = function(gulp) {
    var context = require(process.cwd() + '/package.json');
    var directories = context.directories;

    gulp.task('test', function() {
        return gulp.src(directories.test + '/test.js')
            .pipe(mocha({
                reporter: 'spec'
            }))
            .on('error', function(){
                this.emit('end');
            });
    });
};
