require('babel-core/register');

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourceMaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import mocha from 'gulp-mocha';

gulp.task('test', ()=> {
	return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            compilers: {
                js: babel
            }
        }));
});

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