const express = require('express')
const app = express();
const morgan = require('morgan')
const logger = require('./logger');
const authorize = require('./authorize')

// req => middleware => res

// middleware in app.use   or  on each route
// options for middleware  ourown / express/ third party

// app.use(express.static('./public'))// Ex : built in middleware 

// third party  example  morgan

//app.use([logger, authorize])    // execution in oreder of index in array

//app.use(logger)             // now logger midleware is added to all APIs , Note : oreder matters 
// app.use('/api',logger)     // when added path now it will applay to any route after that path
// Ex: /api/item      ,   /api/tools  

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home');
})

// app.use(logger)       // here all next APIs will use logger but home not

app.get('/about', (req, res) => {
    console.log(req.user);
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})