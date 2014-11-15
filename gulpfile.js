var gulp = require('gulp');

var connect = require('gulp-connect');

var app = {
	src: {
        html: ['src/index.html', 'src/app/**/*.html']
	}
};

// Dev server
gulp.task('connect', function() {
	connect.server({
        root: 'src/',
		port: 8080,
		livereload: true
    });
});

// Watch for changes
gulp.task('watch', function() {
	gulp.watch(app.src.html, ['html'])
});

// Html file task
gulp.task('html', function() {
	gulp.src(app.src.html)
	.pipe(connect.reload())
});

// Default task
gulp.task('default', ['connect', 'watch']);