/*
get ids 
win-counter
lose-counter
randomnNumber
totalVaule
bt 1,2,3,4
*/
/* things to do
random number that give given
	innerhtml to show on page
buttons random values
buttons + totalValue
	totalValue innerHTML to show up
totalValue>randomNumber lose++
totalValue=randomNumber win++
wins and lose inner html to show on page
*/
$(document).ready(function() {
//given number
var RandomnNumber = [];
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
//generating a random number to reach
	var RandomnNumber = Math.floor(Math.random()*101 + 19);
//print random number in html
	$("#randomNumber").html(RandomnNumber);
//debuging (make sure the right number is appearing)
	console.log("The number is " +RandomnNumber);
//random number for button 1
	bt1 = Math.floor(Math.random()*11 + 1);
	bt2 = Math.floor(Math.random()*11 + 1);
	bt3 = Math.floor(Math.random()*11 + 1);
	bt4 = Math.floor(Math.random()*11 + 1);
	
//making sure there are 4 random numbers	
	console.log("button ones is "+ bt1);
	console.log("button two is " + bt2);
	console.log("button three is " + bt3);
	console.log("button four is " + bt4);
//players current total number	
	totalValue = 0;
	$("#CurrentValue").html(totalValue);
	console.log("Starting Value " + totalValue);
}
 //testing random given number function (It works)


//first button
    $("#bt1").on("click", function() {
//the addition
       totalValue = bt1 + totalValue;
//post the new added number to html
       $("#CurrentValue").html(totalValue);
//To see if the right number is added correcetly and its new value is correctly added.
       console.log("New total " + totalValue);
      });

//Second button    
    $("#bt2").on("click", function() {
    	totalValue = bt2 + totalValue;
    	$("#CurrentValue").html(totalValue);
    	console.log("New total " + totalValue);
      });

//Third button
    $("#bt3").on("click", function() {
    	totalValue = bt3 + totalValue;
    	$("#CurrentValue").html(totalValue);
        console.log("New total " + totalValue);
      });

//Fourth button
    $("#bt4").on("click", function() {
    	totalValue = bt4 + totalValue;
    	$("#CurrentValue").html(totalValue);
        console.log("New total " + totalValue);
      });

//adding to the scoreboard to keep track of wins and lost
function roundComplete() {
  
  if (totalValue === RandomnNumber) {
    win++;

    $("#win-counter").html(win);
    Start();
  }
     
  
  else if (totalValue > RandomnNumber) {
    
    lose++;

    $("loss-counter").html(lose) ;

    Start();
  }
    console.log("wins" + " " + win);
    console.log("lose" + " " + lose);
}











Start();
}); 