import { Router } from './router.js'
import url from 'url'

/**
 * Router class
 */
class BaseRouter extends Router {
  /**
   * @constructor
   */
  constructor() {
    super()

    /**
     * Route list classed by HTTP verb.
     *
     * @type {Object}
     */
    this.routes = {}
  }

  /**
   * Register a route
   * @override
   *
   * @param {string} path - The path to match
   * @param {Controller~actionCallback} action - The controller action
   * @param {string} [method=get] - The HTTP method
   *
   * @return {undefined}
   */
  register(path, action, method = 'get') {
    let verb = method.toLowerCase()
    if (!(verb in this.routes)) {
      this.routes[verb] = []
    }

    this.routes[verb].push({ path, action })
  }

  /**
   * Resolve a path and return this matching action
   * @override
   *
   * @param {string} path - The wanted path
   * @param {string} method - The wanted HTTP method
   *
   * @returns {Controller~actionCallback} The matching action
   */
  resolve(path, method) {
    let verb = method.toLowerCase()
    if (!(verb in this.routes)) {
      return this._generateError()
    }

    let { pathname } = url.parse(path)
    if (pathname.length > 1) {
      pathname = pathname.replace(/\/$/, '') // remove last slash
    }
    let {
      action = this._generateError({
        statusCode: 404,
        message: `Unable to find resources for path ${pathname}`
      })
    } = this.routes[verb].find(item => item.path === pathname) || {}

    return action
  }

  /**
   * Return an error action build with specified status code and message
   *
   * @param {Object} options - The optionnal parameters
   * @param {number} [options.statusCode=520] - The status code wanted
   * @param {string} [options.message] - The message wanted
   *
   * @return {Controller~actionCallback} The error action
   */
  _generateError({ statusCode = 520, message = 'Unknown error' } = {}) {
    return (req, res) => {
      res.writeHead(statusCode, {'Content-Type': 'text/plain'})
      res.end(message)
    }
  }
}

export { BaseRouter }
