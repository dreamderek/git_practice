let express = require('express');
let app = express();
let testpaper = require('./touter/testadd.js');
let show = require('./touter/show.js');
let list = require('./touter/list.js');
app.use('/testadd', testpaper);
app.use('/show', show);
app.use('/list', list);

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.get('/user', (req, res) => {
    res.redirect('checkin.html');
});

app.listen(process.env.PORT || 8888, () => {
    console.log('start work!');
});