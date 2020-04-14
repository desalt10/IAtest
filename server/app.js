// 固定写法
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

// 链接数据库 固定写法 Agriculture库名字
mongoose.connect("mongodb://localhost:27017/Agriculture",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("数据库链接成功")
    })
    .catch(()=>{
        console.log("数据库链接失败")
    })


//App实例 固定写法
var app = express();
//中间件设置 脚手架中会默认生成
app.use(logger('dev'));
app.use(express.json());
// 处理传过来的数据
app.use(express.urlencoded({ extended: false }));
// 处理传过来的cookie
app.use(cookieParser());
// 开放静态资源库
app.use(express.static(path.join(__dirname, 'public')));
  

//允许跨域 固定写法
app.use((req,res,next)=>{
    res.header({
        //允许携带cookie
      'Access-Control-Allow-Credentials': true,
      //哪些源允许你跨域
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      //请求头信息
      'Access-Control-Allow-Headers': 'Content-Type',
      //允许哪些请求方法
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      //内容格式
      'Content-Type': 'application/json; charset=utf-8'
    });
    //如果你的请求是OPTIONS 直接返回 等下一次发post请求 就直接进入next()
    //网页发送post请求之前会发送一个options请求，只有options发送请求成功，才会将post请求发送
    if (req.method === "OPTIONS"){
      res.sendStatus(200);
    }else{
      next();
    }
  });

//设置路由
app.use('/', require('./routes/index'));
//导出
module.exports = app;
