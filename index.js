const express = require('express');
const serverless = require('serverless-http');

const router = express();

router.set('view engine', 'ejs');
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


// router.listen(3000, () => {
//     console.log('listening on port 3000');
// })

router.use('/.netlify/functions/server', router);
router.use('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


module.exports = router;
module.exports.handler = serverless(router);