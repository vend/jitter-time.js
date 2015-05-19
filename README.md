# drifted-time-period
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![js-standard-style][standard-style-image]][standard-style-url]

[travis-image]: https://img.shields.io/travis/vend/drifted-time-period.svg?style=flat
[travis-url]: https://travis-ci.org/vend/drifted-time-period
[npm-image]: https://img.shields.io/npm/v/drifted-time-period.svg?style=flat
[npm-url]: https://npmjs.org/package/drifted-time-period
[standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-style-url]: https://github.com/feross/standard

> Generates random time periods (in milliseconds) drifted between a max and min around the given minutes value. For
> example this can be used to ensure 5 minute poll requests across multiple clients don't all happen at once.

## Install

```
$ npm install --save drifted-time-period
```

## Usage

```js
var driftedTimePeriod = require('drifted-time-period')

var POLL_INTERVAL = driftedTimePeriod(5, 0.2) //=> 290110 (Random number between 240000 and 360000)

setInterval(syncDataWithServer, POLL_INTERVAL)
```

## API

### driftedTimePeriod([minutes], [drift])

#### minutes

Type: `number`
Default: `1`

Number of minutes to drift around.

#### drift

Type: `number`  
Default: `0.1`

Percentage of drift (for setting max and min). E.g. 1 = +/-100%, 0.1 = +/-10%, etc.

## Contributing

### Build

```js
npm run build
```

### Test

```js
npm test
```

### Watch

To watch for changes, build them and run the tests:

```js
npm run watch
```

## License

MIT © [Vend Ltd.](https://github.com/vend)
