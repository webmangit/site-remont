export const copy = () => {
  return app.gulp.src(app.path.src.files) // получили доступ к нужным файлам с помощью метода src()
    .pipe(app.gulp.dest(app.path.build.files)) //  перенесли файлы в нужную папку, с помощью метода dest()
}