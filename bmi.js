// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


// const markHeight = Number(prompt("Enter the Marks Height in Meter :"));
// const markWeight = Number(prompt("Enter the Mark's Weight in Kgs :"));

// const johnHeight = Number(prompt("Enter the John's Height in Meter :"));
// const johnWeight = Number(prompt("Enter the John's Weight in Kgs :"));

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);

const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI ,johnBMI);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement


if (markBMI > johnBMI) {
    console.log("Mark's "  + markBMI + " BMI is greater then John's")
} else if (markBMI < johnBMI) {
    console.log("John's " + johnBMI + " BMI is greater then Mark's")
} else {
    console.log("Mark's amd John's BMI is equal");
}

console.log(markBMI ,johnBMI);