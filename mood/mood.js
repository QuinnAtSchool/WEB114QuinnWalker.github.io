//Quinn Walker 12/2/2025 Javascript DOM Manipulation Homework


//Start of script 
const moodDisplay = document.querySelector("#moodDisplay")  //step 1

// Step 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
const moods = {

  happy:     {bg: '#dd3e16',   text: '#2c91e4',   message: '&#128512;'},
  calm:      {bg: '#2016ddff', text: '#010102ff', message: '&#127811;'},
  excited:   {bg: '#e9e910ff', text: '#e42cc2ff', message: '&#127881;'},
  chill:     {bg: '#35b874ff', text: '#e2ebf3ff', message: '&#128049;' },
  mysterious:{bg: '#6953a4ff', text: '#e2ebf3c0', message: '&#127875;'}
}
let MoodChoice;
// Step 3: Add a single click event listener to the document (event delegation)
// When anything on the page is clicked, call handleMoodClick
document.addEventListener('click', function() 
{
    MoodChoice = 
    {
        target: event.target,
        classList: event.target,
    }
     handleMoodClick()
});
//I got confused over how i was supposed to initalize Moodchoice to hold the users click info. 
//I watched the 10 minute video on event listeners and it gave an explanation for how the browser sends event information.
//what i tried was to attempt to save information when the document event listener triggers then mimiced the 
//syntax of browser-level event info. I chose target and classlist becuse they showed up in the if code. 

//seperatly i also tried MoodChoice as a parameter in handleMoodClick() i.e handleMoodClick(MoodChoice)



//MoodChoice = the parameter that holds info about the user's click
function handleMoodClick()
{
    // Check if the thing clicked is a mood button
    if (MoodChoice.target.classList.contains('mood-btn')) {
        
        // Get the mood name from the button's data-mood attribute
        const mood = MoodChoice.target.getAttribute('data-mood');
            
        // Get the settings for that mood from the moods object
        const moodSettings = moods[mood];

    }
    console.log(mood);
    console.log(config);
    
// Update the background color of the body

document.body.style.backgroundColor = moodSettings.bg;

// Update the text color of the body 

document.body.style.color = moodSettings.text;

// Update the display message

moodDisplay.textContent = moodSettings.message;


}

//End of script