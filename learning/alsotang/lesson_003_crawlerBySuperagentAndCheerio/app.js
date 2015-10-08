var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')

var app = express()

app.get('/',function(req,res,next){
	// 用 superagent 抓取 https://cnodejs.org/ 的内容
	superagent.get('https://cnodejs.org/')
			  .end(function(err,sres){// 默认不写时会取上一行的对象
			  		// 常规的错误处理
			  		if(err){
			  			return next(err)
			  		} 

			  		// sres.text里面存储着网页的 html 内容
			  		// 将它会给cheerio.load之后就可以得到一个实现了jquery接口的变量
			  		// 我们习惯将它全名为'$'
			  		// 剩下就都是jquery的内容了
			  		var $ = cheerio.load(sres.text)
			  		var items = []
			  		$('#topic_list .topic_title').each(function(idx,element){
			  			var $element = $(element)
			  			items.push({
			  				title : $element.attr('title'),
			  				href : $element.attr('href')
			  			})
			  		})

			  		res.send(items)
			  }) 
})

app.listen(3000,function(){
	console.log('server running at port 3000');
})