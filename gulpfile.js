const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const deployGH = require('gulp-gh-pages');

/* Transform sass files into CSS */
function css() {
  return src('./src/css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('./dist/css'))
}

/* Start a server on port 8080 */
function server() {
  connect.server({
    root: 'dist',
    livereload: true
  });
}

/* Compile HTML */
function html() {
  return src('./src/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('./dist'));
}

/* Push build to gh-pages */
function deploy() {
  css();
  html();

  return src("./dist/**/*")
    .pipe(deployGH())
}

exports.css = css;
exports.server = server;
exports.html = html;
exports.deploy = deploy;

exports.default = function() {
  css();
  html();
  server();

  watch('./src/css/**/*.scss', css);
  watch('./src/**/*.html', html);
}
