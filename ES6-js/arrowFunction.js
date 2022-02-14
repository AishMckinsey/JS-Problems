const inputs = process.argv.slice(2);
const result = inputs.map(input => input[0]).reduce((first_letter, second_letter) => first_letter+second_letter, "");
//console.log(result)
console.log(`[${inputs}] becomes "${result}"`)