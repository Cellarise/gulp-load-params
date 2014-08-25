/* jslint node: true */
"use strict";
var map = require('map-stream');
var cucumber = require('./reports/cucumber');
var mocha = require('./reports/mocha');

/**
 * {description}
 * @module {name}
 * @param reportJSON {Object} - object to receive the results of the test.  The report results will be available on `report.results`.
 * @param opts {Object} - Task configuration options
 * @param [opts.opts.report='mocha'] {string} - The test report format to use.  Select from 'mocha' or 'cucumber'.
 * @param [opts.opts.suiteName='JSHint'] {string} - The test suite name
 * @param [opts.opts.suiteDesc=''] {string} - The test suite description
 * @returns {readable-stream/transform}
 * @example
 {>example-index/}
 */
module.exports = function (reportJSON, opts) {
    opts = opts || {};
    opts.suiteName = opts.suiteName || 'JSHint';
    opts.suiteDesc = opts.suiteDesc || '';
    opts.report = opts.report || 'mocha';

    if (opts.report === 'cucumber') {
        cucumber.prepare(reportJSON);
    } else {
        //default to mocha
        mocha.prepare(reportJSON);
    }

    return map(function (file, cb) {
        if (opts.report === 'cucumber') {
            cucumber.write(reportJSON, file, opts);
        } else {
            //default to mocha
            mocha.write(reportJSON, file, opts);
        }
        cb(null, file);
    });
};