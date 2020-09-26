let express = require('express');
let app = express();
let testpaper = require('./touter/testpaper.js');
app.use('/testpaper', testpaper);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.listen(8888, () => {
    console.log('start work!');
});