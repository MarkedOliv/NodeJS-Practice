const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./nodeApiModules/data/bigFile.txt', {
        encoding: 'utf-8',
    });

    fileStream.on('data', (chunck) => {
        fileStream.pipe(res);
    });

    fileStream.on('error', (error) => {
        console.log(error);
    });
});

server.listen(3001);
console.log('Server listening on PORT 3001')