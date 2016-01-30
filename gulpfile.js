require('babel-core/register');

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourceMaps = require("gulp-sourcemaps");
var mocha = require('gulp-mocha');

gulp.task('test', ()=> {
	return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
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