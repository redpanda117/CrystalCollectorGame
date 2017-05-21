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
var bt1 = Math.floor(Math.random()*12 + 1);
var bt2 = Math.floor(Math.random()*12 + 1);
var bt3 = Math.floor(Math.random()*12 + 1);
var bt4 = Math.floor(Math.random()*12 + 1);

function Start(){
//generating a random number to reach
	var RandomnNumber = Math.floor(Math.random()*102 + 19);
//print random number in html
	$("#randomNumber").html(RandomnNumber);
//debuging (make sure the right number is appearing)
	console.log("The number is " +RandomnNumber);
//random number for button 1
	bt1 = Math.floor(Math.random()*12 + 1);
	bt2 = Math.floor(Math.random()*12 + 1);
	bt3 = Math.floor(Math.random()*12 + 1);
	bt4 = Math.floor(Math.random()*12 + 1);
//making sure there are 4 random numbers	
	console.log("button ones is "+ bt1);
	console.log("button two is " + bt2);
	console.log("button three is " + bt3);
	console.log("button four is " + bt4);
//players current total number	
	totalValue = 0;
	$("#totalVaule").html(totalValue);
	console.log(totalValue);
}
 //testing random given number function (It works)

      $("#bt1").on("click", function() {
        alert("One been clicked!");
      });
        $("#bt2").on("click", function() {
        alert("Two been clicked!");
      });
          $("#bt3").on("click", function() {
        alert("Three been clicked!");
      });
            $("#bt4").on("click", function() {
        alert("Four been clicked!");
      });
//Start();


}); 