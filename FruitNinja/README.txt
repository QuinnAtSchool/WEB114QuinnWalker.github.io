#Emily Walker, Created 11/29/2025, Last updated 11/29/2025
#Readme for web110 final project 


#Sources
https://www.youtube.com/watch?v=6yIW_Fz-4KE - decorative title 

For my project I had the idea of trying to make fruit ninja as a game after seeing the examples in class.
I started by putting together fruit_Ninja_Home.html. I followed a toturial to make the decorative title.
I then built the surounding html elements in and made it look niceish. I drew the ninja and the fruits in https://www.pixilart.com. 
Then downloaded them as pngs. 
I built the second page - copying the first and making some alterations. I then started working on javascript elements

the timer function runs constantly. It counts down the number of seconds left in the game and changes the text to match.
if the number of seconds is 0 then then game_running = false

points function adds points to and changes the text to match.

fruits function checks if game_running = true. If it is true then when clicked fruits hide and then randomly appear. 
I had wanted to make them fall but that was beyond my skill level. 
I have fruits set to randomly position themselves within a set left and top position; essentualy 2d coordinates. 
I found these values by Trial and error testing. Fruits should hide if the game is over.