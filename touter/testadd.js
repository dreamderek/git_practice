let express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('./testadd/index.html');
});

router.get('/test', (req, res) => {
    res.redirect('./test.html');
});

router.get('/about', (req, res) => {
    res.send("<h2>測試製作題庫紀錄網頁</h2>引入MathJax未完成");
});

module.exports = router;