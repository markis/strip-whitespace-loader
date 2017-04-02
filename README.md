# strip-whitespace-loader

[![node](https://img.shields.io/node/v/strip-whitespace-loader.svg)](https://www.npmjs.com/package/strip-whitespace-loader)
[![Travis](https://img.shields.io/travis/markis/strip-whitespace-loader.svg)](https://travis-ci.org/markis/strip-whitespace-loader)
[![AppVeyor](https://img.shields.io/appveyor/ci/markis/strip-whitespace-loader.svg)](https://ci.appveyor.com/project/markis/strip-whitespace-loader)
[![Known Vulnerabilities](https://snyk.io/test/github/markis/strip-whitespace-loader/badge.svg)](https://snyk.io/test/github/markis/strip-whitespace-loader)
[![David](https://img.shields.io/david/markis/strip-whitespace-loader.svg)](https://david-dm.org/markis/strip-whitespace-loader)
[![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-loader.svg)](https://greenkeeper.io/)
[![Coveralls](https://img.shields.io/coveralls/markis/strip-whitespace-loader.svg)](https://coveralls.io/github/markis/strip-whitespace-loader)
[![Codacy grade](https://img.shields.io/codacy/grade/9c91f25bb9914a268cdf3644211fbae2.svg)](https://www.codacy.com/app/markis/strip-whitespace-loader)


Strip-Whitespace-Loader is a loader for webpack that will remove extraneous spaces from strings. It's perfect for working with rendering templates (ex. mustache, handlebars) or es6 javascript templates. It works with anything where you might create very long strings.

##### Before strip-whitespace-loader:
``` javascript
function() {
  if (condition) {
    const longString = '  String   with    some    extra   spaces  ';
  }
}
```

##### After strip-whitespace-loader:
``` javascript
function() {
  if (condition) {
    const longString = ' String with some extra spaces ';
  }
}
```

##### Webpack usage

``` javascript
{
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: [ 'strip-whitespace-loader', 'babel-loader' ]
      },
      {
        test: /\.tsx?$/,
        loader: [ 'strip-whitespace-loader', 'ts-loader' ]
      }
    ]
  }
}
```
