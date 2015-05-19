/*eslint-env mocha */
'use strict'

import assert from 'assert'
import driftedTimePeriod from '../'

describe('drifted-time-period', function () {

  function test10k (argsToPass, min, max) {
    const lowerBound = min * 60000
    const upperBound = max * 60000

    for (let i = 0; i < 10000; i += 1) {
      const generatedPeriod = driftedTimePeriod(...argsToPass)

      assert(generatedPeriod >= lowerBound, `Generated time period ${generatedPeriod} not >= ${lowerBound}`)
      assert(generatedPeriod <= upperBound, `Generated time period ${generatedPeriod} not <= ${upperBound}`)
    }
  }

  describe('with defaults', function () {
    it('should generate time periods drifted 10% around 1 minute', function () {
      test10k([], 0.9, 1.1)
    })
  })

  describe('with specified minute value', function () {
    it('should generate time periods drifted 10% around that minute value', function () {
      test10k([5], 4.5, 5.5)
    })

    describe('and drift', function () {
      it('should generate time periods drifted by the specified drift', function () {
        test10k([5, 0.5], 2.5, 7.5)
      })
    })
  })
})
