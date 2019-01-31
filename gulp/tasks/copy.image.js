'use strict';

module.exports = function() {
  $.gulp.task('copy:image', async function() {
    return $.gulp.src('./source/img/*.+(jpg|png|gif|svg)', { since: $.gulp.lastRun('copy:image') })
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/img'));
  });
};