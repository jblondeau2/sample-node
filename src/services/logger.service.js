import { Service } from '../core/service'

class LoggerService extends Service {
  /**
   * Log caller
   *
   * @param {string} message - message to log
   * @return {undefined}
   */
  info(message) {
    let now = new Date()
    let msg = `${now.toLocaleString()} - ${message}`
    console.log(msg)
  }
}

export { LoggerService }
