/* jslint node: true */
"use strict";
var mocha = require('gulp-mocha');
var tap = require('gulp-tap');
var mkdirp = require('mkdirp');
var istanbul = require('gulp-istanbul-custom-reports');
istanbul.registerReport(require('istanbul-reporter-clover-limits'));

/**
 * A set of gulp build tasks to run test steps.
 * @alias tasks:test-tasks
 */
module.exports = function(gulp) {
    var context = require(process.cwd() + '/package.json');
    var directories = context.directories;

    function handleError(/*err*/) {
        //console.log(err.toString());
        this.emit('end'); //jshint ignore:line
    }

    function test(reporter) {

        /**
         * Istanbul code coverage will not work if there are tasks containing local references.
         * For example, var x = require('../../lib/index');
         * Note: that if gulpfile.js contains `gulp.loadTasks(__dirname);` then all tasks will be loaded
         * in gulp modules and the tasks directory.  Make sure all these tasks do not require local references as defined above.
         */

        return gulp.src([directories.lib + '/**/*.js'], {cwd: process.cwd()})
            .pipe(istanbul()) // Covering files - must wait for finish event before continuing
            .on('finish', function () {
                gulp.src([directories.lib + '/**/*.js'], {cwd: process.cwd()})
                    .pipe(tap(function(f) {
                        require(f.path); // Make sure all files are loaded to get accurate coverage data
                    }))
                    .on('end', function () {
                        gulp.src(directories.test + '/test.js')
                            .pipe(mocha({
                                reporter: reporter
                            }))
                            .on("error", handleError)
                            .pipe(istanbul.writeReports({
                                reporters: [ 'html', 'clover-limits'],
                                reportOpts: {
                                    dir: directories.reports + '/code-coverage',
                                    watermarks: context.config.coverage.watermarks
                                }
                            }));
                    });
            });
    }

    /**
     * A gulp build task to run test steps and calculate test coverage.  Test steps results will be output using mocha-bamboo-reporter-bgo reporter.
     * @alias tasks:test-cover
     */
    gulp.task('test-cover', function() {
        process.env.MOCHA_FILE = directories.reports + '/unit-tests.json'; //results file path for mocha-bamboo-reporter-bgo
        mkdirp.sync(directories.reports); //make sure the Reports directory exists - required for mocha-bamboo-reporter-bgo
        return test('mocha-bamboo-reporter-bgo');
    });

    /**
     * A gulp build task to run test steps and calculate test coverage.  Test steps results will be output using spec reporter.
     * @alias tasks:test-cli
     */
    gulp.task('test-cli', function() {
        return test('spec');
    });

    /**
     * A gulp build task to run test steps.  Test steps results will be output using spec reporter.
     * @alias tasks:test-console
     */
    gulp.task('test-console', function() {
        process.env.MOCHA_FILE = directories.reports + '/unit-tests.json'; //results file path for mocha-bamboo-reporter-bgo
        mkdirp.sync('Reports'); //make sure the Reports directory exists - required for mocha-bamboo-reporter-bgo
        return gulp.src(directories.test + '/test.js')
            .pipe(mocha({
                reporter: 'spec'
            }))
            .on("error", handleError);
    });
};
