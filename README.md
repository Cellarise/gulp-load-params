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

**Type**: `name`  
**Returns**: `loadTasks`  
**Example**  
Gulp-load will return a function that is same as `gulp.loadTasks`.

```
var loadTasks = require('gulp-load')(gulp);
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

Copyright (c) 2014 gulp-load-params

## Dependencies
[abbrev@1.0.5](&quot;http://github.com/isaacs/abbrev-js&quot;) - &quot;MIT&quot;, [amdefine@0.1.0](&quot;https://github.com/jrburke/amdefine&quot;) - [&quot;BSD&quot;,&quot;MIT&quot;], [ansi-regex@0.2.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@1.1.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [argparse@0.1.15](&quot;https://github.com/nodeca/argparse&quot;) - &quot;MIT&quot;, [async@0.2.10](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [async@0.9.0](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [chalk@0.5.1](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [cli-table@0.3.0]([object Object]) - &quot;MIT*&quot;, [cli@0.6.3](&quot;http://github.com/chriso/cli&quot;) - [&quot;MIT&quot;], [clone-stats@0.0.1](&quot;https://github.com/hughsk/clone-stats&quot;) - &quot;MIT&quot;, [colors@0.6.2](&quot;http://github.com/Marak/colors.js&quot;) - , [commander@0.6.1](&quot;https://github.com/visionmedia/commander.js&quot;) - &quot;MIT*&quot;, [commander@2.0.0](&quot;https://github.com/visionmedia/commander.js&quot;) - &quot;MIT*&quot;, [commander@2.3.0](&quot;https://github.com/visionmedia/commander.js&quot;) - &quot;MIT*&quot;, [config-chain@1.1.8](&quot;https://github.com/dominictarr/config-chain&quot;) - , [console-browserify@1.1.0](&quot;https://github.com/Raynos/console-browserify&quot;) - [&quot;MIT&quot;], [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [date-now@0.1.4](&quot;https://github.com/Colingo/date-now&quot;) - [&quot;MIT&quot;], [dateformat@1.0.8-1.2.3](&quot;https://github.com/felixge/node-dateformat&quot;) - &quot;MIT*&quot;, [debug@1.0.4](&quot;https://github.com/visionmedia/debug&quot;) - &quot;MIT*&quot;, [deepmerge@0.2.7](&quot;https://github.com/nrf110/deepmerge&quot;) - , [diff@1.0.7](&quot;https://github.com/kpdecker/jsdiff&quot;) - [&quot;BSD&quot;], [domelementtype@1.1.1](&quot;https://github.com/FB55/domelementtype&quot;) - &quot;MIT*&quot;, [domhandler@2.2.0](&quot;https://github.com/fb55/domhandler&quot;) - &quot;MIT*&quot;, [domutils@1.5.0](&quot;https://github.com/FB55/domutils&quot;) - &quot;MIT*&quot;, [duplexer2@0.0.2](&quot;https://github.com/deoxxa/duplexer2&quot;) - &quot;BSD&quot;, [duplexer@0.1.1](&quot;https://github.com/Raynos/duplexer&quot;) - [&quot;MIT&quot;], [dustjs-helpers@1.2.0](&quot;https://github.com/linkedin/dustjs-helpers&quot;) - &quot;MIT&quot;, [dustjs-linkedin@2.3.5](&quot;https://github.com/linkedin/dustjs&quot;) - &quot;MIT&quot;, [dustjs-linkedin@2.4.0](&quot;https://github.com/linkedin/dustjs&quot;) - &quot;MIT&quot;, [entities@1.0.0](&quot;https://github.com/fb55/node-entities&quot;) - &quot;BSD-like&quot;, [escape-string-regexp@1.0.1](&quot;https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [escodegen@1.3.3](&quot;http://github.com/Constellation/escodegen&quot;) - [&quot;BSD&quot;], [esprima@1.0.4](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@1.1.1](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@1.2.2](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [estraverse@1.5.1](&quot;http://github.com/Constellation/estraverse&quot;) - [&quot;BSD&quot;], [esutils@1.0.0](&quot;http://github.com/Constellation/esutils&quot;) - [&quot;BSD&quot;], [event-stream@3.1.7](&quot;https://github.com/dominictarr/event-stream&quot;) - , [exit@0.1.2](&quot;https://github.com/cowboy/node-exit&quot;) - [&quot;MIT&quot;], [fileset@0.1.5](&quot;https://github.com/mklabs/node-fileset&quot;) - [&quot;MIT&quot;], [from@0.1.3](&quot;https://github.com/dominictarr/from&quot;) - &quot;MIT&quot;, [glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [glob@3.2.3](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [graceful-fs@2.0.3](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [growl@1.8.1](&quot;https://github.com/visionmedia/node-growl&quot;) - &quot;MIT*&quot;, [gulp-istanbul-custom-reports@0.1.1](&quot;https://github.com/Cellarise/gulp-istanbul-custom-reports&quot;) - [&quot;MIT&quot;], [gulp-jshint@1.8.4](&quot;https://github.com/spenceralger/gulp-jshint&quot;) - [&quot;MIT&quot;], [gulp-json-editor@2.0.2](&quot;https://github.com/morou/gulp-json-editor&quot;) - &quot;MIT&quot;, [gulp-load-params@0.0.0](&quot;https://github.com/Cellarise/gulp-load-params&quot;) - &quot;MIT License (MIT)&quot;, [gulp-tap@0.1.1](&quot;https://github.com/geejs/gulp-tap&quot;) - &quot;MIT&quot;, [gulp-util@2.2.20](&quot;https://github.com/wearefractal/gulp-util&quot;) - [&quot;MIT&quot;], [gulp-util@3.0.0](&quot;https://github.com/wearefractal/gulp-util&quot;) - [&quot;MIT&quot;], [gulp-yadda-steps@0.1.3](&quot;https://github.com/Cellarise/gulp-yadda-steps&quot;) - &quot;MIT*&quot;, [handlebars@1.3.0](&quot;https://github.com/wycats/handlebars.js&quot;) - &quot;MIT&quot;, [has-ansi@0.1.0](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [htmlparser2@3.7.3](&quot;https://github.com/fb55/htmlparser2&quot;) - &quot;MIT&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [ini@1.2.1](&quot;https://github.com/isaacs/ini&quot;) - &quot;MIT*&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [istanbul-reporter-clover-limits@0.1.2](&quot;https://github.com/Cellarise/istanbul-reporter-clover-limits&quot;) - &quot;MIT*&quot;, [istanbul@0.2.16](&quot;https://github.com/gotwarlost/istanbul&quot;) - &quot;MIT*&quot;, [istanbul@0.3.0](&quot;https://github.com/gotwarlost/istanbul&quot;) - &quot;MIT*&quot;, [jade@0.26.3](&quot;https://github.com/visionmedia/jade&quot;) - &quot;MIT*&quot;, [js-beautify@1.4.2](&quot;https://github.com/einars/js-beautify&quot;) - &quot;MIT&quot;, [js-yaml@3.2.1](&quot;https://github.com/nodeca/js-yaml&quot;) - &quot;MIT&quot;, [jshint-reporter-bamboo@0.1.2](&quot;https://github.com/Cellarise/jshint-reporter-bamboo&quot;) - &quot;MIT*&quot;, [jshint@2.5.5](&quot;https://github.com/jshint/jshint&quot;) - [&quot;MIT&quot;], [lodash._escapehtmlchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._escapestringchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._htmlescapes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._isnative@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._objecttypes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reinterpolate@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reunescapedhtml@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._shimkeys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.defaults@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.escape@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.isobject@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.keys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.template@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.templatesettings@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.values@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash@2.4.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [map-stream@0.1.0](&quot;https://github.com/dominictarr/map-stream&quot;) - , [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.4.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimist@0.0.8](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@0.2.0](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [mkdirp@0.3.0](&quot;http://github.com/substack/node-mkdirp&quot;) - &quot;MIT/X11&quot;, [mkdirp@0.3.5](&quot;http://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [mkdirp@0.5.0](&quot;https://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [mocha-bamboo-reporter-bgo@1.0.7](&quot;https://github.com/issacg/mocha-bamboo-reporter&quot;) - [&quot;Apache 2.0&quot;], [mocha@1.21.4](&quot;https://github.com/visionmedia/mocha&quot;) - [&quot;MIT&quot;], [ms@0.6.2](&quot;https://github.com/guille/ms.js&quot;) - &quot;MIT*&quot;, [multipipe@0.1.1](&quot;https://github.com/segmentio/multipipe&quot;) - &quot;MIT*&quot;, [nopt@2.1.2](&quot;http://github.com/isaacs/nopt&quot;) - &quot;MIT&quot;, [nopt@3.0.1](&quot;http://github.com/isaacs/nopt&quot;) - &quot;MIT&quot;, [object-keys@0.4.0](&quot;https://github.com/ljharb/object-keys&quot;) - &quot;MIT&quot;, [once@1.3.0](&quot;https://github.com/isaacs/once&quot;) - &quot;BSD&quot;, [optimist@0.3.7](&quot;http://github.com/substack/node-optimist&quot;) - &quot;MIT/X11&quot;, [pause-stream@0.0.11](&quot;https://github.com/dominictarr/pause-stream&quot;) - [&quot;MIT&quot;,&quot;Apache2&quot;], [proto-list@1.2.3](&quot;https://github.com/isaacs/proto-list&quot;) - &quot;MIT&quot;, [rcfinder@0.1.8](&quot;https://github.com/spenceralger/rcfinder&quot;) - &quot;MIT&quot;, [rcloader@0.1.2](&quot;git@github.com:spenceralger/rcloader&quot;) - &quot;MIT&quot;, [readable-stream@1.0.31](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readdirp@1.1.0](&quot;https://github.com/thlorenz/readdirp&quot;) - &quot;MIT&quot;, [resolve@0.7.4](&quot;https://github.com/substack/node-resolve&quot;) - &quot;MIT&quot;, [shelljs@0.3.0](&quot;https://github.com/arturadib/shelljs&quot;) - &quot;BSD*&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [sloc@0.1.4](&quot;https://github.com/flosse/sloc&quot;) - &quot;MIT&quot;, [source-map@0.1.38](&quot;http://github.com/mozilla/source-map&quot;) - [&quot;BSD&quot;], [split@0.2.10](&quot;https://github.com/dominictarr/split&quot;) - &quot;MIT*&quot;, [stream-combiner@0.0.4](&quot;https://github.com/dominictarr/stream-combiner&quot;) - &quot;MIT&quot;, [streamifier@0.1.0](&quot;https://github.com/gagle/node-streamifier&quot;) - &quot;MIT&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [strip-ansi@0.3.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [strip-json-comments@0.1.3](&quot;https://github.com/sindresorhus/strip-json-comments&quot;) - &quot;MIT&quot;, [supports-color@0.2.0](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [through2@0.4.2](&quot;https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [through2@0.5.1](&quot;https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [through@2.3.4](&quot;https://github.com/dominictarr/through&quot;) - &quot;MIT&quot;, [uglify-js@2.3.6](&quot;https://github.com/mishoo/UglifyJS2&quot;) - &quot;MIT*&quot;, [underscore.string@2.3.3](&quot;https://github.com/epeli/underscore.string&quot;) - [&quot;MIT&quot;], [underscore@1.4.4](&quot;https://github.com/documentcloud/underscore&quot;) - &quot;MIT*&quot;, [underscore@1.6.0](&quot;https://github.com/jashkenas/underscore&quot;) - [&quot;MIT&quot;], [vinyl@0.2.3](&quot;https://github.com/wearefractal/vinyl&quot;) - [&quot;MIT&quot;], [which@1.0.5](&quot;https://github.com/isaacs/node-which&quot;) - &quot;MIT*&quot;, [wordwrap@0.0.2](&quot;https://github.com/substack/node-wordwrap&quot;) - &quot;MIT/X11&quot;, [xtend@2.1.2](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], [xtend@3.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], [yadda@0.10.14](&quot;https://github.com/acuminous/yadda&quot;) - &quot;Apache2&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.