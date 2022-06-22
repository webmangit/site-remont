import gulp from 'gulp' // Импорт основного модуля, импорт gulp из пакета gulp
import { path } from './gulp/config/path.js' // Импорт путей, импорт константы path 
import { plugins } from './gulp/config/plugins.js' // Импорт общих плагинов, импорт константы plugins

// Передаем значения в глобальную переменную app, чтобы могли использовать в разных файлах одни и теже сущности
global.app = { // глобальная переменная app
  gulp: gulp, // app.gulp
  path: path, // app.path
  plugins: plugins, // app.plugins
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
}

// Импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js'
import { svgSprive } from './gulp/tasks/svgSprive.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy) // путь к файлу слежения и действие для выполнения
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

// оследовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle)
// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, svgSprive, images))

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }
export { svgSprive }

// Выполнение сценария по умолчанию
gulp.task('default', dev) // когда запускаем команду gulp у нас будет выполняться данный сценарий