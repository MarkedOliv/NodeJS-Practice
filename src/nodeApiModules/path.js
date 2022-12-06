// The "path" module allows us to work with folders and know their paths

const path = require('path');

// to know what kind of routes are you going to use. Linux and Windows have difrent separators
console.log(path.sep);

// Join all arguments together and normalize the resulting path.
const filePath = path.join('/public', 'dist', '/styles', 'main.css');

// Basename returns the basefile of the path
console.log(path.basename(filePath));

// Dirname returns the path without the filter: 
console.log(path.dirname(filePath));

// Parse returns the path like an object: 
console.log(path.parse(filePath));

// Resolve autocompletes the path from the current position to the start of your disk:
console.log(path.resolve('dist'));