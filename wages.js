//# Quinn Walker 10/16/2025 
//#Extra Credit for week 2 Web110


//START SCRIPT
let hourWage;
let hourWork;
let confirmUserInput;

//Asks About Hour Wage;
hourWage = prompt ("What is your hourly wage" , " ");
confirmUserInput = confirm (`Hourly wage is ${hourWage}`);
    hourWage = Number(hourWage);

//Asks About Hours Worked 
hourWork = prompt ("How many hours did you work this week?" , " ");
confirmUserInput = (`Hours Worked is ${hourWork}`);
    hourWork = Number(hourWork);

//CALCULATE WEEKLY EARINGS + TAXES - earnings = wages * hours. taxes are 20% of earnings
let earnings = hourWage * hourWork;
let taxes = earnings * .20; //calculates total tax.
earnings = earnings - taxes; 

//PRINT TO CONSOLE 
console.log("Weekly Earnings is: " + earnings.toFixed(2)); 


//END SCRIPT