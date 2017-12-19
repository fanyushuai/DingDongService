
var MongoDB = require('../dbUtil');


exports.videosList = function(req, res){
	console.log('视频列表');
	var pageIndex = req.query.pageIndex;
	console.log(pageIndex);
	MongoDB.find('videos', {},{},pageIndex, function (err, videos) {
		res.json(videos);
	});
};

exports.getVideo = function(req, res){
	console.log('视频详情');
	var id = req.query.id; 
	MongoDB.findOne('videos', {_id: id}, function (err, videos) {
		if(videos){
			res.json(videos);
		}else{
			res.send('');
		}
	});
};
