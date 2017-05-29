var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
  gulp.src([
    'app.js',
    'components/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./build/'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch(['./**/*.js', '!./build/*.js'], ['js'])
})
