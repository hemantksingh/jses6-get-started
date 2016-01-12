require('babel-core/register');

var gulp = require("gulp");
var babel = require("gulp-babel");
var sourceMaps = require("gulp-sourcemaps");

gulp.task('test', ()=> {
	console.log("tests yet to be implemented..");
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