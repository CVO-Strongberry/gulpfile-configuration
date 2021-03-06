module.exports = function ({gulp, plugins, path}) {
    gulp.src(path.stylus)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.stylus())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
};