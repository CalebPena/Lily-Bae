const express = require('express');

const app = express();

// Redirect www to non-www.
function checkUrl(req, res, next) {
    let host = req.headers.host
    let newHost = req.headers.host.slice(4);

    if (host.match(/^www\..*/i)) {

      return res.redirect(301, req.protocol + '://' + newHost + req.url)
    }
    next()
  }

app.use(checkUrl);

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
