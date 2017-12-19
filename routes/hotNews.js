
var MongoDB = require('../dbUtil');


exports.hotNewsList = function(req, res){
	console.log('新闻列表');
	var pageIndex = req.query.pageIndex;
	console.log(pageIndex);
	MongoDB.find('news', {},{},pageIndex, function (err, hotNews) {
		res.json(hotNews);
	});
};

exports.getNews = function(req, res){
	console.log('新闻详情');
	var id = req.query.id; 
	MongoDB.findOne('news', {_id: id}, function (err, news) {
		if(news){
			res.json(news);
		}else{
			res.send('');
		}
	});
};
