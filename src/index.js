'use strict'

const MINUTES = 6E4

/**
 * Returns a number of minutes drifted between max and min around the passed minutes value. i.e. so 5 minute poll
 * requests don't all happen at once, may happen at 4.57 minute polls for example.
 *
 * @method driftedTimePeriod
 *
 * @param [minutes = 1] {Number}
 *        Number of minutes to drift around
 *
 * @param [drift = 0.1] {Number}
 *        Percentage of poll drift (for setting max and min), (i.e. 1 = 100%)
 *
 * @return {Number} The generated time period (in milliseconds) drifted around the given value
 */
export default function (minutes = 1, drift = 0.1) {
  const max = minutes * (1 + drift) * MINUTES
  const min = minutes * (1 - drift) * MINUTES

  return Math.floor(Math.random() * (max - min)) + min
}
