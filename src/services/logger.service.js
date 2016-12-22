class LoggerService {
  /**
   * Class name. Used as key in dependency injector
   *
   * @type {string}
   */
  static get className() {
    return 'loggerService'
  }

  /**
   * Dependency list
   *
   * @type {string[]}
   */
  static get dependencies() {
    return []
  }

  /**
   * Log caller
   *
   * @param {string} message - message to log
   * @return {undefined}
   */
  info(message) {
    let now = new Date()
    let msg = `${now.toLocaleString()} - ${message}`
    console.log(msg)
  }
}

export { LoggerService }
