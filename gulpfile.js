const System = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    path: require('./gulp-manager/path')
};
System.gulp.task(process.argv[2], require('./gulp-manager/gulp-tasks/' + process.argv[2])(System));
