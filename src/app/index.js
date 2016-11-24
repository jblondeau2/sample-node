import * as Express from 'express'

import { Application } from './core/application'
import { config, staticFiles } from './config/config'
import { injector } from './config/dependencies'

import { defaultModule as index } from './modules/default/default.module'

let router = injector.resolve('router')
let express = Express()

let app = Application(express, injector, router)

// configuration
app.configure(config)
app.static(staticFiles)

// load modules
app.module(index)

app.start(3000)
