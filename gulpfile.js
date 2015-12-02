/* 
 * @Author: willclass
 * @Date:   2015-12-02 15:17:13
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-12-02 18:08:45
 */

'use strict';

var gulp = require("gulp");
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('font', function() {
	return gulp.src(['test/*.svg'])
		.pipe(iconfont({
			fontName: 'myfont', // required 
			appendUnicode: false, // recommended option 
			formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available 
			timestamp: runTimestamp // recommended to get consistent builds when watching files 
		}))
		.on('glyphs', function(glyphs, options) {
			gulp.src('templates/font2.css')
				.pipe(consolidate('lodash', {
					glyphs: glyphs,
					fontName: 'myfont',
					fontPath: '../fonts/',
					className: 's'
				}))
				.pipe(gulp.dest('www/css/'));
		})
		.pipe(gulp.dest('www/fonts/'));
});