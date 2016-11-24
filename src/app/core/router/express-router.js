import { Router } from 'express'
import { Router as IRouter } from './router'

class ExpressRouter extends IRouter {
  constructor(errorHelper) {
    super()

    this.router = Router()
    this.responseHelper = errorHelper
  }

  error(uri, methods, statusCode) {
    this.endpoint(uri, methods, this.responseHelper.error({ status: statusCode }))
  }

  endpoint(uri, methods, callback) {
    for (let method of methods) {
      this.router[method.toLocaleLowerCase()](uri, callback)
    }
  }

  delegate(uri, router) {
    this.router.use(uri, router.toMiddleware())
  }

  toMiddleware() {
    return this.router
  }
}

export { ExpressRouter }
