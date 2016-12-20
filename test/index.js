import { Coucou } from '../src/index'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('Test', () => {
  it('coucou', () => {
    let c = new Coucou()
    expect(c.a).to.be.equal(1)
  })
})
