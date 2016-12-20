import { Controller } from '../../core/controller'
import { routes } from './default.routes'

/**
 * Controller for Default module
 */
class DefaultController extends Controller {
  /**
   * Dependency list of this controller
   *
   * @type {string[]}
   */
  static get dependencies() {
    return ['consoleService']
  }

  /**
   * Routes configuration
   *
   * @type {Object[]}
   */
  static get routes() {
    return routes
  }

  constructor(consoleService) {
    super()

    /**
     * Logger service
     *
     * @type {ConsoleService}
     */
    this.consoleService = consoleService
  }

  /**
   * index action
   *
   * @param {Object} req - the request
   * @param {Object} res - the response
   * @return {undefined}
   */
  indexAction(req, res) {
    this.consoleService.log('param.name')

    res.end('{}')
  }

  /**
   * "say hello" action
   *
   * @param {Object} req - the request
   * @param {Object} res - the response
   * @return {undefined}
   */
  sayHelloAction(req, res) {
    res.end('coucou !')
  }
}

export { DefaultController }
