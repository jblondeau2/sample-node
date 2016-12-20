import http from 'http'
import { Controller } from '../controller'

/**
 * Application class
 */
class Application {
  constructor(router, container) {
    /**
     * The router
     *
     * @type {Router}
     */
    this.router = router

    /**
     * The container for dependency injection
     *
     * @type {DependencyInjector}
     */
    this.container = container
  }

  /**
   * Register module app (included modules and services)
   *
   * @param {Object} classRef The module
   * @return {undefined}
   */
  register(classRef) {
    let ClassRef = classRef
    let moduleTmp = new ClassRef()

    if (moduleTmp instanceof Controller) {
      this._registerModule(ClassRef)
      return
    }

    this._registerService(ClassRef)
  }

  /**
   * Register a module
   *
   * @param {Object} classRef The class to register
   * @return {undefined}
   */
  _registerModule(classRef) {
    let ClassRef = classRef
    let deps = ClassRef.dependencies.map(item => this.container.resolve(item))
    let module = new ClassRef(...deps)

    for (let { methods = ['get'], path, action } of ClassRef.routes) {
      if (path == null || action == null) {
        continue
      }

      for (let method of methods) {
        this.router.register(path, module.action(action), method)
      }
    }
  }

  /**
   * Register a service
   *
   * @param {Object} classRef The class to register
   * @return {undefined}
   */
  _registerService(classRef) {
    let module = {
      classRef,
      dependencies: classRef.dependencies
    }

    this.container.register(classRef.className, module)
  }

  /**
   * Start the application
   *
   * @param {number} port The port listen by the application
   * @return {undefined}
   */
  start(port) {
    let server = http.createServer((req, res) => {
      let action = this.router.resolve(req.url, req.method)

      return action(req, res)
    })

    server.listen(port)
  }
}

export { Application }
