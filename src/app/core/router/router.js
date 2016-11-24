class Router {
  error(uri, methods, statusCode) {
    throw new Error('Method "error" not implemented')
  }

  endpoint(uri, methods, callback) {
    throw new Error('Method "endpoint" not implemented')
  }
  delegate(uri, router) {
    throw new Error('Method "delegate" not implemented')
  }

  toMiddleware() {
    throw new Error('Method "toMiddleware" not implemented')
  }
}

export { Router }
