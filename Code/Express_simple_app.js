const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware            // static assets that server doesn't need to change it
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))       // absolute path
// })
// for index.html there is another two methods
// adding to static assets
// SSR - server side render

app.all('*',(req, res) => {
    res.status(404).send('resource not found');
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})