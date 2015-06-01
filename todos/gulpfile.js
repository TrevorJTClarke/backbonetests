var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');

gulp.task('scripts', function() {
  return gulp.src([
      './config/todo-start.js',
      './js/*.js',
      './config/todo-end.js'
    ])
    .pipe(concat('todo.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('dist/todo.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    return gulp.src([
        './libs/backbone.js',
        './libs/backbone.localStorage.js',
        './libs/underscore.js',
        './js/*.js',
        './spec/*.js'
        ])
        .pipe(jasmine());
});

/**
 * watchers
 */
var watcher = gulp.watch('js/**/*.js', [
    'scripts',
    'compress'
]);//,'reload'
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});


// setup defaults
gulp.task('default', ['scripts']);
