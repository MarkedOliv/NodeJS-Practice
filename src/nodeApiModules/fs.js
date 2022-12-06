// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt', 'utf-8');

console.log(first);
console.log(second);

fs.writeFileSync('./data/third.txt', 'This is a third file');

const title = 'This is a title for fourth.txt'
fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'
})