const {
  src
} = require('gulp');
const ftp = require('vinyl-ftp');
const ftpSettings = require('../tasks/ftp_settings');
const chalk = require('chalk');
const connect = ftp.create(ftpSettings);

module.exports = function deploy() {
  return src(['build/**/*.*', '!build/**/*.map'])
    .pipe(connect.newer('/test'))
    .pipe(connect.dest('/test'))
    // .on('success', () => console.log(`Finished deploing ./build to https://${chalk.blueBright(ftpSettings.host)} OLD FILES NO CLEARED`))
    .on('success', () => console.log(`Finished deploing ./build to server OLD FILES NO CLEARED`))
}