# strip-whitespace-loader

[![Build Status](https://travis-ci.org/markis/strip-whitespace-loader.svg?branch=master)](https://travis-ci.org/markis/strip-whitespace-loader) [![Known Vulnerabilities](https://snyk.io/test/github/markis/strip-whitespace-loader/badge.svg)](https://snyk.io/test/github/markis/strip-whitespace-loader) [![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-loader.svg)](https://greenkeeper.io/)

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
