# {name}
[![view on npm](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name})
[![npm module downloads per month](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name})
[![Dependency Status](https://david-dm.org/Cellarise/{name}.svg)](https://david-dm.org/Cellarise/{name})

> {description}


##Usage 

This reporter for gulp-jshint requires an object to store the results of each file analysed by jshint.

### As a gulp task

Require this package and use as part of your gulp-jshint task. Pass an empty 'report' object. The report results will be available on `report.results`.

```js
var JshintReporterBamboo = require('{name}');
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


# API
{~lb}{~lb}>main{~rb}{~rb}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 {author}