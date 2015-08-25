# gulp-load-params
[![view on npm](http://img.shields.io/npm/v/gulp-load-params.svg?style=flat)](https://www.npmjs.org/package/gulp-load-params)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-load-params.svg?style=flat)](https://www.npmjs.org/package/gulp-load-params)
[![Dependency status](https://david-dm.org/Cellarise/gulp-load-params.svg?style=flat)](https://david-dm.org/Cellarise/gulp-load-params)
[![Build Status](https://travis-ci.org/Cellarise/gulp-load-params.svg?branch=master)](https://travis-ci.org/Cellarise/gulp-load-params)
[![Code
Climate](https://codeclimate.com/github/Cellarise/gulp-load-params/badges/gpa.svg)](https://codeclimate.com/github/Cellarise/gulp-load-params)
[![Test Coverage](https://codeclimate.com/github/Cellarise/gulp-load-params/badges/coverage.svg)](https://codeclimate.com/github/Cellarise/gulp-load-params/badges/coverage.svg)

> Load gulp task just like grunt.loadTasks and pass parameters through an options object.


## Usage

Require gulp-load-params in your gulpfile

```
var gulp = require('gulp');
require('gulp-load-params')(gulp);

// load tasks from tasks directory and
// dependencies of start with `gulp-` in package.json
// pass parameters using the options object
var options = { obj: 'obj1'};
gulp.loadTasks(__dirname, options);

// run tasks which you loaded
gulp.tasks('default', function() {
  gulp.run('your_task');
})
```


## API
<a name="module_gulp-load-params"></a>
### gulp-load-params ⇒ <code>loadTasks</code>
Load gulp task just like grunt.loadTasks and pass parameters through an options object.
**Returns**: <code>loadTasks</code> - loadTasks function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| gulp | <code>Object</code> |  | The gulp module |
| opts | <code>Object</code> |  | optional options |
| [opts.modulePrefix] | <code>Object</code> | <code>&quot;gulp-&quot;</code> | load dependencies that start with this prefix in package.json. |
| [opts.taskPath] | <code>Object</code> | <code>&quot;tasks&quot;</code> | load tasks from this directory path. |

**Example**  
gulp-load-params will return a function that is same as `gulp.loadTasks`.

```
var loadTasks = require('gulp-load-params')(gulp);
loadTasks === gulp.loadTasks // return true
```

LoadTasks can load single file.

```
gulp.loadTasks('path/to/task.js');
```

LoadTasks can load specified module.

```
gulp.loadTasks('path/to/module');
```

LoadTasks can load by module's name. It will lookup from `NODE_PATH` and node_modules of current module.

```
gulp.loadTasks('gulp-concat');
```

If loading a module, it will load task from tasks directory of current module, and if gulp plugins (start with gulp-) exists in dependencies of package.json, then it will load each plugin as a module.
-

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
<tr>
        <td colspan=4><strong>Version: 0.1.8 - released 2015-08-25</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-14</td>
            <td><p>Package: Update development dependencies and configure for travis-ci</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.7 - released 2015-05-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-13</td>
            <td><p>Package: Update development dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2015-05-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-12</td>
            <td><p>Package: remove dependency on underscore.js</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2015-03-07</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-11</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-10</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-9</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-8</td>
            <td><p>Package: Migrate from jshint to eslint static code analysis</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-10-11</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-7</td>
            <td><p>Package: Add option to provide an alternate lookup path for gulp tasks</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-6</td>
            <td><p>Package: Remove all gulp tasks except &#39;test&#39;</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-08-27</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-5</td>
            <td><p>Package: Update dependencies.</p><p>glob   ^3.2.7  latest  4.0.5 </p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-08-27</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-4</td>
            <td><p>Package: Migrate to new Cellarise Package Manager.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-08-25</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-3</td>
            <td><p>Package: Fix tasks in gulp packages overriding tasks in primary module.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-08-25</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDGPLOAD-2</td>
            <td><p>Develop a gulp task loader with parameters</p><p>As a developer
I can load gulp tasks automatically and pass them parameters
So that I can simplify my build scaffold and process</p></td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2015 John Barry
## Dependencies
[gulp-load-params@0.0.0](&quot;https://github.com/Cellarise/gulp-load-params&quot;) - &quot;MIT License (MIT)&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.
