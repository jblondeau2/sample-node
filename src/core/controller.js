/**
 * Controller class. Abstract
 */
class Controller {

  /**
   * An action endpoint
   *
   * @typedef {function} Controller~actionCallback
   *
   * @param {Object} req Object representing the request
   * @param {Object} res Object representing the response
   *
   * @return {undefined}
   */

  /**
   * Return corresponding action
   *
   * @param {string} name The action name
   *
   * @throws {TypeError} if action does not exist
   * @return {Controller~actionCallback} The action
   */
  action(name) {
    const actionMask = /^\w+Action$/
    let actionName = String(name)

    if (!actionMask.test(actionName)) {
      actionName = `${actionName}Action`
    }

    let method = this[actionName]
    if (method == null) {
      throw new TypeError(`Method ${actionName} does not exist in ${this.constructor.name}.`)
    }

    return method.bind(this)
  }
}

export { Controller }
