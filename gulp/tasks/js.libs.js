'use strict';

module.exports = function() {
  $.gulp.task('js:libs', async function() {
    return $.gulp.src($.path.jsLibs)
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};