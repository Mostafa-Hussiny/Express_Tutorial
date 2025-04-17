const express = require('express')
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // for middleware whether send the responce or to pass on next middleware
    //res.send('Testing...');  // terminateing the cycle.
    next();
}

app.get('/', logger,(req, res) => {
    res.send('Home');
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})