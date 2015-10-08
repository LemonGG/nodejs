var async = require('async')

var concurrencyCount = 0

var fetchUrl = function ( url , callBack ) {
	var delay = parseInt( (Math.random()*10000000)%2000, 10)
	concurrencyCount++
	console.log('现在的迸发说是',concurrencyCount,',正在抓取的是',url,'耗时',delay,'毫秒')
	setTimeout(function(){
		concurrencyCount--
		callBack(null,url + 'html content')
	}, delay);
}

var urls = []
for(var i = 0; i < 30; i++ ) {
	urls.push("http://datasource_"+i)
}

async.mapLimit(urls,5,function(url,callBack){
	fetchUrl(url,callBack)
},function(err,result){
	console.log('final')
	console.log(result);
})