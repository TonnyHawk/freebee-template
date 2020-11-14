let {src , dest, series, parallel, watch} = require('gulp'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    minifiCss = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    groupCssMedia = require('gulp-group-css-media-queries');

let sourceFold = './src';

function browserSync(){
   browsersync.init({
      server: {
          baseDir: sourceFold,
          notify: false
      }
  });
}

function css(){
   return src(sourceFold + '/sass/main.scss')
      .pipe(sourcemaps.init()) // инициализируем создание Source Maps
      .pipe(sass())
      .pipe(autoprefixer(['last 5 versions'])) // добавляем вендорные префиксы
      .pipe(groupCssMedia())
      .pipe(minifiCss())
      .pipe(rename({ suffix: '.min', prefix : '' })) // переименовываем файл в .min.css
      .pipe(sourcemaps.write()) // пути для записи SourceMaps - в данном случае карта SourceMaps будет добавлена прям в данный файл main.min.css в самом конце
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