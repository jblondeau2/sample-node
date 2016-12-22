import { BaseApplication } from './core/application/base-application'
import { DependencyInjector } from './core/dependency-injector'
import { BaseRouter } from './core/router/base-router'

import { LoggerService } from './services/logger.service'
import { DefaultController } from './modules/default/default.controller'

let router = new BaseRouter()
let di = new DependencyInjector()

let app = new BaseApplication(router, di)

app.register(LoggerService)
app.register(DefaultController)

app.start(3333)
