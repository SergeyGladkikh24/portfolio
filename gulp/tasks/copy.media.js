'use strict';

module.exports = function() {
    $.gulp.task('copy:media', function() {
        return $.gulp.src('./source/media/**/*.*', { since: $.gulp.lastRun('copy:media') })
            .pipe($.gulp.dest($.config.root + '/media'));
    });
};