import { Injector } from '../core/injector'

import { ExpressRouter } from '../core/router/express-router'
import { ResponseHelper } from '../helpers/response-helper'

let injector = new Injector()

injector.register('router', {
  object: ExpressRouter,
  constructorDeps: [
    'responseHelper'
  ]
})

injector.register('response-helper', {
  object: ResponseHelper
})

export { injector }
