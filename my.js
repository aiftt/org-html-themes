window.onload = function () {
  $('.src').each(function () {
    var el = $(this).get(0)
    var lang =
      el.className.trim()
      .replace(/^src\s+src-/, '')

    if (lang === 'emacs-lisp') {
      lang = 'lisp'
    }
    // $(this).addClass('language-' + lang)

    var text = $(el).text()
    $(el).html(`<code class="language-${lang}"></code>`)
    $(el).find('code').text(text)
  })

  $(body).append(`<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-core.min.js" integrity="sha512-x0aNx8s5fNTSk7iaTiSuUtz6vbT7gtGjk+Dotp17u4TmUEbJUwNMUFKxMBlnMQ1+N8E5exPHvRcF1yoxJ8b/iA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`)
  // hljs.highlightAll()
}
