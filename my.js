window.onload = function () {
  $('.src').each(function () {
    const el = $(this).get(0)
    var lang =
      el.className.trim()
      .replace(/^src\s+src-/, '')
    $(this).addClass('language-' + lang)

    var text = $(el).text()
    $(el).html('<code>' + text + '</code>')
  })
  hljs.highlightAll()
}
