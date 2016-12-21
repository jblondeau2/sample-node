/**
 * Application class
 * @interface
 */
class Application {
  /**
   * Register module app (included modules and services)
   * @abstract
   *
   * @param {Object} classRef The module
   * @return {undefined}
   */
  register(classRef) {
    throw new TypeError('Method {register} of {Application} class was not override')
  }

  /**
   * Start the application
   * @abstract
   *
   * @param {number} port The port listen by the application
   * @return {undefined}
   */
  start(port) {
    throw new TypeError('Method {start} of {Application} class was not override')
  }
}

export { Application }
