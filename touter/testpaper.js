var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('./testpaper/index.html');
});

module.exports = router;