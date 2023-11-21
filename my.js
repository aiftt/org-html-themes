window.onload = function () {
  $('.src').each(function () {
    var el = $(this).get(0)
    var lang =
      el.className.trim()
      .replace(/^src\s+src-/, '')

    if (lang === 'emacs-lisp') {
      lang = 'lisp'
    }
    $(this).addClass('language-' + lang)

    var text = $(el).text()
    $(el).html(`<code></code>`)
    $(el).find('code').text(text)
  })
  // hljs.highlightAll()
}
