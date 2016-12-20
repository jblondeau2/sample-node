class ConsoleService {
  /**
   * Class name. Used as key in dependency injector
   *
   * @type {string}
   */
  static get className() {
    return 'consoleService'
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
   * @return {undefined}
   */
  log() {
    console.log('param.name')
  }
}

export { ConsoleService }
