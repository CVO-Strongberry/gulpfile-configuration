module.exports = function ({gulp, plugins, path}) {
    gulp.src(path.less)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
};