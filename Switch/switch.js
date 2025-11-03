//Quinn Walker, Created 10/30/2025, last updated 10/30/2025
//homework for week 4, Switch Statements 


//START OF SCRIPT
let favoritemonth = prompt("What is your favorite month of the year","").toLowerCase();

if (isNaN(favoritemonth) === false)
{
    console.log("Please enter a valid month, not numbers!");
}
else
{
    //says a short comment about the month chosen
    switch (favoritemonth)
    {
    case "january":
        console.log("Welp. your allowed to have your own opinions. Even if your wrong.");
    break;
    case "february":
        console.log("Still a little chilly. But its time to start working on the garden.");
    break;
    case "march":
        console.log("Woohoo March is my favorite month too");
    break;
    case "april":
        console.log("Oh hey, the school year will be starting soon");
    break;
    case "may":
        console.log("Its April but warmer!");
    break;
    case "june":
        console.log("Summer is on its way.");
    break;
    case "july":
        console.log("Are you a love fireworks or a hate fireworks person?");
    break;
    case "august":
        console.log("Enjoy the last few weeks of warm weather.");
    break;
    case "september":
        console.log("Oh hey, its time to start thinking about how close october is.");
    break;
    case "october":
        console.log("Candy!!!");
    break;
    case "november":
        console.log("May your future contain much turkey and mashed potato.");
    break;
    case "december":
        console.log("Happy Holidays!!");
    break;
    }


    //if-else block to comment on the season of year.
    if(favoritemonth === "december" || favoritemonth === "february" || favoritemonth === "january")
    {
        console.log("You love the winter months!");
    }
    else if (favoritemonth === "june" || favoritemonth === "july" || favoritemonth === "august")
    {
        console.log("You enjoy the summer months!");
    }
    else 
    {
         console.log("Other months are interesting too!");
    }
}


    //END OF SCRIPT