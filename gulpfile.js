const gulp = require('gulp');
const static = require('node-static');
const http = require('http');


gulp.task('start', function () {
    var fileServer = new static.Server('./.dist');
    http.createServer(function (request, response) {
        request.addListener('end', function () {
            fileServer.serve(request, response);
        }).resume();
    }).listen(8080);
});