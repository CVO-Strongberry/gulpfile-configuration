const props = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins'),
    path: require('./system/path')
};

const getTask = require('./system/system');

props.gulp.task('sass:development', getTask('sass'));
props.gulp.task('less:development', getTask('less:development'));
props.gulp.task('stylus:development', getTask('stylus:development'));
