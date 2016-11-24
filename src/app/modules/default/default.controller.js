import { Controller } from '../../core/module/controller'

class DefaultController extends Controller {
  indexAction(request) {
    return {
      data: {
        message: 'Hello World !'
      }
    }
  }
}

export { DefaultController }
