var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('./list/index.html');
});

router.get('/about', (req, res) => {
    res.send("<h2>預計製作考卷列表</h2>未完成");
});

module.exports = router;