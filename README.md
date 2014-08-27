# gulp-load-params
[![view on npm](http://img.shields.io/npm/v/gulp-load-params.svg)](https://www.npmjs.org/package/gulp-load-params)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-load-params.svg)](https://www.npmjs.org/package/gulp-load-params)
[![Dependency Status](https://david-dm.org/Cellarise/gulp-load-params.svg)](https://david-dm.org/Cellarise/gulp-load-params)

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


# API
      <a name="module_gulp-load-params"></a>
    #gulp-load-params
        Load gulp task just like grunt.loadTasks and pass parameters through an options object.
        
      **Params**
      
      - gulp `Object` - The gulp module  
      - opts `Object` - optional options  
        - \[modulePrefix='gulp-'\] `Object` - load dependencies that start with this prefix in package.json.  
      
      **Type**: `name`  
      **Returns**: `loadTasks`**Example**  
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

**If load a module, it will load task from tasks directory of current module, and if gulp plugins (start with gulp-) exists in dependencies of package.json, then it will load each plugin as a module.**
      
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 John Barry

## Dependencies
[glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [gulp-load-params@0.0.0](&quot;https://github.com/Cellarise/gulp-load-params&quot;) - &quot;MIT License (MIT)&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [underscore@1.6.0](&quot;https://github.com/jashkenas/underscore&quot;) - [&quot;MIT&quot;], 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.