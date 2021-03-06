
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , hotNews = require('./routes/hotNews')
  , videos = require('./routes/videos')
  , menus = require('./routes/menus')
   , blogs = require('./routes/blogs')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/login', user.login);
app.get('/reg', user.reg);

app.get('/newsList', hotNews.hotNewsList);
app.get('/getNews', hotNews.getNews);

app.get('/videosList', videos.videosList);
app.get('/getVideo', videos.getVideo);

app.get('/menusList', menus.menusList);

app.get('/getBlog', blogs.getBlog);
app.get('/blogsList', blogs.blogsList);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
