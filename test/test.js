/* jslint node: true */
/* global featureFile, scenarios, steps */
"use strict";

var Yadda = require('yadda');
var context = { world: {} }; //interpreter context - global
var cwd = process.cwd();
var directories = require(cwd + '/package.json').directories;
var testFeatures = cwd + '/' + directories.testFeatures;
var testSteps = cwd + '/' + directories.testSteps;

//helper function to prepare multiple libraries for loading into the yadda interpreter
function require_libraries(libraries) {
    function require_library(libraries, library) {
        return libraries.concat(require(testSteps + library));
    }
    return libraries.reduce(require_library, []);
}

//attach yadda functions like featureFile to this object
Yadda.plugins.mocha.AsyncStepLevelPlugin.init();

//execute all unit test feature files
new Yadda.FeatureFileSearch([testFeatures]).each(function(file) {

    featureFile(file, function(feature) {
        var loaded_libraries,
            libraries = [];

        if(feature.annotations.libraries !== undefined){
            libraries = feature.annotations.libraries.split(', '); //load any libraries annotated in the feature file
        }
        libraries.push(file.replace(/.*\\|\..*$/g, '').replace(/\..+$/, '') + "-steps.js"); //add
        loaded_libraries = require_libraries(libraries);

        var yadda = new Yadda.Yadda(loaded_libraries, context);
        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yadda.yadda(step, done);
            });
        });
    });
});