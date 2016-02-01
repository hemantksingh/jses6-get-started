require('babel-core/register');

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourceMaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import mocha from 'gulp-mocha';
import runSequence from 'run-sequence';
import jshint from 'gulp-jshint';

gulp.task('build', () => {
	
    let index = gulp.src('index.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist'));

    let src = gulp.src('src/**/*', {base: '.'})
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));

    return merge(index, src);    
});

gulp.task('unit', ()=> {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            compilers: {
                js: babel
            }
        }));
});

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', callback => {
    runSequence('lint', 'unit', callback);
});