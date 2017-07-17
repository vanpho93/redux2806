const express = require('express');
// use it before all route definitions

const Word = require('./Word');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.listen(3000, () => console.log('Server is running'));

app.get('/words', (req, res) => {
    Word.getAll()
    .then(words => {
        res.setHeader('Access-Control-Allow-Origin', 'https://vanpho93.github.io');
        res.send(words);
    });
});

app.get('/', (req, res) => res.render('home'));
