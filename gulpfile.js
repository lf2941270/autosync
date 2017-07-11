var path = require('path')
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config')
var repoPath = config.repoPath
var remotePath = config.remotePath || '/admin/arbor/'
var remoteIp = config.remoteIp
var remoteUser = config.remoteUser
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
                    user: remoteUser,
                    password: remotePassword,
                    port: 22,
                    path: path.join(remotePath, path.relative(repoPath, event.path))
                }));
    });
}

gulp.task('init', function () {
    return gulp.src(repoPath)
            .pipe($.scp({
                host: remoteIp,
                user: remoteUser,
                password: remotePassword,
                port: 22,
                path: remotePath,
                folder: true
            }));
})