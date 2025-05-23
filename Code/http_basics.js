const http = require('http');
const {readFileSync} = require('fs')

//get all files
//const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        // home page
        res.writeHead(200,{'content-type':'text/html'});   // search for MIME type for more types
        res.write('<h1>home page</h1>');
        //res.write(homePage);
        res.end();
    } else if (url === '/about') {
        // about page
        res.writeHead(200,{'content-type':'text/html'});   
        res.write('<h1>about page</h1>');
        res.end();
    } else {
        res.writeHead(404,{'content-type':'text/html'});   
        res.write('<h1>page not found</h1>');
        res.end();
    }

})


server.listen(5000);