const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.write('<h1>Welcome to the server</h1>');
        return res.end();
    }
    if(req.url === '/about') {
        res.write('<h1>about</h1>');
        return res.end();
    }

    res.write('<h1>404 Not Found</h1>');
    res.end();
})
server.listen(3001);

console.log('Server listening on port 3001')