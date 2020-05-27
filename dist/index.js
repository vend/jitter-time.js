"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var MINUTES = 6E4;
/**
 * Returns a number of minutes jittered between max and min around the passed minutes value. i.e. so 5 minute poll
 * requests don't all happen at once, may happen at 4.57 minute polls for example.
 *
 * @method jitterTime
 *
 * @param [minutes = 1] {Number}
 *        Number of minutes to jitter around
 *
 * @param [jitter = 0.1] {Number}
 *        Percentage of poll jitter (for setting max and min), (i.e. 1 = 100%)
 *
 * @return {Number} The generated time period (in milliseconds) jittered around the given value
 */

function _default() {
  var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var jitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  var max = minutes * (1 + jitter) * MINUTES;
  var min = minutes * (1 - jitter) * MINUTES;
  return Math.floor(Math.random() * (max - min)) + min;
}