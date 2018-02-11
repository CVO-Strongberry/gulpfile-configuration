module.exports = function (task, props) {
    return require('./gulp-tasks/' + task)(props);
};