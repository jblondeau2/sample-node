/**
 * Router class. Abstract.
 * @interface
 */
class Router {
  /**
   * Register a route.
   * @abstract
   *
   * @param {string} path The path to match
   * @param {Controller~actionCallback} action The controller action
   * @param {string} method The HTTP method
   *
   * @return {undefined}
   */
  register(path, action, method = 'get') {
    throw new TypeError('Method {register} of {Router} class was not override')
  }

  /**
   * Resolve a path and return this matching action.
   * @abstract
   *
   * @param {string} path The wanted path
   * @param {string} method The wanted HTTP method
   *
   * @returns {Controller~actionCallback} The matching action
   */
  resolve(path, method) {
    throw new TypeError('Method {resolve} of {Router} class was not override')
  }
}

export { Router }
