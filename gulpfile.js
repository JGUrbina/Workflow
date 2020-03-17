const {src, dest, watch, series} = require('gulp');
const browserSync =require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('imagemin');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

const dev = true;
let optionsSass;
let optionsPug;
if(dev) {
	optionsSass = {
		includePaths: ['node_modules'],
		sourceComments: true,
		outputStyle: 'expanded'
	}

	optionsPug = {
		pretty: true
	}
}else {
	optionsSass = {
		includePaths: ['node_modules'],
		outputStyle: 'compressed'
	}

	optionsPug = {
		pretty: false
	}
}

function server() {
	browserSync.init({
		server: "./dist"
	});

	watch('dev/scss/**/*.scss', series(css));
	watch('dev/pug/**/*.pug', series(html));
	watch('dev/js/**/*.js', series(js));
	watch("dist/*.html").on('change', browserSync.reload);
	watch("dist/js/*.js").on('change', browserSync.reload);
}
function html() {
	return src('dev/pug/**/*.pug')
	.pipe(plumber())
	.pipe(pug(optionsPug))
	.pipe(dest('dist/'))
}

function css() {
	return src('dev/scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass(optionsSass))
	.pipe(autoprefixer({
		browsers: "last 3 version"
	}))
	.pipe(dest('dist/css/'))
	.pipe(browserSync.stream())
}

function js() {
	src('dev/js/**/*.js')
	.pipe(uglify())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(dest('dist/js'))
}

function imgMin() {
	return src('dev/img/**/*')
	.pipe(imagemin([
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5})
		]))
	.pipe(dest('dist/img/'))
}


exports.css = css;
exports.html = html;
exports.server = server;
exports.imgMin = imgMin;
exports.js = js;