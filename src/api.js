const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()

app.set('view engine', 'ejs');
router.use(express.static(__dirname + '/static'));

router.get('/home', (req, res) => {
    res.render('home', { title: 'Home' });
})

router.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
})

router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

router.use((req, res) => {
    res.redirect('/home');
})

app.use('/.netlify/functions/api', router);


module.exports = app;
module.exports.handler = serverless(app);