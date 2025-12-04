//Quinn Walker, Created 11/29/2025, Last updated 12/04/2025
//javascript for web110 javascript1 - fruit ninja game 


//START OF SCRIPT
let seconds_left_on_clock = 300; 
let game_running = true;
let points_Earned = 0;

//counts the seconds left and updates the html text for .timer
let timer_Count = document.querySelector(".timer h1")
function timer()
{
    if (seconds_left_on_clock > 0) 
    //if there are still seconds on the clock
    //counts down the secondws remaining and adjusts the html text. 
    {
        seconds_left_on_clock = seconds_left_on_clock - 1;
        timer_Count.textContent = `Time Left: ${seconds_left_on_clock} seconds` 
    }
    else if (seconds_left_on_clock === 0) //when seconds have run out/aka === 0 
    //marks game as over. And displays 0 seconds left. 
    {
        timer_Count.textContent = `Time Left: 0 seconds`
        console.log ("Game is over")
        game_running = false; 
    }
    
}
setInterval(timer, 1000); //runs timer every second
//dont use while loop with timer. attempted to use while (game_running == true)
//it loads the page already at 0s. Presumably compiles before displaying on the browser. 


//adds points to the point counter and updates the onscreen text.
let points_Count = document.querySelector(".points h1")
function points ()
{
    points_Earned = points_Earned + 1; 
    points_Count.textContent = `Points: ${points_Earned}`;
} 

//connects fruit hit boxes to html IDs. 
//used ID to avoid complexity - .fruit needed to apply behavior to all fruits. 
//but individual fruits have seperate behaviors. 
let fruit_Orange_Hit_Box = document.getElementById('fruit_orange')
let fruit_Cherry_Hit_Box = document.getElementById('fruit_cherry')
let fruit_Watermelon_Hit_Box = document.getElementById('fruit_watermelon')

//on inital load fruit is considered hidden. 
//hidden is the property that activates when fruit is clicked
//hidden means fruit disapears from view
let Orange_Hide = true;
let Cherry_Hide = true; 
let Watermelon_Hide = true; 


//fruit hit boxes. Event listeners that activate when clicked.
//they call points() and mark fruit as hidden
fruit_Orange_Hit_Box.addEventListener('click', function(){
    console.log('Clicked Orange');
    points();
    Orange_Hide = true 
    fruit_Orange_Hit_Box.style.display = 'none';
});

fruit_Cherry_Hit_Box.addEventListener('click', function () {
    console.log('Clicked Cherry');
    points();
    Cherry_Hide = true;
    fruit_Cherry_Hit_Box.style.display = 'none';
});

fruit_Watermelon_Hit_Box.addEventListener('click', function() {
    console.log('Clicked Watermelon');
    points();
    Watermelon_Hide = true;
    fruit_Watermelon_Hit_Box.style.display = 'none';
});

function fruit ()
{ 
    if (game_running === false)
    {
        //checks if game is still considered running 
        //if game is not running then it hides all fruit and messages the console. 
        console.log("game over")
        Orange_Hide = true;
        Cherry_Hide = true;
        Watermelon_Hide = true;
    }
    else //if game is running. hidden fruit can unhide and move position. 
    //each fruit is checked for hidding condition
    // - if hidding then moves to a random position and unhides.
    {
    if (Orange_Hide === true)
    {
        fruit_Orange_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250));
         //max px on home display res = 925 px.  min px = 250
      
        fruit_Orange_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200)); 
         //max top value is 575px, min is 200

          fruit_Orange_Hit_Box.style.display = 'block';
          Orange_Hide = false //orange is nolonger considered hiding. 
    }
    if (Cherry_Hide === true)
    {
        fruit_Cherry_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250)); 
        //max px on home display res = 925 px.  min px = 250
  
        fruit_Cherry_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200));
        //max top value is 575px, min is 200

        fruit_Cherry_Hit_Box.style.display = 'block';
        Cherry_Hide = false; //cherry is nolonger considered hiding
    }
    if (Watermelon_Hide === true )
    {
        fruit_Watermelon_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250)); 
        //max px on home display res = 925 px.  min px = 250

        fruit_Watermelon_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200)); 
         //max top value is 575px, min is 200
        
        fruit_Watermelon_Hit_Box.style.display = 'block';
        Watermelon_Hide = false; //watermelon is nolonger considered hiding. 
    }
}
}
setInterval(fruit, 1000); //runs fruit() every second.
//END OF SCRIPT