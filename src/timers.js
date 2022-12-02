// There are some timers already set.

setInterval(() => {
    /* Do this => */ console.log("Hello world");
}, 2000 /* <= Each "2 seconds" */);

setTimeout(() => {
    /* Do this => */console.log("Hello world after 3 seconds")
}, 3000 /* Past this time "3 seconds" */);