const { src, dest, watch, parallel } = require("gulp");
const gulp = require('gulp');
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

// function generateCSS(cb) {
//     src('./style.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('./'));
//     cb();
// }
// exports.css = generateCSS;

// compile scss into css
function style() {
    return src('./style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./'))
    .pipe(browserSync.stream());
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    watch('./style.scss', style);
    watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watchFiles = watchFiles;