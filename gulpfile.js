var gulp = require('gulp');

var validate = require('gulp-nice-package');
var connect = require('gulp-connect');
var open = require('gulp-open');

var app = {
	src: {
		html: 'app/**/*.html'
	}
};

// Validate package.json
gulp.task('validate-json', function() {
	return gulp.src('package.json')
		.pipe(validate({
			warnings: false,
			recommendations: false
		}))
})

// Dev server
gulp.task('connect', function() {
	connect.server({
		root: 'app/',
		port: 8080,
		livereload: true
	})
	
	gulp.src('app/index.html')
	.pipe(open('', {url: "http://localhost:8080"}));
	
	
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
gulp.task('default', ['connect', 'watch'])