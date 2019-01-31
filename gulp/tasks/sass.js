'use strict';

module.exports = function () {
    $.gulp.task('sass', async function () {
        return $.gulp.src('./source/scss/style.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass()).on('error', $.gp.notify.onError({title: 'Style'}))
            .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig}))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/css'))
            .pipe($.browserSync.stream());
    })
};