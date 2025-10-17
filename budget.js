//# Quinn Walker 10/16/2025 
//# Week 2 budget assigmnent for web110


//START SCRIPT


let income = 10000; //(number) — The amount of money you earn monthly.
let rent = 3000;//(number) — Your monthly rent or mortgage payment.
let groceries = 2000;//(number) — How much you spend on groceries every month.
let utilities = 1500;//(number) — Your monthly utility bills (electricity, water, etc.).

//CALCULATE TOTAL EXPENSES - sum of rent, groceries, and utilities.
totalExpenses = income + rent + groceries + utilities; 

//CALCULATE REMAINING MONEY - subtracts your totalExpenses from your income.
remainingMoney = income - totalExpenses;

//CALCULATE PERCENTAGES - X/INCOME * 100
rentPer = rent / income * 100;
groceriesPer = groceries / income * 100;

//PRINT THE RESULTS 
console.log ("Total Income Is: " + income.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log ("Total Rent Cost Is: " + groceries.toLocaleString("en-US", { style: "currency", currency:"USD"}));
console.log ("Total Grocery Cost Is: $" + groceries );
console.log ("Total Rent Cost Percent Is: " + groceriesPer + "%");
console.log ("Total Grocery Cost Percent Is: " + rentPer +"%");


//END SCRIPT
