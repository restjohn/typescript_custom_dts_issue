import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as legacy from '../lib/legacy'

describe('legacy', function() {

  describe('foo', function() {

    it('foos the input', function() {
      const out = legacy.foo('abc123')
      expect(out).to.equal('foo abc123')
    })

    it('handles reverse option', function() {
      const options: legacy.FooOptions = { reverse: true }
      const out = legacy.foo('abc123', options)
      expect(out).to.equal('321cba oof')
    })
  })

  describe('foobar', function() {

    it('foobars the input', function() {
      const out = legacy.foobar('abc123')
      expect(out).to.equal('foo bar abc123')
    })
  })
})