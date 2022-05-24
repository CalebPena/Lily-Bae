const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()

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

// app.use('/.netlify/functions/api', router);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

module.exports = app;
module.exports.handler = serverless(app);