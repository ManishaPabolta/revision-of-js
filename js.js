const prompt = require("prompt-sync")();
let math = Number(prompt("Enter Maths Marks"));
let science = Number(prompt("Enter Science Marks"));
let english = Number(prompt("Enter English Marks"));
let computer = Number(prompt("Enter Computer Marks"));
let hindi = Number(prompt("Enter Hindi Marks"));
let total = math + science + english + computer + hindi;
let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}
let result;
if (percentage >= 33) {
    result = "Pass";
} else {
    result = "Fail";
}
console.log("RESULT ");
console.log("Maths :", math);
console.log("Science:", science);
console.log("English:", english);
console.log("Computer:", computer);
console.log("Hindi:", hindi);
console.log("Total Marks :", total);
console.log("Grade:", grade);
console.log("Result:", result);
if (percentage >= 90) {
    console.log("Excellent Performance");
} else if (percentage >= 75) {
    console.log("Very Good");
} else if (percentage >= 50) {
    console.log("Good Work");
} else {
    console.log("Need More Practice");
} 