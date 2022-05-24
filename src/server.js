const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()

app.use(express.static('./static'))
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)


router.get('/home', (req, res) => {
    res.render('home', { title: 'Home' });
})

router.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
})

router.get('/test',(req,res) => {
    res.json({
        hello: "test!"
      });
})

router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

// app.use((req, res) => {
//     // res.redirect('/home');
// })

app.use('/.netlify/functions/server', router);

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })

module.exports = app;
module.exports.handler = serverless(app);
