// 引入依赖
var express = require('express')
var utility = require('utility')

// 建立express实例
var app = express()

app.get('/',function(req,res){
	// 从中req.query中取出我们的q参数
	// 如果是post传过来的body数据,则是在req.body里面
	// 不过express默认不处理body中的信息 需要引入https://github.com/expressjs/body-parse这个中间件才会处理
	// 如果分不清query和body的话，需要补一下http知识
	var q = req.query.q

	// 调用utility.md5方法  得到md5之后的值
	// 之所以使用utility这个库来生成md5值  其实只是习惯问题
	// utility 的github 地址：https://github.com/node-modules/utility
	// 里面定义了很多常用且较杂的辅助方法   可以去看看
	var md5Value = utility.md5(q)

	res.send(md5Value)
})

app.listen(3000,function(){
	console.log('app is running at port 3000');
})