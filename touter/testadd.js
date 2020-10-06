var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('./testadd/index.html');
});

router.get('/about', (req, res) => {
    res.send("<h2>測試製作題庫紀錄網頁</h2>");
});

module.exports = router;