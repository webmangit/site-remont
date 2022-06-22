export const server = (done) => {
  app.plugins.browserSync.init({ // запуск browserSync
    server: {
      baseDir: `${app.path.build.html}` // базовая папка откуда нам нужно запустить файлы
    },
    notify: false, // убираем сообщения в браузере, чтобы они нам не мешали
    port: 3000,
  })
}