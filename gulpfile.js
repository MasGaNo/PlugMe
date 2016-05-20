var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var args = require("yargs").argv;
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

var isProd = args.env === 'production';

gulp.task('build', function () {
    var gulpTask = browserify({entries: './scripts/app.js', extensions: ['.js'], debug: !isProd})
        .transform(babelify.configure())
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('./plugme_bundle.js'));
    if (isProd) {
        gulpTask = gulpTask.pipe(buffer())
            .pipe(uglify());
    }
    return gulpTask
        .pipe(gulp.dest('./www/'));
});

gulp.task('set-prod-environment', function() {
    process.env.NODE_ENV = args.env ? args.env : 'development';
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('styles', function() {
    var gulpTask = gulp.src('./src/styles/plugme/plugme.scss');
    if (!isProd) {
        gulpTask = gulpTask.pipe(sourcemaps.init());
    }
    gulpTask = gulpTask.pipe(sass(sassOptions).on('error', sass.logError));
    if (!isProd) {
        gulpTask = gulpTask.pipe(sourcemaps.write());
    }
    gulpTask.pipe(gulp.dest('./www/css/'));
});

gulp.task('watch', ['set-prod-environment', 'build', 'styles'], function () {
    gulp.watch('scripts/*.js', ['set-prod-environment', 'build']);
    gulp.watch('./src/styles/**/*.scss', ['set-prod-environment', 'styles']);
});

gulp.task('default', ['watch']);