var express = require('express');
var router = express.Router();

/* 环境参数接口*/
router.use("/environment",require('./environment/index'));

module.exports = router;
