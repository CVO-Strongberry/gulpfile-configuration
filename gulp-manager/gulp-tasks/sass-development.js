module.exports = function ({gulp, plugins, path}) {
    gulp.src(path.sass)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({outputStyle: 'expanded'}))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
};
