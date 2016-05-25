# babel-preset-es2020
[![npm version][2]][3] [![downloads][8]][9] [![js-standard-style][10]][11]
> Babel preset for a subset of ES6, because in hindsight we can do without most
> of it

## Install
```sh
$ npm install --save-dev babel-preset-es2020
```

## Usage

### Via `.babelrc` (Recommended)
**.babelrc**
```json
{
  "presets": ["es2020"]
}
```

### Via CLI
```sh
$ babel script.js --presets es2020
```

### Via Node API
```javascript
require('babel-core').transform('code', {
  presets: ['es2020']
})
```

## See Also
- [es2020](https://github.com/yoshuawuyts/es2020) - browserify transform for a
  subset of ES6

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/babel-preset-es2020.svg?style=flat-square
[3]: https://npmjs.org/package/babel-preset-es2020
[4]: https://img.shields.io/travis/yoshuawuyts/babel-preset-es2020/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/babel-preset-es2020
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/babel-preset-es2020/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/babel-preset-es2020
[8]: http://img.shields.io/npm/dm/babel-preset-es2020.svg?style=flat-square
[9]: https://npmjs.org/package/babel-preset-es2020
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
