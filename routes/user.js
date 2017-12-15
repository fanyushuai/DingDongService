
var MongoDB = require('../dbUtil');


exports.login = function(req, res){
	console.log('用户登录');
	//body
	var userName = req.body.userName;  
	var PWD = req.body.PWD;
	console.log('userName:'+userName);
	console.log('PWD:'+PWD);
	MongoDB.findOne('user_info', {user_name: userName,PWD:PWD}, function (err, userInfo) {
		if(userInfo){
			console.log(userName+'登录成功');
			res.json(userInfo);
		}else{
			res.send('');
		}
	});
};

exports.reg = function(req, res){
	console.log("保存用户");
	//body
	var userName = req.body.userName;  
	var PWD = req.body.PWD;
	var email = req.body.email;
	MongoDB.save('user_info', user_name,PWD,email, function (err, result) {
	    console.log(result);
	    res.json(result);
	});
};
