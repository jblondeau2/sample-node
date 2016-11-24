import { static as serveStatic } from 'express'

class Application {
  constructor(framework, container, router) {
    this.framework = framework
    this.container = container
    this.router = router
  }

  configure(config) {
    for (let setting in config) {
      if (config.hasOwnProperty(setting)) {
        this.framework.set(setting, config[setting])
      }
    }
  }

  static({ uri, dir }) {
    this.framework.use(uri, serveStatic(dir))
  }

  module({ controller: ControllerClass, routes }) {
    let helper = this.container.resolve('responseHelper')
    let controller = null

    if (ControllerClass) {
      controller = new ControllerClass(this.container, helper)
    }

    for (let route of routes) {
      if ('error' in route) { // if is an error responses
        this.router.error(route.uri, route.methods, route.error)
        continue
      }

      if (!controller) { // if controller is not given, no endpoint created
        console.log(`Warn: unable to loads route. Controller does not exist.`)
        continue
      }

      this.router.endpoint(route.uri, route.methods, controller.action(route.action))
    }
  }

  start(port) {
    this.framework.use(this.router.toMiddleware())
    this.framework.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  }
}

export { Application }
