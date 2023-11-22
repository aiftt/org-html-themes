document.title = '若叶知秋'

window.onload = function () {
  $('.src').each(function () {
    var el = $(this).get(0)
    var lang =
      el.className.trim()
      .replace(/^src\s+src-/, '')

    if (lang === 'emacs-lisp') {
      lang = 'lisp'
    } else if (lang === 'html') {
      lang = 'markup'
    }
    // $(this).addClass('language-' + lang)

    var text = $(el).text()
    $(el).html(`<code class="language-${lang}"></code>`)
    $(el).find('code').text(text)
  })

  $(document.body).append(`<script src="https://cdn.bootcdn.net/ajax/libs/prism/9000.0.1/prism.min.js"></script>`)
  $(document.body).append(`<script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>`)
  // hljs.highlightAll()
}
