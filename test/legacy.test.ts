import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as legacy from '../lib/legacy'

describe('legacy', function() {

  describe('foo', function() {

    it('foos the input', function() {
      const out = legacy.foo('abc123')
      expect(out).to.equal('321cba')
    })

    it('handles reverse option', function() {
      const out = legacy.foo('abc123', { reverse: true })
      expect(out).to.equal('321cba oof')
    })
  })
})