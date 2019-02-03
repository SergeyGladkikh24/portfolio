'use strict';

module.exports = function() {
  $.gulp.task('css:libs', function() {
    return $.gulp.src($.path.cssLibs)
      .pipe($.gp.concatCss('libs.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/css'))
  })
};