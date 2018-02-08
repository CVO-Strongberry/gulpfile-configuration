const gulp = require('gulp'),
      gulp_plumber = require('gulp-plumber'),
      gulp_sourcemaps = require('gulp-sourcemaps'),
      gulp_sass = require('gulp-sass');

const path = {
    sass: './src/sass/**/*.scss',
    css: './dist/css'
}

gulp.task('sass:development', () => {
    gulp.src(path.sass)
        .pipe(gulp_plumber())
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_sass({outputStyle: 'expanded'}))
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
});
