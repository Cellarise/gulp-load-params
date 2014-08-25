/* jslint node: true */
"use strict";
var fs = require('fs');
var jshint = require('gulp-jshint');
var mkdirp = require('mkdirp');
var JshintReporterBamboo = require('jshint-reporter-bamboo');

/**
 * A gulp build task to execute static code analysis on the files at `package.json:directories.lib`.
 * The report results are saved to `package.json:directories.reports`
 * @alias tasks:code-analysis
 */
module.exports = function(gulp) {
    gulp.task('code-analysis', function () {
        var report = {};
        var context = require(process.cwd() + '/package.json');
        var directories = context.directories;
        return gulp.src(directories.lib + '/**/*.js')
            .pipe(jshint())
            .pipe(new JshintReporterBamboo(report, {
                report: 'cucumber'
            }))
            .on('end', function() {
                mkdirp.sync(directories.reports);
                fs.writeFileSync(directories.reports + '/lint-tests.json', JSON.stringify(report.results, null, 2));
            });
    });
};
