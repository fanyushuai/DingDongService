
var MongoDB = require('../dbUtil');


exports.blogsList = function(req, res){
	console.log('博客列表');
	var pageIndex = req.query.pageIndex;
	console.log(pageIndex);
	MongoDB.find('blogs', {},{},pageIndex, function (err, blogs) {
		res.json(blogs);
	});
};

exports.getBlog = function(req, res){
	console.log('博客详情');
	var id = req.query.id; 
	MongoDB.findOne('blogs', {_id: id}, function (err, blog) {
		if(blog){
			res.json(blog);
		}else{
			res.send('');
		}
	});
};
