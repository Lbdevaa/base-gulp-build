const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')

module.exports = function addHtml() {
  return gulp.src('src/pages/*.html')
    .pipe(gulp.dest('build'))
}
