var numbers = process.argv.slice(2);
var minimumNumber = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${minimumNumber}`);