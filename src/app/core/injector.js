class Injector {
  constructor() {
    this.liveDeps = {}
    this.rawDeps = {}
    this.aliases = {}

    Injector.liveDeps['container'] = this
  }

  alias(name, depName) {
    this.aliases[name] = depName
  }

  register(name, dependency) {
    this.rawDeps[name] = dependency
  }

  resolve(name) {
    let depName = name

    if (this.aliases[name]) { // if alias exist
      depName = this.aliases[name]
    }

    if (Injector.liveDeps[depName]) { // if live exist return
      return Injector.liveDeps[depName]
    }

    if (!this.rawDeps[depName]) {
      throw new Error(`Unable to resolve ${name}`)
    }

    let { Obj, constructorDeps = [] } = this.rawDeps[depName]
    let args = []
    for (let dep of constructorDeps) {
      args.push(this.resolve(dep))
    }

    Injector.liveDeps[depName] = new Obj(...args)
    return Injector.liveDeps[depName]
  }
}

export { Injector }
