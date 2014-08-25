/* jslint node: true */
"use strict";
var English = require('yadda').localisation.English;
var should = require('should');
var gulp = require('gulp');

/* Feature: Develop a gulp task loader with parameters */
module.exports = (function() {
    return English.library()
    /*Scenario: gulp-load */
        .define("Given I have initialised gulp-load", function(done) {
            this.world.load = require('..')(gulp);
            done();
        })
        .define("When I call gulp loadTasks", function(done) {
            this.world.loadTasks = gulp.loadTasks;
            done();
        })
        .define("Then it should be equal to the function returned from gulp-load", function(done) {
            this.world.load.should.be.eql(this.world.loadTasks);
            done();
        })/*Scenario: load single file */
        .define("When I load a file with a gulp task", function(done) {
            this.world.load(__dirname + '/task.js');
            done();
        })
        .define("Then the gulp task in file should exist", function(done) {
            should.exist(gulp.tasks.a);
            done();
        })/*Scenario: load specified module */
        .define("When I load a module with gulp tasks", function(done) {
            this.world.load(__dirname + '/gulp-module');
            done();
        })
        .define("Then the gulp task in module should exist", function(done) {
            should.exist(gulp.tasks.b);
            should.exist(gulp.tasks.c);
            done();
        })/*Scenario: gulp-load-global */
        .define("When I load a global module with gulp tasks", function(done) {
            this.world.load('gulp-load-global');
            done();
        })
        .define("Then the gulp task in global module should not exist", function(done) {
            should.not.exist(gulp.tasks.d);
            done();
        })/*Scenario: ignore when not exist */
        .define("When I load a module with dependencies which do not exist", function(done) {
            done();
        })
        .define("Then the no error should be thrown", function(done) {
            //jshint ignore:start
            var self = this;
            (function () {
                self.world.load(__dirname + '/noexist');
            }).should.not.throw();
            //jshint ignore:end
            done();
        })/*Scenario: pass parameter */
        .define("When I load a file with a gulp task and pass parameters", function(done) {
            done();
        })
        .define("Then the gulp task in file should exist and read the parameters", function(done) {
            done();
        });
})();