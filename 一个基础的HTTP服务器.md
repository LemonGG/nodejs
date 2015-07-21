    创建一个server.js文件
    写下如下代码
```javascript
var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("hello world");
	response.end();
}).listen(8888);
```
    接下来就是验证是否成功了，在hello world一讲中已经说过怎么执行了
    执行之后，打开浏览器输入"http:localhost:8888"
    如果页面上显示了hello world就说明成功了
