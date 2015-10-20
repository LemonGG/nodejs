## node.js读取文件
### 1.异步读取文件
	var fs = require('fs')

	console.log('异步读取文件')
	fs.readFile('hehe.json',"utf-8",function(err , data){
		if(err){
			console.error(err)
		}else{
			console.log(data)
		}
	})
	console.log('异步code - end')
###### 输出顺序：
1. `异步读取文件`
2. `异步code - end`
3. `{
	name:"leo",
	qq:"297278806"
}`
###### 释义

- 在Node.js中，异步式I/O是通过回调函数实现的。
- fs.readFile接收了三个参数：文件地址，编码格式，回调函数
- fs.readFild请求系统去做处理，不等待处理的结果就立即返回并执行后面的语句
****
### 2.同步读取文件
	var fs = require('fs')

	console.log('同步读取文件')
	var data = fs.readFileSync('hehe.json','utf-8')
	console.log(data);
	console.log('同步code - end');
###### 输出顺序：
1. `异步读取文件`
2. `{
	name:"leo",
	qq:"297278806"
}`
3. `console.log('同步code - end');`
###### 释义

- 在Node.js中，同步操作就是上行的代码执行结束才会step。
- fs.readFileSync接收了二个参数：文件地址，编码格式
- fs.readFildSync会等待结果并返回data
****