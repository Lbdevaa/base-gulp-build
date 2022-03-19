const gulp = require('gulp')
const sprite = require('gulp-svg-sprite')

module.exports = function svgSpriteMulti() {
  return gulp.src('src/sprite/multi/*.svg')
    .pipe(sprite({
      mode: {
        // symbol: {
        stack: {
          sprite: '../multi.svg',
          inline: true,
          example: true, // для градиентных пример на img
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name']
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest('build/sprite'))
}

