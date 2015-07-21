    我们要做的就是向STDOUT输出 "hello world"
    首先创建一个helloWorld.js文件，内容如下：
```javascript
console.log("hello world");
```
    接下来保存文件，打开终端工具，输入 node helloWorld.js
    你的那终端怎么显示？
    是这样？
```std
module.js:338
    throw err;
          ^
Error: Cannot find module '/Users/Lemon/Desktop/helloWorld.js'
    at Function.Module._resolveFilename (module.js:336:15)
    at Function.Module._load (module.js:278:25)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
LeodeMac-mini:Desktop Lemon$ 
```
    还是这样？
```std
LeodeMac-mini:nodejs Lemon$ node helloWorld.js
hello world
LeodeMac-mini:nodejs Lemon$ 
```
    如果是第二种，恭喜你成功了，你已经向胜利又迈进了一步
    如果是第一种，别急，我告诉你一下你立马也会向成功前进一步
    神说："在执行node helloWorld.js之前，请先定位到helloWorld.js所在的目录"
