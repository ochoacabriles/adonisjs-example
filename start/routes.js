'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/sin-controlador', ({ request, view }) => {
  const words = request.input('words')

  const title = 'Sin controlador'

  return view.render('words', { title, words: words.split(' ') })
})

Route.get('/con-controlador', 'GetWordsController.index')