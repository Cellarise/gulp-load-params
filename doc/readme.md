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
{{>main}}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 John Barry

## Dependencies
[glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [gulp-load-params@0.0.0](&quot;https://github.com/Cellarise/gulp-load-params&quot;) - &quot;MIT License (MIT)&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [underscore@1.6.0](&quot;https://github.com/jashkenas/underscore&quot;) - [&quot;MIT&quot;], 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.