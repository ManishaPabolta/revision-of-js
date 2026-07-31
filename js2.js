const prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let operator = prompt("Enter Operator (+, -, *, /, %)");

let result;
switch (operator) {

    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
        break;

    case "%":
        result = num1 % num2;
        break;

    default:
        result = "Invalid Operator";
}
console.log("CALCULATOR");
console.log("First Number :", num1);
console.log("Second Number:", num2);
console.log("Operator:", operator);
console.log("Answer:", result);