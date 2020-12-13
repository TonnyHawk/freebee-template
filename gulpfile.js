let {src , dest, series, parallel, watch} = require('gulp'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    minifiCss = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    groupCssMedia = require('gulp-group-css-media-queries'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html');

let sourceFold = './src';
let distFold = './dist';

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

function distCss(){
   return src(sourceFold + '/sass/vendors.scss') // work on vendors
         .pipe(sass())
         .pipe(minifiCss())
         .pipe(rename('vendors.min.css'))
         .pipe(dest(distFold + '/css/'))
         .pipe(src(sourceFold + '/css/*.min.css')) // minify own css
         .pipe(minifiCss())
         .pipe(rename('all.min.css'))
         .pipe(dest(distFold + '/css/'))
}

function html(){
   return src(sourceFold + '/html/index.html')
      .pipe(fileinclude())
      .pipe(dest(sourceFold + '/'))
}

function images(){
   return src(sourceFold + '/img/**/*')
         .pipe(webp({
            quality: 70
         }))
         .pipe(dest(sourceFold + '/img/'))
         .pipe(src(sourceFold + '/img/**/*'))
         .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
         }))
         .pipe(dest(distFold + '/img/'))
}

function watchFiles(){
   watch(sourceFold + '/sass/**/*.scss', css);
   watch(sourceFold + '/html/*.html').on('change', series(html, browsersync.reload));
}

function distServer(){
   browsersync.init({
      server: {
          baseDir: distFold,
          notify: false
      }
  });
}

let build = series(css, html);
let serve = parallel(build, watchFiles, browserSync);
let dist = series(distCss, images);
let serveDist = series(distServer);

exports.default = serve;
exports.serve = serve;
exports.build = build;
exports.dist = dist;
exports.serveDist = serveDist;