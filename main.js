const fs = require('fs')
// const req = require('request')
const express = require('express');
let app = express()

app.use((req,res,next) =>{
	//1允许哪些客户端访问我
	//*代表允许所有的客户端访问我
	res.header('Access-Control-Allow-Origin','*');
	//2允许客户端使用哪些方法访问我
	res.header('Access-Control-Allow-Methods','get,post');
	//允许客户端发送跨域请求时携带cookie信息
	res.header('Access-Control-Allow-Credentials',true);
	next();
})


app.get('/get',(req,res)=>{
	var d = fs.readdirSync('f:///CloudMusic')
	res.send(d);
	console.log('ok')
})


app.listen(3000);
console.log('sss');