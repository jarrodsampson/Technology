var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    clean = require('gulp-clean');

gulp.task('cleanIt', function () {
    return gulp.src('src/css/compiled/*.css', {read: false})
        .pipe(clean());
});

gulp.task('less', ['cleanIt'], function () {
    return gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css/compiled'))
});


gulp.task('bundleCSS', ['less'], function () {
    gulp.src('src/css/compiled/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css/compiled'));

    return gutil.log('Bundled..')
});


gulp.task('default', ['watch','bundleCSS']);

gulp.task('watch', function() {

    gulp.watch('src/css/*.less', ['bundleCSS']);

});