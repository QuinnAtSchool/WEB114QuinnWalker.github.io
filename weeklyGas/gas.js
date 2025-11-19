//Quinn Walker, Created 11/13/2025, updated last 11/13/2025
//Week 6, Learning functions. 


let usersName = prompt("What is your name", " ");
let entryCount = 0;

function calcGasAvg() 
{
    let userImput = 0;
    let total = 0;
    while (userImput != -1)
    {
        alert (`Total Cost is: ${total}`);
        alert (`# of Weeks is: ${entryCount}`);
        alert ("Enter -1 to end.");
        userImput = prompt ("What is your weekly gas total?", " "); 
        if (userImput === -1 ) //handles an exit response 
        {
            return total;
        }
        else 
        {
            total = total + Number(userImput);
            //Number() was used to address a issue where total was concating
            // instead of adding beacuse one varible was considered a string.
            entryCount = entryCount + 1; 
        }
    }
     return total; 
}

let gasTotal = calcGasAvg();

let IndexAdjust = 1;
entryCount = entryCount - IndexAdjust;
//subtracts the entrycount by IndexAdjust (i.e 1) becuse exiting the loop added an extra index. 

let gassAverageTotal = gasTotal / entryCount;
confirm (`Your name is: ${usersName}`);

confirm (`Your average gas total is: ${gassAverageTotal.toFixed(2)}`); 

alert (`"You entered ${entryCount} gas totals`); 
if (entryCount === 0) 
{
    alert ("You never made any entries into calcGasAverage");
}

//END OF SCRIPT