import { Application } from './core/application/application'
import { DependencyInjector } from './core/dependency-injector'
import { BaseRouter } from './core/router/base-router'

import { ConsoleService } from './services/console.service'
import { DefaultController } from './modules/default/default.controller'

let router = new BaseRouter()
let di = new DependencyInjector()

let app = new Application(router, di)

app.register(ConsoleService)
app.register(DefaultController)

app.start(3333)
