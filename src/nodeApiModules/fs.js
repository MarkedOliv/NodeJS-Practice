// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require('fs');

// Async Code:
fs.readFile('./src/nodeApiModules/data/first.txt', (err, data) => {
    if (err) console.log(err)
    console.log(data.toString())

    fs.writeFile('./src/nodeApiModules/data/newFile.txt', 'Created from fs.js', (err, data) => {
        console.log(err);
        console.log(data);
    })
})


// Sync Code:
// const first = fs.readFileSync('./src/nodeApiModules/data/first.txt', 'utf-8');
// const second = fs.readFileSync('./src/nodeApiModules/data/second.txt', 'utf-8');

// console.log(first);
// console.log(second);

// fs.writeFileSync('./src/nodeApiModules/data/third.txt', 'This is a third file');

// const title = 'This is a title for fourth.txt'
// fs.writeFileSync('./src/nodeApiModules/data/fourth.txt', title, {
//     flag: 'a'
// })