'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsLibs: require('./gulp/paths/js.libs.js'),
    cssLibs: require('./gulp/paths/css.libs.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  babel: require('gulp-babel'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sprite-gif',
        'sprite-png'
    ),
    $.gulp.parallel(
        'sass',
        'pug',
        'js:libs',
        'js:process',
        'copy:image',
        'copy:fonts',
        'css:libs',
        'sprite:svg'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    ),
));