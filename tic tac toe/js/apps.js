var turn = false;

var counter = 0;

var gameOver = false;

var moveTaken1 = false;
var moveTaken2 = false;
var moveTaken3 = false;
var moveTaken4 = false;
var moveTaken5 = false;
var moveTaken6 = false;
var moveTaken7 = false;
var moveTaken8 = false;
var moveTaken9 = false;

var moves = [moveTaken1, moveTaken2, moveTaken3, moveTaken4, moveTaken5, moveTaken6, moveTaken7, moveTaken8, moveTaken9];

var player = 1;

var boxA;
var boxB;
var boxC;
var boxD;
var boxE;
var boxF;
var boxG;
var boxH;
var boxI;

var usedNumbers = [];
var test;

var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

var boxCheck = [boxA, boxB, boxC, boxC, boxD, boxE, boxF, boxG, boxH, boxI];

function AI(){
	if((counter < 9)&&(gameOver == false)){
	var random = Math.floor(Math.random() * 10);
	test = usedNumbers.indexOf(random);
	console.log(test);
	while((test !== -1)||(moves[random-1 == true])||(random == 0)){
	var random = Math.floor(Math.random() * 10);
	test = usedNumbers.indexOf(random);
	console.log(random);
	}
	


	console.log(random);
	usedNumbers.push(random);
	console.log(usedNumbers);
	
	
	
	function CMove(){
		boxes[random-1].getElementsByTagName('p')[0].innerHTML = "O";
		boxes[random-1].getElementsByTagName('p')[0].className = "X";
		}
	
	
		
	setTimeout(CMove, 450);
		
	moves[random-1] = true;
	counter++;
	boxCheck[random-1] = "O";
	turn = false;
	player = 2;
	winCheck();
	console.log(boxCheck);
	console.log(moves);
	

	
	console.log(player);
	
	
	}
}


function turnCheck(){
 player = 1;
}

function winCheck(){
	if(boxCheck[0] != undefined){
	if((boxCheck[0] == boxCheck[1]) && (boxCheck[1] == boxCheck[2])){
		alert("Player " + player + " Wins");
		gameOver = true;
	}
	else if((boxCheck[0] == boxCheck[3]) && (boxCheck[3] == boxCheck[6])){
		alert("Player " + player + " Wins");
		gameOver = true;
	}
	else if((boxCheck[0] == boxCheck[4])&&(boxCheck[4] == boxCheck[8])){
		alert("Player " + player + " Wins");
		gameOver = true;
	}
}
	
	if(boxCheck[1] != undefined){
		if((boxCheck[1] == boxCheck[4])&&(boxCheck[4] == boxCheck[7])){
			alert("Player " + player + " Wins");
			gameOver = true;
		}
	}
	
	if(boxCheck[2] != undefined){
		if((boxCheck[2] == boxCheck[5])&&(boxCheck[5] == boxCheck[8])){
			alert("Player " + player + " Wins");
			gameOver = true;
		}
		else if((boxCheck[2] == boxCheck[4])&&(boxCheck[4] == boxCheck[6])){
			alert("Player " + player + " Wins");
			gameOver = true;
		}
	}
	
	if(boxCheck[3] != undefined){
		if((boxCheck[3] == boxCheck[4])&&(boxCheck[4] == boxCheck[5])){
			alert("Player " + player + " Wins");
			gameOver = true;
		}
	}
	
	if(boxCheck[6] != undefined){
		if((boxCheck[6] == boxCheck[7])&&(boxCheck[7] == boxCheck[8])){
			alert("Player " + player + " Wins");
			gameOver = true;
		}
	}
		if((counter == 9)&&(gameOver == false)){
		alert("Draw");
			gameOver = true;
	
	}

	}



reset.onclick = function() {
	location.reload();
	turn = false;
	}



box1.onclick = function move() {
	if(!moves[0]){
		if(turn == false){
			box1.getElementsByTagName('p')[0].innerHTML = "X";
			box1.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[0] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box1.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxA = "O";
			counter++;
			winCheck();
		}
		
		moves[0] = true;
		usedNumbers.push(1);
		AI();
	}
}

box2.onclick = function move() {
	if(!moves[1]){
		if(turn == false){
			box2.getElementsByTagName('p')[0].innerHTML = "X";
			box2.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[1] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box2.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxB = "O";
			counter++;
			winCheck();
		}	
		
		moves[1] = true;
		usedNumbers.push(2);
		AI();
	}
}

box3.onclick = function move() {
	if(!moves[2]){
		if(turn == false){
			box3.getElementsByTagName('p')[0].innerHTML = "X"
			box3.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[2] = 'X';
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box3.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxC = 'O';
			counter++;
			winCheck();
		}	
		
		moves[2] = true;
		usedNumbers.push(3);
		AI();
	}
}

box4.onclick = function move() {
	if(!moves[3]){
		if(turn == false){
			box4.getElementsByTagName('p')[0].innerHTML = "X"
			box4.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[3] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box4.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;;
			boxD = "O";
			counter++;
			winCheck();
		}	
		
		moves[3] = true;
		usedNumbers.push(4);
		AI();
	}
}

box5.onclick = function move() {
	if(!moves[4]){
		if(turn == false){
			box5.getElementsByTagName('p')[0].innerHTML = "X"
			box5.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[4] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box5.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxE = "O";
			counter++;
			winCheck();
		}	
		
		moves[4] = true;
		usedNumbers.push(5);
		AI();
	}
}

box6.onclick = function move() {
	if(!moves[5]){
		if(turn == false){
			box6.getElementsByTagName('p')[0].innerHTML = "X"
			box6.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[5] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box6.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxF = "O";
			counter++;
			winCheck();
		}	
		
		moves[5] = true;
		usedNumbers.push(6);
		AI();
	}
}

box7.onclick = function move() {
	if(!moves[6]){
		if(turn == false){
			box7.getElementsByTagName('p')[0].innerHTML = "X"
			box7.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[6] = "X";
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box7.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxG = "O";
			counter++;
			winCheck();
		}	
		
		moves[6]= true;
		usedNumbers.push(7);
		AI();
	}
}

box8.onclick = function move() {
	if(!moves[7]){
		if(turn == false){
			box8.getElementsByTagName('p')[0].innerHTML = "X"
			box8.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[7] = 'X';
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box8.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxH = 'O';
			counter++;
			winCheck();
		}	
		
		moves[7] = true;
		usedNumbers.push(8);
		AI();
	}
}

box9.onclick = function move() {
	if(!moves[8]){
		if(turn == false){
			box9.getElementsByTagName('p')[0].innerHTML = "X"
			box9.getElementsByTagName('p')[0].className = "X";
			
			boxCheck[8] = 'X';
			counter++;
			turnCheck();
			winCheck();
			turn = true;
		}
		else{
			box9.getElementsByTagName('p')[0].innerHTML = "O"
			turn = false;
			boxI = 'O';
			counter++;
			winCheck();
		}
		
		moves[8] = true;
		usedNumbers.push(9);
		AI();
	}
}



