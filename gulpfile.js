let {src , dest, series, parallel, watch} = require('gulp'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include');

let sourceFold = './src';

function browserSync(){
   browsersync.init({
      server: {
          baseDir: sourceFold
      }
  });
}

function css(){
   return src(sourceFold + '/sass/main.scss')
      .pipe(sass())
      .pipe(dest(sourceFold + '/css/'))
      .pipe(browsersync.stream())
}

function html(){
   return src(sourceFold + '/html/index.html')
      .pipe(fileinclude())
      .pipe(dest(sourceFold + '/'))
}

function watchFiles(){
   watch(sourceFold + '/sass/**/*.scss', css);
   watch(sourceFold + '/html/*.html').on('change', series(html, browsersync.reload));
}

let build = series(css, html);
let serve = parallel(build, watchFiles, browserSync);

exports.default = serve;
exports.serve = serve;
exports.build = build;