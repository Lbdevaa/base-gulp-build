const gulp = require('gulp')
// const svgstore = require('gulp-svgstore')
// const rename = require('gulp-rename')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const sprite = require('gulp-svg-sprite')

module.exports = function svgSprite() {
  return gulp.src('src/sprite/*.svg')
    // .pipe(svgstore({
    //   inlineSvg: true
    // }))
    .pipe(cheerio({
      run: function ($) {
        // $('[fill]').removeAttr('fill');
        // $('[stroke').removeAttr('stroke');
        $('[fill="#000"]').removeAttr('fill');
        $('[fill="#000000"]').removeAttr('fill');
        $('[stroke="#000"]').removeAttr('stroke');
        $('[stroke="#000000"]').removeAttr('stroke');
        // $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    // cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    // .pipe(rename('sprite.svg'))
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('build/sprite'))
}

