/* jslint node: true */
"use strict";
var utils = require('./../utils');

function prepare(reportJSON) {
    //setup reportJSON - do not overwrite reportJSON so add properties
    reportJSON.results = reportJSON.results || {
        stats: {
            "suites": 0,
            "tests": 0,
            "passes": 0,
            "pending": 0,
            "failures": 0,
            "duration": 0
        }
    };
    reportJSON.results.stats.start = reportJSON.results.stats.start || new global.Date();
    reportJSON.results.stats.end = reportJSON.results.stats.end || new global.Date();
    reportJSON.results.failures = [];
    reportJSON.results.passes = [];
    reportJSON.results.skipped = [];

    //no return - reportJSON and file arguments past by reference
}

function write(reportJSON, file, opts) {
    var result, now = new global.Date();

    result = {
        "title": opts.suiteName + " " + file.path.replace(/.*[\\\/]/, ''),
        "fullTitle": opts.suiteDesc + " " + file.path,
        "duration": now - reportJSON.results.stats.end
    };
    reportJSON.results.stats.suites = reportJSON.results.stats.suites + 1;
    reportJSON.results.stats.tests = reportJSON.results.stats.tests + 1;
    reportJSON.results.stats.end = now;
    reportJSON.results.stats.duration = reportJSON.results.stats.end - reportJSON.results.stats.start;

    if (file.hasOwnProperty('jshint')) {
        if (!file.jshint.success) {
            reportJSON.results.stats.failures = reportJSON.results.stats.failures + 1;
            result.error = utils.failure_message(file.jshint.results, opts) + " " + opts.suiteName + ": " + utils.failure_details(file.jshint.results);
            reportJSON.results.failures.push(result);
        } else {
            reportJSON.results.stats.passes = reportJSON.results.stats.passes + 1;
            reportJSON.results.passes.push(result);
        }
    }
    //no return - reportJSON and file arguments past by reference
}

module.exports = {
    write: write,
    prepare: prepare
};
