# Jitter Time!
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![js-standard-style][standard-style-image]][standard-style-url]

[travis-image]: https://img.shields.io/travis/vend/jitter-time.js.svg?style=flat
[travis-url]: https://travis-ci.org/vend/jitter-time.js
[npm-image]: https://img.shields.io/npm/v/jitter-time.svg?style=flat
[npm-url]: https://npmjs.org/package/jitter-time
[standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-style-url]: https://github.com/feross/standard

### Jittery time generation

![jitter time](http://media.giphy.com/media/gpGrAKmOsiD3W/giphy.gif)

Generates random time periods (in milliseconds) between a max and min around the given minutes value. For
example this can be used to ensure 5 minute poll requests across multiple clients don't all happen at once.

## Install

```
$ npm install --save jitter-time
```

## Usage

```js
var jitterTime = require('jitter-time')

var POLL_INTERVAL = jitterTime(5, 0.2)
//=> 290110 (Random number between 240000 and 360000)

setInterval(syncDataWithServer, POLL_INTERVAL)
```

## API

### jitterTime([minutes], [jitter])

#### minutes

- Type: `number`
- Default: `1`

Number of minutes to jitter around.

#### jitter

- Type: `number`
- Default: `0.1`

Percentage of jitter (for setting max and min). E.g. 1 = +/-100%, 0.1 = +/-10%, etc.

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
