//code test 1 whos bmi is higher

const massMark = 78;
const heightMark = 1.69;
let BMIMark;


const massJohn = 92;
const heightJohn = 1.95;
let BMIJohn;

let markHigherBMI = BMIMark < BMIJohn;

console.log(BMIMark = massMark / (heightMark * 2) + " " + "Marks BMI");
console.log(BMIJohn = massJohn / (heightJohn * 2) + " " + "Johns BMI");



if (markHigherBMI == true) {
    console.log("marks BMI is bigger");
}
else {
    console.log("well seems like johns BMI is bigger");
}