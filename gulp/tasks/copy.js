export const copy = () => {
    return app.gulp.src(app.path.src.files) //перенесли файлы
        .pipe(app.gulp.dest(app.path.build.files)) //получили файлы
}