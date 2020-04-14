var express = require('express');
var environment = require("../../db/environment");

let router = express.Router();

// 获取环境参数
router.post("/getEn",(req,res)=>{
    environment.findOne({},{__v:0},{sort:{_id:-1}})
      .then(data=>{
        res.send({
          code : 0,
          msg : "请求成功",
          data
        });
      })
      .catch(()=>{
        res.send({
          code : 4,
          msg : "服务器错误",
          data : null
        });
      });
  });

module.exports = router;