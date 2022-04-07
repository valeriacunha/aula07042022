// celsius-to-fahrenheit.js 
const converters = require("./converters.js");

// Pega a 3ª entrada de uma lista de argumentos const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
const celsiusInput = process.argv[2]; 
const fahrenheitValue = converters.celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} graus Celsius = ${fahrenheitValue} graus Fahrenheit`);