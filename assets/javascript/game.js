var RandomnNumber = [];
var Value = [];
var win = 0;
var lose = 0;

/*
get ids 
win-counter
lose-counter
randomnNumber
totalVaule
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
function Start(){
	RandomnNumber = Math.floor(Math.random()*102 + 19);
	$("#randomNumber").html(RandomnNumber);
	console.log(RandomnNumber);
};