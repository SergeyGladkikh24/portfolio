'use strict';

module.exports = function() {
    $.gulp.task('sprite-gif', async function() {
        return $.gulp.src('./source/img/sprite/*.gif')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.gif',
                cssName: 'sprite-gif.css'
            }))
            .pipe($.gulp.dest($.config.root + '/img'));
    });
};