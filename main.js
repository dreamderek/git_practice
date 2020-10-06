let express = require('express');
let app = express();
let testpaper = require('./touter/testadd.js');
app.use('/testadd', testpaper);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('index.html');
    // res.send("test");
});

app.listen(process.env.PORT || 8888, () => {
    console.log('start work!');
});