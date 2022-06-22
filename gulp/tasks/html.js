import fileinclude from "gulp-file-include"
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export const html = () => {
  return app.gulp.src(app.path.src.html) // получили доступ к нужным файлам с помощью метода src()
    .pipe(app.plugins.plumber( // обработка ошибока
      app.plugins.notify.onError({ // выводит сообщения при возникновении ошибки
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(fileinclude()) // Склеивает части html-файлов в один 
    .pipe(app.plugins.replace(/@img\//g, 'img/')) // ищет @img и заменяет на img/
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg())) // подлкючает копию картинок но в формате webp
    .pipe(app.plugins.if(app.isBuild, versionNumber({ // позволяет избегать неприятных ситуаций с кешированием
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ],
      },
      'output': {
        'file': 'gulp/version.json'
      },
    })))
    .pipe(app.gulp.dest(app.path.build.html)) // перенесли файлы в нужную папку, с помощью метода dest()
    .pipe(app.plugins.browserSync.stream()) // обновляем браузер
}