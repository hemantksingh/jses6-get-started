require('babel-core/register');

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourceMaps from 'gulp-sourcemaps';
import mocha from 'gulp-mocha';

gulp.task('test', ()=> {
	return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            // require: [
            //     './lib/global'
            // ],
            compilers: {
                js: babel
            }
        }));
});

gulp.task("build", () => {
	return gulp.src("index.js")
    	.pipe(sourceMaps.init())
    	.pipe(babel({
    		presets: ['es2015']
    	}))
    	.pipe(sourceMaps.write('.'))
    	.pipe(gulp.dest("dist"));
});