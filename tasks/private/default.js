/* jslint node: true */
"use strict";
var runSequence = require('run-sequence');

/**
 * The private default gulp build task.  This default task if present will override the default gulp task.
 * The sequence works by piping each task to the next.
 * Note that files sourced through gulp.src will be passed through the sequence and not retrieved again. T
 * @alias tasks:default-priv
 */
module.exports = function(gulp) {
    // Run tasks synchronously in order
    gulp.task('default', function(cb) {
        runSequence(
            'test-cover',
            'code-analysis',
            'docs-pre',
            'docs',
            'metadata',
            'package',
            cb);
    });
};
