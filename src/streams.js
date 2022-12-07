const { writeFile } = require('fs/promises');

const createBigFile = async () => await writeFile('./src/nodeApiModules/data/bigFile.txt', 'hello world'.repeat(10000));

// createBigFile();

const { createReadStream } = require('fs');

const stream = createReadStream('./src/nodeApiModules/data/bigFile.txt', {
    encoding: 'utf-8'
});

stream.on('data', (chunck) => {
    console.log(chunck);
});

stream.on('end', () => {
    console.log('This is the end');
});

stream.on('error', (error) => {
    console.log(error);
});