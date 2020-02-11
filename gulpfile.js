var gulp = require('gulp');
var sass = require('gulp-sass');
var css_nano = require ('gulp-cssnano');
var browsersync = require('browser-sync').create();

gulp.task('livereload',function(){
    browsersync.init({
        server: {
            baseDir: './'
        },
    })
})
gulp.task('sass-compile',function(){
   return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(css_nano())
    .pipe(gulp.dest('css/'))
    .pipe(browsersync.stream());
});
gulp.task('watch',function(){


    gulp.watch('sass/*.scss',gulp.series('sass-compile'));
    gulp.watch('index.html').on('change',browsersync.reload);
});

gulp.task('default',gulp.parallel('livereload','sass-compile','watch'));
