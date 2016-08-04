var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin');

/*
* Configuración de la tarea concat y mini js
*/
gulp.task('concat-files-js', function(){
gulp.src('js/*.js')
.pipe(concat('js.min.js'))
.pipe(uglify())
.pipe(gulp.dest('build/'))
});


gulp.task('cont-files-html', function(){	
return gulp.src('views/*.html') 
.pipe(htmlmin({collapseWhitespace: true}))
.pipe(gulp.dest('build/'))
});