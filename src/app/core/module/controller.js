class Controller {
  constructor(container, responseHelper) {
    this.container = container
    this.responseHelper = responseHelper
  }

  action(name) {
    let actionName = name

    if (!name.includes('Action')) {
      actionName = `${name}Action`
    }

    return (req, res, next) => {
      let json = this[actionName](req)
      this.responseHelper.error(json)(req, res)
    }
  }
}

export { Controller }
