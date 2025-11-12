//Quinn Walker, Created 11/6/2025, Last updated 11/6/2025
//Week 5 Javascript homework. Loops


//START OF SCRIPT 

//Ask for number of snacks
let snackCount = prompt ("How many snacks do you want?", );
if (snackCount === null)
{
    console.log("No snacks requested. Exiting.");  //is exit() a thing? This doesnt technicaly exit.
}

//Create For Loop
for (let index = 1; index <= snackCount; index++) {

    let snack = prompt("Enter snack #" + index + " name:");

    //Handle Cancel Inside the Loop
    if (snack === null) {

    console.log("Snack selection canceled. Exiting.");

    break; // stop the loop immediately
    }

    //Print Snack and Bonus Messages
    console.log("Snack #" + i + ": " + snack + " given to customer");

    if (i % 3 === 0) {
        console.log(" You got a bonus snack!");
    }

}

//END OF SCRIPT