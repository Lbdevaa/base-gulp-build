const gulp = require('gulp')
const sprite = require('gulp-svg-sprite')

module.exports = function svgSpriteMono() {
  return gulp.src('src/sprite/mono/*.svg')
    .pipe(sprite({
      mode: {
        symbol: {
          sprite: '../mono.svg',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill', 'stroke.*']
                  },
                },
              ],
            },
          },
        ],
      }
    }))
    .pipe(gulp.dest('build/sprite'))
}

