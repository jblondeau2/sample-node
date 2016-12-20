/**
 * Route list.
 * Make mapping endpoint -> controller method
 *
 * @type {Object[]}
 */
let routes = [
  {
    method: ['get'],
    path: '/',
    action: 'index'
  },
  {
    method: ['get'],
    path: '/coucou',
    action: 'sayHelloAction'
  }
]

export { routes }
