// Understanding modules in Node JS
// It can aslo be exported like:
// export const myWebAddress = "https://oliver-marquez.netlify.app"
// export default const myWebAddress = "https://oliver-marquez.netlify.app"
// You can aslo exports as many functions/variables as you need
const myWebAddress = "https://oliver-marquez.netlify.app/"
const myName = "Oliver"
const myEmail = "olivdev4@gmail.com"

module.exports = {
    myWebAddress,
    myName,
    myEmail,
};