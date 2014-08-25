/* jslint node: true */
"use strict";
var mocha = require('gulp-mocha');

module.exports = function(gulp) {
    gulp.task('test', function() {
        return gulp.src('./Test/test.js')
            .pipe(mocha({
                reporter: 'spec'
            }))
            .on('error', function(){
                this.emit('end');
            });
    });
};
