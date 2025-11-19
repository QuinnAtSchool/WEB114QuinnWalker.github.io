//Quinn Walker, Created 11/13/2025, updated last 11/13/2025
//Week 6, Learning functions. 


let usersName = prompt("What is your name", " ");
let entryCount = 0;

function calcGasAvg() 
{
    let userImput = 0;
    let total = 0;
    let averageGas = 0;
    while (userImput != -1)
    {
        userInput = prompt ("What is your weekly gas total?", " ");
        entryCount = entryCount + 1; 
        total = total + userImput;
        alert ("Enter -1 to end.");  
        if (total === 0)
        {
            averageGas = 0;  
        }
        else 
        {
            averageGas = total / entryCount; 
        }

        alert (`Avarage gas cost: ${averageGas}`)
        return averageGas; 
    }
}

let gasAverage = calcGasAvg();


confirm (`Your name is: ${usersName}`);

confirm (`Your average gas total is: ${gasAverage.toFixed(2)}`); 

alert (`"You entered ${entryCount} gas totals`); 
if (entryCount === 0) 
{
    alert ("You never made any entries into calcGasAverage");
}


//END OF SCRIPT
