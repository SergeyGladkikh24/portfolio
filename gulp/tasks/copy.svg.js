'use strict';

module.exports = function() {
    $.gulp.task('copy:svg', function() {
        return $.gulp.src('./source/svg/**/*.svg', { since: $.gulp.lastRun('copy:fonts') })
            .pipe($.gulp.dest($.config.root + '/svg'));
    });
};