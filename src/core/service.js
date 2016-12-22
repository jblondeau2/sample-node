class Service {
  /**
   * Class name. Used as key in dependency injector
   *
   * @type {string}
   */
  static get className() {
    let chars = this.name.split('')
    chars[0] = chars[0].toLowerCase()

    return chars.join('')
  }

  /**
   * Dependency list
   *
   * @type {string[]}
   */
  static get dependencies() {
    const COMMENTS_AND_PARAMS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/mg
    const ARGUMENTS_NAMES = /([^\s,]+)/g

    let functionDef = this.toString()
    let firstParens = functionDef.indexOf('(') + 1
    let lastParens = functionDef.indexOf(')')

    functionDef = functionDef.replace(COMMENTS_AND_PARAMS, '')
    let params = functionDef.slice(firstParens, lastParens).match(ARGUMENTS_NAMES) || []

    return params
  }
}

export { Service }
