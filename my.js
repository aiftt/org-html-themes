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
    $(el).attr('data-download-link').attr('data-download-link-label', '下载').html(`<code class="language-${lang}"></code>`)
    $(el).find('code').text(text)
  })

  $(document.body).append(`<script src="https://unpkg.com/prismjs@1.29.0/prism.js"></script>`)
  $(document.body).append(`<script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>`)
  // hljs.highlightAll()
}
