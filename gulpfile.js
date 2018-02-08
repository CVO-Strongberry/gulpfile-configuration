const gulp = require('gulp'),
      gulp_plumber = require('gulp-plumber'),
      gulp_sourcemaps = require('gulp-sourcemaps'),
      gulp_sass = require('gulp-sass'),
      gulp_stylus = require('gulp-stylus'),
      gulp_less = require('gulp-less');

const path = {
    sass: './src/sass/**/*.scss',
    stylus: './src/stylus/**/*.styl',
    less: './src/less/**/*.less',
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

gulp.task('stylus:development', () => {
    gulp.src(path.stylus)
        .pipe(gulp_plumber())
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_stylus())
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
});

gulp.task('less:development', () => {
    gulp.src(path.less)
        .pipe(gulp_plumber())
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_less())
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
});
