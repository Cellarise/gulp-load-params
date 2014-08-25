# gulp-istanbul-custom-reports
[![view on npm](http://img.shields.io/npm/v/gulp-istanbul-custom-reports.svg)](https://www.npmjs.org/package/gulp-istanbul-custom-reports)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-istanbul-custom-reports.svg)](https://www.npmjs.org/package/gulp-istanbul-custom-reports)
[![Dependency Status](https://david-dm.org/Cellarise/gulp-istanbul-custom-reports.svg)](https://david-dm.org/Cellarise/gulp-istanbul-custom-reports)

> Forked from SBoudrias/gulp-Istanbul - Istanbul unit test coverage plugin for gulp with the ability to register custom Istanbul report implementation.



Works on top of any Node.js unit test framework.

Installation
---------------

```shell
npm install --save-dev gulp-istanbul-custom-reports
```

Example
---------------

Then, add it to your `gulpfile.js`:

```javascript
var istanbul = require('gulp-istanbul-custom-reports');
var mocha = require('gulp-mocha'); // Using mocha here, but any test framework will work

gulp.task('test', function (cb) {
  gulp.src(['lib/**/*.js', 'main.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});
```

API
--------------

### istanbul(opt)

Instrument files passed in the stream.

#### opt
Type: `Object` (optional)
```js
{
  coverageVariable: 'someVariable',
  ...other Instrumeter options...
}
```

##### coverageVariable
Type: `String` (optional)
Default: `'$$cov_' + new Date().getTime() + '$$'`

The global variable istanbul uses to store coverage

See also:
- [istanbul coverageVariable][istanbul-coverage-variable]
- [SanboxedModule][sandboxed-module-coverage-variable]

##### Other Istanbul Instrutrumenter options

See:
- [istanbul Instrumenter documentation][istanbul-coverage-variable]


### istanbul.summarizeCoverage(opt)

get coverage summary details

#### opt
Type: `Object` (optional)
```js
{
  coverageVariable: 'someVariable'
}
```
##### coverageVariable
Type: `String` (optional)
Default: `'$$cov_' + new Date().getTime() + '$$'`

The global variable istanbul uses to store coverage

See also:
- [istanbul coverageVariable][istanbul-coverage-variable]
- [SanboxedModule][sandboxed-module-coverage-variable]

#### returns
Type: `Object`
```js
{
  lines: { total: 4, covered: 2, skipped: 0, pct: 50 },
  statements: { total: 4, covered: 2, skipped: 0, pct: 50 },
  functions: { total: 2, covered: 0, skipped: 0, pct: 0 },
  branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
}
```

See also:
- [istanbul utils.summarizeCoverage()][istanbul-summarize-coverage]


### istanbul.registerReport(report)

Register a custom Istanbul report implementation.

#### report
Type: `Function`

Constructor the constructor function for the report. This function must have a `TYPE` property of type String, that will be used in `Report.create()`
```js
var customReport = require('istanbul-reporter-clover-source-map');
istanbul.registerReport(customReport)
```

### istanbul.istanbul()

Get istanbul instance used by this module.

#### returns
Type: `Function`

Istanbul instance used by this module.


### istanbul.writeReports(opt)

Create the reports on stream end.

#### opt
Type: `Object` (optional)
```js
{
  dir: './coverage',
  reporters: [ 'lcov', 'json', 'text', 'text-summary' ],
  reportOpts: { dir: './coverage' },
  coverageVariable: 'someVariable'
}
```

#### dir
Type: `String` (optional)
Default: `./coverage`

The folder in which the reports are to be outputted.

#### reporters
Type: `Array` (optional)
Default: `[ 'lcov', 'json', 'text', 'text-summary' ]`

The list of reporters to use, one of:
- 'clover'
- 'cobertura'
- 'html'
- 'json'
- 'lcov'
- 'lcovonly'
- 'none'
- 'teamcity'
- 'text'
- 'text-summary'

See also `require('istanbul').Report.getReportList()`

##### coverageVariable
Type: `String` (optional)
Default: `'$$cov_' + new Date().getTime() + '$$'`

The global variable istanbul uses to store coverage

See also:
- [istanbul coverageVariable][istanbul-coverage-variable]
- [SanboxedModule][sandboxed-module-coverage-variable]

License
------------

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Simon Boudrias - 2013 - modified by John Barry

[istanbul]: http://gotwarlost.github.io/istanbul/
[gulp]: https://github.com/gulpjs/gulp

[npm-url]: https://npmjs.org/package/gulp-istanbul
[npm-image]: https://badge.fury.io/js/gulp-istanbul.png

[travis-url]: http://travis-ci.org/SBoudrias/gulp-istanbul
[travis-image]: https://secure.travis-ci.org/SBoudrias/gulp-istanbul.png?branch=master

[depstat-url]: https://david-dm.org/SBoudrias/gulp-istanbul
[depstat-image]: https://david-dm.org/SBoudrias/gulp-istanbul.png

[istanbul-coverage-variable]: http://gotwarlost.github.io/istanbul/public/apidocs/classes/Instrumenter.html
[istanbul-summarize-coverage]: http://gotwarlost.github.io/istanbul/public/apidocs/classes/ObjectUtils.html#method_summarizeCoverage
[sandboxed-module-coverage-variable]: https://github.com/felixge/node-sandboxed-module/blob/master/lib/sandboxed_module.js#L240
