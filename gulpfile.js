var gulp = require('gulp')
var newer = require('gulp-newer')

var dist = 'dist/'

gulp.task('html', function () {
    var src = 'src/index.html'
    return gulp.src(src)
        .pipe(newer(dist))
        .pipe(gulp.dest(dist))
})

gulp.task('style', function () {
    var src = 'src/index.css'
    return gulp.src(src)
        .pipe(newer(dist))
        .pipe(gulp.dest(dist))
})

gulp.task('script', function () {
    var src = 'src/index.js'
    return gulp.src(src)
        .pipe(newer(dist))
        .pipe(gulp.dest(dist))
})

gulp.task('default', [ 'html', 'style', 'script' ])
