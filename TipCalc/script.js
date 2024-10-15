//task is to make it without a if statement and calculate the tip% based on the bills price 


const bill = 275;
//const bill = 10;
//const bill = 301:



const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill} and the tip was ${tip} the total was ${bill + tip}`);
