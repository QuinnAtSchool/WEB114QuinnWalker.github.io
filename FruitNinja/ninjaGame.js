//Emily Walker, Created 11/29/2025, Last updated 11/29/2025
//javascript for web110 javascript1 - fruit ninja game 


//START OF SCRIPT
let seconds_left_on_clock = 300; 
let game_running = true;
let points_Earned = 0;


let timer_Count = document.querySelector(".timer h1")
function timer()
{
    if (seconds_left_on_clock > 0)
    {
        seconds_left_on_clock = seconds_left_on_clock - 1;
        timer_Count.textContent = `Time Left: ${seconds_left_on_clock} seconds` 
    }
    else if (seconds_left_on_clock === 0)
    {
        timer_Count.textContent = `Time Left: 0 seconds`
        console.log ("Game is over")
        game_running = false; 
    }
}
setInterval(timer, 1000); //runs timer until timeout 

let points_Count = document.querySelector(".points h1")

function points ()
{
    points_Earned = points_Earned + 1; 
    points_Count.textContent = `Points: ${points_Earned}`;
} 

let fruit_Orange_Hit_Box = document.getElementById('fruit_orange')
let fruit_Cherry_Hit_Box = document.getElementById('fruit_cherry')
let fruit_Watermelon_Hit_Box = document.getElementById('fruit_watermelon')

let Orange_Hide = true;
let Cherry_Hide = true; 
let Watermelon_Hide = true; 



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
        console.log("game over")
        Orange_Hide = true;
        Cherry_Hide = true;
        Watermelon_Hide = true;
    }
    else 
    {
    if (Orange_Hide === true)
    {
        fruit_Orange_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250)); //max px on home display res = 925 px.  min px = 250
        fruit_Orange_Hit_Box.style.display = 'block'
        fruit_Orange_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200));  //max top value is 575px, min is 200
        Orange_Hide = false
    }
    if (Cherry_Hide === true)
    {
        fruit_Cherry_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250)); //max px on home display res = 925 px.  min px = 250
        fruit_Cherry_Hit_Box.style.display = 'block'
        fruit_Cherry_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200));  //max top value is 575px, min is 200
        Cherry_Hide = false;
    }
    if (Watermelon_Hide === true )
    {
        fruit_Watermelon_Hit_Box.style.left = (Math.floor(Math.random() * (925-250) + 250)); //max px on home display res = 925 px.  min px = 250
        fruit_Watermelon_Hit_Box.style.top = (Math.floor(Math.random() * (575-200) + 200));  //max top value is 575px, min is 200
        fruit_Watermelon_Hit_Box.style.display = 'block';
        Watermelon_Hide = false;
    }
}
}
setInterval(fruit, 1000); //runs timer until timeout 






//END OF SCRIPT