
var turn = 0;

var moveTaken1 = false;
var moveTaken2 = false;
var moveTaken3 = false;
var moveTaken4 = false;
var moveTaken5 = false;
var moveTaken6 = false;
var moveTaken7 = false;
var moveTaken8 = false;
var moveTaken9 = false;

console.log(boxA)



var boxA;
var boxB;
var boxC;
var boxD;
var boxE;
var boxF;
var boxG;
var boxH;
var boxI;

function winCheck(){
	if(boxA != undefined){
	if((boxA == boxB) && (boxB == boxC)){
		alert("Win");
	}
	else if((boxA == boxD) && (boxD == boxG)){
		alert("Win");
	}
	else if((boxA == boxE)&&(boxE == boxI)){
		alert("Win");
	}
}
	
	if(boxB != undefined){
		if((boxB == boxE)&&(boxE == boxH)){
			alert("Win");
		}
	}
	
	if(boxC != undefined){
		if((boxC == boxF)&&(boxF == boxI)){
			alert("Win");
		}
		else if((boxC == boxE)&&(boxE == boxG)){
			alert("Win");
		}
	}
	
	if(boxD != undefined){
		if((boxD == boxE)&&(boxE == boxF)){
			alert("Win");
		}
	}
	
	if(boxG != undefined){
		if((boxG == boxH)&&(boxH == boxI)){
			alert("Win");
		}
	}

}


reset.onclick = function() {
	location.reload();
	}



box1.onclick = function move() {
	if(!moveTaken1){
		if(turn == 0){
			box1.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxA = 'X';
		}
		else{
			box1.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxA = 'O';
		}
		moveTaken1 = true;
		winCheck();
	}
}

box2.onclick = function move() {
	if(!moveTaken2){
		if(turn == 0){
			box2.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxB = 'X';
		}
		else{
			box2.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxB = 'O';
		}	
		moveTaken2 = true;
		winCheck();
	}
}

box3.onclick = function move() {
	if(!moveTaken3){
		if(turn == 0){
			box3.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxC = 'X';
		}
		else{
			box3.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxC = 'O';
		}	
		moveTaken3 = true;
		winCheck();
	}
}

box4.onclick = function move() {
	if(!moveTaken4){
		if(turn == 0){
			box4.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxD = 'X';
		}
		else{
			box4.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxD = 'O';
		}	
		moveTaken4 = true;
		winCheck();
	}
}

box5.onclick = function move() {
	if(!moveTaken5){
		if(turn == 0){
			box5.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxE = 'X';
		}
		else{
			box5.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxE = 'O';
		}	
		moveTaken5 = true;
		winCheck();
	}
}

box6.onclick = function move() {
	if(!moveTaken6){
		if(turn == 0){
			box6.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxF = 'X';
		}
		else{
			box6.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxF = 'O';
		}	
		moveTaken6 = true;
		winCheck();
	}
}

box7.onclick = function move() {
	if(!moveTaken7){
		if(turn == 0){
			box7.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxG = 'X';
		}
		else{
			box7.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxG = 'O';
		}	
		moveTaken7 = true;
		winCheck();
	}
}

box8.onclick = function move() {
	if(!moveTaken8){
		if(turn == 0){
			box8.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxH = 'X';
		}
		else{
			box8.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxH = 'O';
		}	
		moveTaken8 = true;
		winCheck();
	}
}

box9.onclick = function move() {
	if(!moveTaken9){
		if(turn == 0){
			box9.getElementsByTagName('p')[0].innerHTML = "X"
			turn++;
			boxI = 'X';
		}
		else{
			box9.getElementsByTagName('p')[0].innerHTML = "O"
			turn--;
			boxI = 'O';
		}	
		moveTaken9 = true;
		winCheck();
	}
}

