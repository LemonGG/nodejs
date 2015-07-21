    创建一个server.js文件
    写下如下代码
```javascript
var http = require("http");

function onRequest(request,response){
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("hello world");
	response.end();
}

http.createServer(onRequest).listen(8888);
```
    接下来就是验证是否成功了，在hello world一讲中已经说过怎么执行了
    执行之后，打开浏览器输入"http:localhost:8888"
    如果页面上显示了hello world就说明成功了
    
    var http = require("http")
    说明：请求node.js自带的http模块，并赋值给http变量
    http.createServer(...).listen(8888);
    说明：这个函数会返回一个对象，并调用这个对象的listen函数，8888为端口
    onRequest(...)
    说明：一个回调函数
    response.writeHead(200,{"Content-type":"text/plain"})
    说明：发送一个状态为200的HTTP并且HTTP头的内容类型是为"text/plain"
    response.write("hello world")
    说明：在HTTP主体中发送文本 "hello world"
    response.end()
    说明：完成响应
    
