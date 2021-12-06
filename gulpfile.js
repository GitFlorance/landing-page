const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const postcssPresetEnv = require('postcss-preset-env');
const postcssShort = require('postcss-short');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const glob = require('glob');

const path = {
	src: {
		dir: 'src/*.html',
		script: 'src/scripts/*.js',
		style: 'src/styles/*.css',
		images: 'src/imgs/*',
		fonts: 'src/fonts/*'
	},
	buildFolder: {
		dir: 'build',
		script: 'build/js',
		style: 'build/css',
		images: 'build/imgs',
		fonts: 'build/fonts'
	},
	buildName: {
		script: 'index.min.js',
		style: 'index.min.css'
	}
}

gulp.task('buildCss', () => {
	const plugins = [
		postcssPresetEnv,
		nested,
		postcssShort({ skip: '-' }),
		autoprefixer({
			browsers: ['last 2 version']
			}),
		],
	processors = [			
		assets({
			loadPaths: ['../images', 'src/images']
		})]
	return gulp.src([path.src.style])
		.pipe(postcss(processors))
		.pipe(postcss(plugins))
		.pipe(concat(path.buildName.style))
		.pipe(cssnano())
		.pipe(gulp.dest(path.buildFolder.style));
});
gulp.task('buildJs', () => {
	return gulp.src([path.src.script])
	    .pipe(concat(path.buildName.script))
	    // .pipe(uglify())
		.pipe(gulp.dest(path.buildFolder.script))
});
gulp.task('buildImgs', () => {
	return gulp.src([path.src.images])
		.pipe(gulp.dest(path.buildFolder.images))
});
gulp.task('buildFonts', () => {
	return gulp.src([path.src.fonts])
		.pipe(gulp.dest(path.buildFolder.fonts))
});
gulp.task('buildHtml', () => {
	return gulp.src([path.src.dir])
		.pipe(gulp.dest(path.buildFolder.dir))
});

gulp.task('buildCss-watch', gulp.series('buildCss', (done) => {
	browserSync.reload();
	done();
}));

gulp.task('buildHtml-watch', gulp.series('buildHtml', (done) => {
	browserSync.reload();
	done();
}));

gulp.task('buildJs-watch', gulp.series('buildJs', (done) => {
	browserSync.reload();
	done();
}));

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
	gulp.watch(path.src.style, gulp.series('buildCss-watch'));	
	gulp.watch(path.src.dir, gulp.series('buildHtml-watch'));	
	gulp.watch(path.src.script, gulp.series('buildJs-watch'));	
});



gulp.task('dev', gulp.series('buildCss','buildHtml','buildJs','browser-sync'));
// gulp.task('prod', ['buildCss','buildJs','buildImgs','buildFonts','buildHtml']);