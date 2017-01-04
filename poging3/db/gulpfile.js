/**
 * Created by Gillian on 29/12/2016.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
/*var wiredep = require('wiredep').stream;*/

var jsFiles = ['*.js','js/*.js'];

gulp.task('serve',['style','inject'],function(){
    var options = {
        script:'app.js',
        delayTime: 1,
        env: {
            'PORT':5000
        },
        watch: jsFiles
    }
    return nodemon(options)
        .on('restart',function(ev){
            console.log('Restarting...');
        })
})
gulp.task('inject',function(){
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js'],{read:false});
    var options = {
        ignorePath:'/public'
    }
    return gulp.src('./views/*.html')
        .pipe(inject(injectSrc, options))
        .pipe(gulp.dest('./views'));
})
/*wiredep
gulp.task('inject',function(){
    var options={
        bowerJson: require('./bower.json'),
        directory: './css'
    }
    return gulp.src('./views/*.ejs')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./views'));
})
*/