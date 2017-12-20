
var MongoDB = require('../dbUtil');


exports.menusList = function(req, res){
	console.log('菜单列表');
	var pageIndex = req.query.pageIndex;
	console.log(pageIndex);
	MongoDB.find('menus', {},{},pageIndex, function (err, menus) {
		res.json(menus);
	});
};

exports.getMenu = function(req, res){
	console.log('菜单详情');
	var id = req.query.id; 
	MongoDB.findOne('menus', {_id: id}, function (err, menu) {
		if(menu){
			res.json(menu);
		}else{
			res.send('');
		}
	});
};
