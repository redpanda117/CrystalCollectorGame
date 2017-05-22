$(document).ready(function() {

//calling global variables
//given number 
var RandomnNumber = Math.floor(Math.random()*101 + 19);
//value of what the player has so far
var totalValue = 0;
//scoreboard
var win = 0;
var lose = 0;
//random numbers for buttons
var bt1 = Math.floor(Math.random()*11 + 1);
var bt2 = Math.floor(Math.random()*11 + 1);
var bt3 = Math.floor(Math.random()*11 + 1);
var bt4 = Math.floor(Math.random()*11 + 1);

function Start(){
//gives a random number to reach 
	RandomnNumber = Math.floor(Math.random()*101 + 19);
//print random number in html
	$("#randomNumber").html(RandomnNumber);
//debuging (make sure the right number is appearing)
	console.log("The number is " +RandomnNumber);
//generate random numbers for each button 
	bt1 = Math.floor(Math.random()*11 + 1);
	bt2 = Math.floor(Math.random()*11 + 1);
	bt3 = Math.floor(Math.random()*11 + 1);
	bt4 = Math.floor(Math.random()*11 + 1);
//making sure there are 4 random numbers and number stays the same until end of game	
	console.log("button ones is "+ bt1);
	console.log("button two is " + bt2);
	console.log("button three is " + bt3);
	console.log("button four is " + bt4);
//players current total number	
	totalValue = 0;
	$("#CurrentValue").html(totalValue);
	console.log("Starting Value " + totalValue);
}

//first button
    $("#bt1").on("click", function() {  	
//adding the button value to the player current number
       totalValue = bt1 + totalValue;
//post the new added number to html 
       $("#CurrentValue").html(totalValue);
//To see if the right number is added correcetly and its new value is correctly added.
       console.log("New total " + totalValue);
//To see if you win or lose
       roundComplete();
      });

//Second button    
    $("#bt2").on("click", function() {
    	totalValue = bt2 + totalValue;
    	$("#CurrentValue").html(totalValue);
    	console.log("New total " + totalValue);
    	roundComplete();
      });

//Third button
    $("#bt3").on("click", function() {
    	totalValue = bt3 + totalValue;
    	$("#CurrentValue").html(totalValue);
        console.log("New total " + totalValue);
        roundComplete();
        
      });

//Fourth button
    $("#bt4").on("click", function() {
    	totalValue = bt4 + totalValue;
    	$("#CurrentValue").html(totalValue);
        console.log("New total " + totalValue);
        roundComplete();
        
      });

//adding to the scoreboard to keep track of wins and losts
function roundComplete() {
//condition to win
  if (totalValue == RandomnNumber) {
//adding one to the win score   
    win++;
//new score appear on html
    $("#win-counter").html(win);
//restart the game    
    Start();
  }
//condition for lost
  else if ( RandomnNumber < totalValue) {
//adding one to the lose score   
    lose++
//new score appear in html
    $("#loss-counter").html(lose);
//restart the game
    Start();
  }
//making sure it works
    console.log("wins" + " " + win);
    console.log("lose" + " " + lose);
}
//calling the function to start the game 
Start();
      

/*Song is from No Game No Life Original Soundtrack Vol.3 - 
All of you is all of me*/
 var audioElement = document.createElement("audio");
 audioElement.setAttribute("src", "Assets/song/song.mp3");

// Sttart Theme Song Button
    $(".theme-button").on("click", function() {
    audioElement.play();
      });
//Pause button
    $(".pause-button").on("click", function() {
    audioElement.pause();
      });
}); 