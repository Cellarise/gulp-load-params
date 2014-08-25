Given the Javascript file:

```js
for (i=0; i < 10; i = i + 1) {
    ctr = ctr + i;
}
```

When you pass the file to a `new JshintReporterBamboo()` using an empty 'report' object.  The report results will be available on `report.results`.

```js
var JshintReporterBamboo = require('jshint-reporter-bamboo');
var jshint = require('gulp-jshint');
var report = {};
gulp.src('./lib')
.pipe(jshint())
.pipe(new JshintReporterBamboo(report));
.on('end', function() {
    fs.writeFileSync('report.json', JSON.stringify(report.results, null, 2), 'utf-8');
    done();
});
```

Then you'll get a jshint mocha formatted report:

```js
{
  "stats": {
    "start": "2014-08-22T06:04:30.645Z",
    "end": "2014-08-22T06:04:30.707Z",
    "suites": null,
    "tests": null,
    "duration": 62,
    "passes": null
  },
  "failures": [],
  "passes": [
    {
      "title": " index.js",
      "fullTitle": " \\jshint-reporter-bamboo\\lib\\index.js",
      "duration": 62
    }
  ],
  "skipped": []
}
```

When you pass the file to a `new JshintReporterBamboo()` using options report='cucumber'.

```js
var JshintReporterBamboo = require('jshint-reporter-bamboo');
var jshint = require('gulp-jshint');
var report = {};
gulp.src('./lib')
.pipe(jshint())
.pipe(new JshintReporterBamboo(report, {report:'cucumber'}));
.on('end', function() {
    fs.writeFileSync('report.json', JSON.stringify(report.results, null, 2), 'utf-8');
    done();
});
```

Then you'll get a jshint cucumber formatted report:

```js
[
  {
    "id": "JSHINT-code-analysis-feature",
    "uri": "features/JSHINT-code-analysis.feature",
    "keyword": "Feature",
    "name": "JSHINT code analysis",
    "line": 1,
    "description": "As a developer\nI want to ensure JSHINT code analysis standards are met\nSo that my code is conformant with technical standards designed to ensure consistency and readability",
    "elements": [
      {
        "id": "index.js",
        "keyword": "Scenario",
        "name": "index.js",
        "line": 3,
        "description": "\\jshint-reporter-bamboo\\lib\\index.js",
        "type": "scenario",
        "steps": [
          {
            "result": {
              "duration": 0,
              "status": "passed"
            },
            "name": "a Javascript file",
            "keyword": "Given ",
            "line": 4
          },
          {
            "result": {
              "duration": 0,
              "status": "passed"
            },
            "name": "analysed using JSHint and the repositories default JSHint configuration file",
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
      }
    ]
  }
]
```