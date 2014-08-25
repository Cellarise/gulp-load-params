/* jslint node: true */
"use strict";
var English = require('yadda').localisation.English;
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var fs = require('fs');

/* Feature: Cucumber report output format */
module.exports = (function () {
    return English.library()
        .define("When I lint the file with the cucumber format set", function (done) {
            var JshintReporterBamboo = require('../../lib/index');
            var report = {};
            var self = this;
            this.world.report = {};

            gulp.src(this.world.template + '.js')
                .pipe(jshint())
                .pipe(new JshintReporterBamboo(report, {report: 'cucumber'}))
                .on('end', function () {
                    self.world.report = report.results;
                    done();
                });
        })
        .define("Then a report is produced in cucumber format with $result", function(result, done) {
            var expected = JSON.parse(fs.readFileSync(this.world.template + "_cucumber.json"));
            var actual = this.world.report;
            actual = JSON.stringify(actual).replace(/[^a-zA-Z ]/g, "").substring(0, 10);
            expected = JSON.stringify(expected).replace(/[^a-zA-Z ]/g, "").substring(0, 10);
            this.assert.equal(actual, expected);
            done();
        });
})();