/**
 * Dependency injector class
 */
class DependencyInjector {
  constructor() {
    /**
     * The registry of dependency
     *
     * @type {Object[]}
     */
    this.registry = []

    /**
     * Map of aliases
     *
     * @type {Object<string, string>}
     */
    this.aliases = {}
  }

  /**
   * Register new dependency
   *
   * @param {string} name - the dependency name
   * @param {Object} module - the informations to register
   * @param {Object} module.classRef - the class of the dependency
   * @param {string[]} module.dependencies - the liste of dependencies
   *
   * @return {undefined}
   */
  register(name, { classRef, dependencies = [] }) {
    if (!classRef) {
      return
    }

    this.registry[name] = { classRef, dependencies }
  }

  /**
   * Resolve a dependency from her name or alias
   *
   * Check aliases, dependency already instenciate before building new one.
   *
   * @param {string} name - the name of the dependency to Resolve
   * @return {Object} - an instance of asked dependency
   */
  resolve(name) {
    let depName = name

    // get real name from aliases
    if (depName in this.aliases) {
      depName = this.aliases[depName]
    }

    // check if dependency has already been intenciate
    let liveObject = DependencyInjector.liveObjects.find(item => item.name === name)
    if (liveObject) {
      return liveObject.object
    }

    // create new instance
    return this._buildObject(depName)
  }

  /**
   * Build an instance of the dependency from her name
   *
   * @param {string} name - the of the dependency
   * @return {Object} - the builed object
   */
  _buildObject(name) {
    if (!(name in this.registry)) {
      throw new TypeError(`Unable to build an instance of {${name}}`)
    }

    let { classRef: Controller, dependencies } = this.registry[name]
    let deps = dependencies.map(item => this.container.resolve(item => item.name === name))
    let object = new Controller(...deps)

    DependencyInjector.liveObjects[name] = object
    return object
  }
}

DependencyInjector.liveObjects = []

export { DependencyInjector }
