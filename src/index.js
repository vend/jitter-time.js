'use strict'

const MINUTES = 6E4

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
export default function (minutes = 1, jitter = 0.1) {
  const max = minutes * (1 + jitter) * MINUTES
  const min = minutes * (1 - jitter) * MINUTES

  return Math.floor(Math.random() * (max - min)) + min
}
