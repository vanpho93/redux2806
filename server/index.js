const express = require('express');
const Word = require('./Word');

const app = express();
app.listen(3000, () => console.log('Server is running'));

app.get('/words', (req, res) => {
    Word.getAll()
    .then(words => res.send(words));
});
