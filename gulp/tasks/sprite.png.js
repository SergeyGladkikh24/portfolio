'use strict';

module.exports = function() {
    $.gulp.task('sprite-png', function() {
        return $.gulp.src('./source/img/sprite/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite-png.css'
            }))
            .pipe($.gulp.dest($.config.root + '/img'));
    });
};