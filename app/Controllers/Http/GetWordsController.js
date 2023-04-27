class GetWordsController {
  index({ request, view }) {
    const words = request.input('words')

    const title = 'Con controlador'

    return view.render('words', { title, words: words.split(' ') })
  }
}

module.exports = GetWordsController
