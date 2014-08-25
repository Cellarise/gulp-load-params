/* jslint node: true */
"use strict";
var jeditor = require('gulp-json-editor');

/**
 * A gulp build task to prepare the package.json file for build packaging and deployment.
 * Atlassian Bamboo variables are expected and used to populate the package.json version and config properties.
 * Also, all optionalDependecies are removed.
 * @alias tasks:metadata
 */
module.exports = function(gulp) {
    gulp.task('metadata', function() {
        var metaData = process.env;
        return gulp.src(['package.json'])
            .pipe(jeditor(function(json) {
                //set attributes based on environment
                json.version = metaData.bamboo_jira_version && metaData.bamboo_jira_version !== "DEV" ? metaData.bamboo_jira_version : json.version;

                //delete or clear properties not to be published
                json.optionalDependencies = {};
                if(json.hasOwnProperty('config')){
                    var adminEmail = json.config.adminEmail;
                    json.config = {};
                    json.adminEmail = adminEmail;
                }

                //set config
                json.config.build = metaData.bamboo_buildNumber ? metaData.bamboo_buildNumber : "n/a";
                json.config.buildTimestamp = metaData.bamboo_buildTimeStamp ? metaData.bamboo_buildTimeStamp : new global.Date().toISOString();

                return json;
            }))
            .pipe(gulp.dest('Build'));
    });
};
