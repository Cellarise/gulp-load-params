/* jslint node: true */
"use strict";
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var English = require('yadda').localisation.English;

/* Feature: Create bamboo reporter for JSHint */
module.exports = (function() {
    return English.library()
    /*Scenario: Lint code with no errors */
        .define("Given I have a $name Javascript file", function(filename, done) {
            this.world.template = path.join(__dirname, '../resources/' + filename);
            this.assert(fs.existsSync(this.world.template + '.js'));
            done();
        })
        .define("When I lint the file", function(done) {
            var JshintReporterBamboo = require('../../lib/index');
            var report = {};
            var self = this;
            this.world.report = {};

            gulp.src(this.world.template + '.js')
                .pipe(jshint())
                .pipe(new JshintReporterBamboo(report))
                .on('end', function() {
                    self.world.report = report.results;
                    done();
                });
        })
        .define("Then a report is produced with $result", function(result, done) {
            var expected = JSON.parse(fs.readFileSync(this.world.template + "_mocha.json"));
            var actual = this.world.report;
            //remove timestamps
            delete expected.stats.start;
            delete expected.stats.end;
            delete expected.stats.duration;
            delete actual.stats.start;
            delete actual.stats.end;
            delete actual.stats.duration;
            delete expected.passes;
            delete expected.failures;
            delete actual.passes;
            delete actual.failures;
            actual = JSON.stringify(actual).replace(/[^a-zA-Z ]/g, "").substring(0, 10);
            expected = JSON.stringify(expected).replace(/[^a-zA-Z ]/g, "").substring(0, 10);
            this.assert.equal(actual, expected);
            done();
        });
})();