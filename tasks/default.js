/* jslint node: true */
"use strict";
var runSequence = require('run-sequence');

/**
 * The default gulp build task.
 * @alias tasks:default
 */
module.exports = function(gulp) {
    // Run tasks synchronously in order
    gulp.task('default', function(cb) {
        runSequence(
            'test',
            'docs-pre',
            'docs',
            cb);
    });
};
