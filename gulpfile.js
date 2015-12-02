/* 
* @Author: willclass
* @Date:   2015-12-02 15:17:13
* @Last Modified by:   willclass
* @Last Modified time: 2015-12-02 15:26:37
*/

'use strict';

var gulp = require("gulp");
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);
 
gulp.task('font', function(){
  return gulp.src(['test/SVG/*.svg'])
    .pipe(iconfont({
      fontName: 'myfont', // required 
      appendUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g. 
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('www/fonts/'));
});