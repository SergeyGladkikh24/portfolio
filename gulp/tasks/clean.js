'use strict';

module.exports = function() {
  $.gulp.task('clean', async function(cb) {
    return $.del($.config.root, cb);
  });
};