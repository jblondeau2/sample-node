import { it, describe } from 'mocha'
import { expect } from 'chai'

import { Service } from '../../src/core/service'

describe('Service', () => {
  describe('className', () => {
    it('expect to return the class name in lowercase', () => {
      class TestService extends Service {}
      expect(TestService.className).to.equal('testService')
    })
  })

  describe('dependencies', () => {
    it('expect to return the parameter list of constructor', () => {
      class TestService extends Service {
        constructor(dependencyOne, dependencyTwo, dependencyTest) { super() }
      }

      expect(TestService.dependencies).to.deep.equal([ 'dependencyOne', 'dependencyTwo', 'dependencyTest' ])
    })

    it('expect to return an empty list of constructor when optional value is given', () => {
      class TestService extends Service {
        constructor(dependencyOne = 0, dependencyTwo = [], dependencyTest = {}) { super() }
      }

      expect(TestService.dependencies).to.deep.equal([])
    })
  })
})
