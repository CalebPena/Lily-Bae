const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/home', (req, res) => {
    res.render('home', { title: 'Home' });
})

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

app.use((req, res) => {
    res.redirect('/home');
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})