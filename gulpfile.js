var path = require('path')
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config')
var repoPath = config.repoPath
var remoteIp = config.remoteIp
var remotePassword = config.remotePassword
gulp.task('default' , watch);
function watch() {
    gulp.watch(repoPath + '/**/*', function (event) {
        var msg = [
            $.util.colors.magenta(event.path),
            'was',
            $.util.colors.cyan(event.type)
        ];
        $.util.log(msg.join(' '));
        gulp.src(event.path)
                .pipe($.scp({
                    host: remoteIp,
                    user: 'admin',
                    password: remotePassword,
                    port: 22,
                    path: path.join('/admin/arbor/', path.relative(repoPath, event.path))
                }));
    });
}
