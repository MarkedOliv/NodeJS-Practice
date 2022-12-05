// "os" module allows you to obtain information from the operating system

const os = require('os');

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());


// there are more methods for console

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
});