var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssBeautify = require('gulp-cssbeautify'),
	browserSync = require('browser-sync')
	reload = browserSync.reload;


gulp.task('html', function(){
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('app'))
		.pipe(reload({ stream: true }));
});

gulp.task('scss', function () {
	return gulp.src('src/scss/main.scss')
		.pipe(sass())
		.pipe(cssBeautify({
			indent: '  ',
			openbrace: 'end-of-line',
			autosemicolon: true
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({ stream: true }));
});

gulp.task('js', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('app/js'))
		.pipe(reload({ stream: true }));
})

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.html', ['html'])
	gulp.watch('src/scss/**.scss', ['scss'])
	gulp.watch('src/js/**/*.js', ['js'])
})

gulp.task('default', ['html', 'scss', 'js', 'browserSync', 'watch']);