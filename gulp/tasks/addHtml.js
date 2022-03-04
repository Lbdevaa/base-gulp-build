const gulp = require('gulp');
const include = require('gulp-file-include');

module.exports = function addHtml() {
  return gulp.src('src/pages/*.html')
    .pipe(include())
    .pipe(gulp.dest('build'))
}
