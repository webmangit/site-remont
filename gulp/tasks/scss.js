import dartSass from 'sass' // препроцессор sass
import gulpSass from 'gulp-sass' // плагин для запуска препроцессора sass
import rename from 'gulp-rename' // меняет scss на min.css

import cleanCss from 'gulp-clean-css' // Сжатие CSS файла
import webpcss from 'gulp-webpcss' // Вывод WEBP изображений
import autoPrefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber( // обработка ошибока
      app.plugins.notify.onError({ // выводит сообщения при возникновении ошибки
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })))
    .pipe(app.plugins.replace(/@img\//g, '../img/')) // ищет @img и заменяет на img/
    .pipe(sass({ outputStyle: 'expanded' })) // Вызываем наш компилятор и задаем изначальный стиль файла
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries())) // группирует медиа запросы
    .pipe(app.plugins.if(app.isBuild, webpcss(
      {
        webpClass: '.webp', // добавляется класс если браузер поддерживает webp
        noWebpClass: '.no-webp' // добавляется класс если браузер не поддерживает webp
      }
    )))
    .pipe(app.plugins.if(app.isBuild, autoPrefixer({ // добавляет вендорные префиксы
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    })))
    // Раскомментировать если нужен не сжатый дубль файла стилей
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(app.isBuild, cleanCss())) // сжимает CSS файл
    .pipe(rename({ extname: '.min.css' })) // меняет scss на min.css
    .pipe(app.gulp.dest(app.path.build.css)) // перенесли файлы в нужную папку, с помощью метода dest()
    .pipe(app.plugins.browserSync.stream()) // обновляем браузер
}

