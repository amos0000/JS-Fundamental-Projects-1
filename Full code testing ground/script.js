

//testing ground for all of the new learnt stuff



/*








let j = "a";
if (j === "b") console.log("amazing");
else console.log("monke")

//string
let firstName = "jack";
console.log(firstName);



//math
let $function = 27;
let num = 6;
console.log(num + $function)


let javascript = true;
console.log(javascript);

//console.log(typeof false);
console.log(typeof javascript);
//console.log(typeof 23);
//console.log("amiri")

javascript = "yes";
console.log(typeof javascript);

let year;
let amosBirth = 16;
console.log(typeof year);


if (amosBirth === 16) year = 2006;
console.log(year);
console.log(typeof year);


//math
const now = 2035
const ageAmos = now - 2009;
const ageTony = now - 2018
console.log(ageAmos, ageTony);

console.log(ageAmos < ageTony **2)

// **2 is power of two


//operators
let x = 10 + 5;
x += 10; // x=x+10
x *= 3;
x++ //x+1
x-- //x-1
console.log(x);//25


//comparision operators
console.log(ageAmos >= 18);


const now = 2037;
const ageJonas = now -1991;
const ageSarah = now -2018;

console.log(now - 1991 > now - 2018);
*/
//code test 1
/*
const massMark = 78;
const heightMark = 1.69;
let BMIMark;


const massJohn = 92;
const heightJohn = 1.95;
let BMIJohn;

let markHigherBMI = BMIMark < BMIJohn;

console.log(BMIMark = massMark / (heightMark * heightMark));
console.log(BMIJohn = massJohn / (heightJohn * heightJohn));

if (markHigherBMI == false) {
    console.log(markHigherBMI)
}
else {
    console.log("well well well")
}




//template string
const firstName = 'jonas';
const job = 'coder'
const birthYear = 2006;
const year = 2024;


//works using`` to get easy string ${for variables}
const jonas = `I'm ${firstName} a ${year - birthYear} year old ${job}`
console.log(jonas);

//string with multiple lines using /N/ to chanche the line or ``
console.log(`hello
jonas
im
amos`
);





const age = 10

if (age >= 18) {
    console.log("she is ready for driving")
} else {
    const WaitTime = 18 - age;
    console.log("she takes the bus home wait " + WaitTime + " years")
}
    */


//code test #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let HighBMI = BMIJohn > BMIMark;

if (HighBMI == true) {
    console.log(`john has a higher bmi of ${BMIJohn}`)
}
else { console.log(`mark has a higher bmi of ${BMIMark}`) }


//convert numbers ad strings


//num to string capital N umber
const inputYear = '2009';
console.log(Number(inputYear), inputyear);
console.log(Number(inputYear) + 18);

//string to number  capital S tring
console.log(String(22), 23);


//type coersion 

//+ converts to string
console.log('im' + 19 + 'years old');

// - converts to num
console.log('10' - '2' - 4);


// also with * / goes to numbers
console.log('2' * 2);


//falsy values (0, '' , undefined, null, NaN)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('hello'));
console.log(Boolean({}));

const money = 0;

if (money) {// if money is true but its not because its a falsy value so it goes to else
    console.log("dont spend it all");

}
else {
    console.log("GO TO WORK");

}



//== vs ===
const age = 18;
//const age ='18'

if (age === 18) console.log('is strict');

if (age == 18) console.log('is loose') // avoid as much as you can just chance manually

const favorite = prompt("whats you favorite number");

if (favorite == 18) {
    alert("niga");
} else if (favorite == 69) {
    alert("uh");
} else if (favorite == 3){
    alert("nice");
}


//diferent than
if (favorite !== 18){ //or !=
    alert("why not 18?")
}



const hasDLicense = true; //a
const hasGVision = true; //b


console.log(hasDLicense && hasGVision) //AND HAS  / both to be true
console.log(hasDLicense || hasGVision) //or /only one to be true
console.log(!hasDLicense ) //! reversed

const shouldDrive = hasDLicense && hasGVision;
/*
if (shouldDrive) {
   console.log(`sarah should drive`) 
}
else {
    console.log('sleep...')
}
*/
/*
const isTired = false;

console.log(hasDLicense && hasGVision && !isTired);

if(hasDLicense && hasDLicense && !isTired){
    console.log("go on drive");
}
else{
    console.log("yeah no go sleep");
}


let scoreDolphins = 96 + 108 +89 /3;

let scoreKoalas = 88 + 91 +110 /3;

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
    console.log(scoreDolphins, scoreKoalas);
}else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
}
else{
    console.log("Both win the trophy");
}




const day ='sunday';
/*
switch(day){//day === 'monday'
    case 'monday':
        console.log("Plan course structure");
        console.log("Prepare videos");
        break;
case 'tuesday':
    console.log("prepare theory");
    break;
 case 'wendesday':// for both so less code
 case 'thursday':
 console.log("Code examples");
 break;
 case'friday':
 console.log("Record videos");
 break;
 case'saturday':
 case'sunday':
 console.log("enjoy the weekend");
 break;
 default: // like else
    console.log("not a valid day!")
}



const day = 'saturday';

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Prepare videos");
}
else if (day === 'tuesday') {
    console.log("prepare theory");
}
else if (day === 'wendesday' || day === 'thursday') {
    console.log("Code examples");
}
else if (day === 'friday') {
    console.log("Record videos");
}
else if (day === 'saturday' || day === 'sunday') {
    console.log("enjoy the weekend");
}
else {
    console.log(" ONLY SHOW IF THE VALUE IANT A DAY");
}



//operator
const age = 17
//age >= 18 ? console.log("drink vodka"): // madatory else block after ?
//console.log("drink water");

//turnery  operator REALLY IMPORTANT
const drink = age >= 18 ? 'wine' : 'water';// one simple line for a simple variable if
console.log(drink);


// IF ELSE EXP
let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}
console.log(drink2);


//IF INSIDE OF ``
/*console.log(`well well well ${let drink2;
    if (age >= 18) {
        drink2 = 'wine';
    }
    else {
        drink2 = 'water';
    }
    console.log(drink2);}`) // does not work because its inside of an if 

console.log(`well well well ${age >= 18 ? 'wine' : 'water'}`)// works



//code test 4

const bill = 275;
//const bill = 10;
//const bill = 301:



const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill} and the tip was ${tip} the total was ${bill + tip}`);



*/
