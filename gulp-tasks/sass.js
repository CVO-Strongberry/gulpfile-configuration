module.exports = function (props) {
    return function () {
        props.gulp.src(props.path.sass)
        .pipe(props.plugins.plumber())
        .pipe(props.plugins.sourcemaps.init())
        .pipe(props.plugins.sass({outputStyle: 'expanded'}))
        .pipe(props.plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(props.path.css));
    };
};
