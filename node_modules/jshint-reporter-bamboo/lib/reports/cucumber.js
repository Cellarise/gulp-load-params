/* jslint node: true */
"use strict";
var utils = require('./../utils');

function prepare(reportJSON) {
    //setup reportJSON - do not overwrite reportJSON so add properties
    reportJSON.results = reportJSON.results || [
        {
            "id": "JSHINT-code-analysis-feature",
            "uri": "features/JSHINT-code-analysis.feature",
            "keyword": "Feature",
            "name": "JSHINT code analysis",
            "line": 1,
            "description": "As a developer\n" +
                "I want to ensure JSHINT code analysis standards are met\n" +
                "So that my code is conformant with technical standards designed to ensure consistency and readability",
            "elements": []
        }
    ];

    //no return - reportJSON and file arguments past by reference
}

function write(reportJSON, file, opts) {
    var result = {
        "id": file.path.replace(/.*[\\\/]/, ''),
        "keyword": "Scenario",
        "name":  opts.suiteName + " - " + file.path.replace(/.*[\\\/]/, ''),
        "line": 3,
        "description": opts.suiteDesc + " - " + file.path,
        "type": "scenario",
        "steps": [
            {
                "result": {
                    "duration": 0,
                    "status": "passed"
                },
                "name": "a Javascript file and the repositories default JSHint configuration file",
                "keyword": "Given ",
                "line": 4
            },
            {
                "result": {
                    "duration": 0,
                    "status": "passed"
                },
                "name": "analysed using JSHint",
                "keyword": "When ",
                "line": 5
            },
            {
                "result": {
                    "duration": 0,
                    "status": "passed"
                },
                "name": "the file should meet the defined coding standards",
                "keyword": "Then ",
                "line": 6
            }
        ]
    };

    if (file.hasOwnProperty('jshint')) {
        if (!file.jshint.success) {
            result.steps[2].result.status = "failed";
            result.steps[2].result.error_message =
                utils.failure_message(file.jshint.results, opts) + " " + opts.suiteName + ": " + utils.failure_details(file.jshint.results);
        }
    }
    reportJSON.results[0].elements.push(result);
    //no return - reportJSON and file arguments past by reference
}

module.exports = {
    write: write,
    prepare: prepare
};
