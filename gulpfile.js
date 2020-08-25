const gulp = require('gulp');
// Подключение gulp
const concat = require('gulp-concat');
// Объединение файлов
const prefix = require('gulp-autoprefixer');
// Автопрефиксы -webkit- и тд.
const cleanCSS = require('gulp-clean-css');
// Сжатие файла css
const uglify = require('gulp-uglify');
// Сжатие js файла
const del = require('del');
// Очистка старых файлов при загрузки новых
const browserSync = require('browser-sync').create();
// Локальный хостинг
const sass= require('gulp-sass');
// Конвертация sass файла
const rename = require('gulp-rename');
// Обозначение дополнительного минифицированного файла
const sourcemaps = require('gulp-sourcemaps');
// Просмотр сжатого файла

const cssFiles = [
  './scss/main.scss',
  './scss/media.scss'
]
// Подключение файлов css, с которыми мы работаем

const jsFiles = [
  // 'js/lib.js',
  // 'js/main.js'
]

// Подключение файлов js, с которыми мы работаем

function watch(){
  gulp.watch('./scss/**/*',styles)
  gulp.watch('./js/**/*.js',scripts)
  gulp.watch('./*html').on('change',browserSync.reload);
  gulp.watch('./*php').on('change',browserSync.reload);
}
// Отслеживание изменения файлов

function Sync(){
  return browserSync.init({
    server:{
      baseDir:"./"
    },
    port: 3000
  })

}
// Локальный сервер


function styles(){
  return gulp.src(cssFiles)
  .pipe(sourcemaps.init())
  .pipe(sass({
    errorLogToConsole:true,
    outputStyle: 'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(concat('style.css'))
  .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
   }))
   .pipe(cleanCSS({
     level: 2
   }))
   .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}
// Работа со стилями



function scripts(){
  return gulp.src(jsFiles)
  .pipe(concat('script.js'))
  .pipe(uglify({
    toplevel: true
  }))
  .pipe(gulp.dest('./script'))
  .pipe(browserSync.stream());
}
// Работа со скриптами



function cleanCss(){
  return del(['css/*'])
}

function cleanJs(){
  return del(['script/*'])
}
// Очитска определенной папки


gulp.task('styles',styles);
gulp.task('scripts',scripts);
gulp.task('delCss',cleanCss);
gulp.task('delJs',cleanJs);
gulp.task('work',gulp.parallel(Sync, watch));
// Выполнение функций
