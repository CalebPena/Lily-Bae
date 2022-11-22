const express = require('express');

const app = express();

// Redirect www to non-www.
function redirectWwwTraffic(req, res, next) {
    if (req.headers.host.slice(0, 4) === 'www.') {
        var newHost = req.headers.host.slice(4)
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl)
    }
    next();
}

app.set('trust proxy', true)
app.use(redirectWwwTraffic)

app.use(express.static('./src/static'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

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
    console.log('Listening on port 3000');
})
