const gulp = require('gulp')

const imageMinify = require('./imageMinify')
// const svgSprite = require('./svgSprite')
const svgSpriteMono = require('./svgSpriteMono')
const svgSpriteMulti = require('./svgSpriteMulti')
const styles = require('./styles')
const pug2html = require('./pug2html')
const addHtml = require('./addHtml')
const script = require('./script')
const libs = require('./libs')
const webp = require('./webp')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('src/img/*.{gif,png,jpeg,jpg,svg,webp,ico}', gulp.series(imageMinify, readyReload))
  gulp.watch('build/img/**/*.+(png|jpg|jpeg)', gulp.series(webp, readyReload));
  // gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
  gulp.watch('src/img/sprite/mono/*.svg', gulp.series(svgSpriteMono, readyReload))
  gulp.watch('src/img/sprite/multi/*.svg', gulp.series(svgSpriteMulti, readyReload))
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/styles/**/*.sass', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/styles/**/*.css', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
  gulp.watch('src/libs/**/*', gulp.series(libs, readyReload))
  gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))
  gulp.watch('src/pages/**/*.html', gulp.series(addHtml, readyReload))

  gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

  return cb()
}
