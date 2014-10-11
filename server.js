var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
      {
        src: __dirname + '/public',
        compile: function(str, path) {
          return stylus(str).set('filename', path);
        }
      }));
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.render('index');
});

var port = 8084;
app.listen(port);
console.log('listening on port ' + port + '...');
