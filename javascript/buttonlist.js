var count=3;
var list = document.getElementsByTagName("ul");




var button1 = document.getElementsByClassName("button1")[0];


button1.onclick = function() {
	count = count + 1;
	var newLi = document.createElement("li");
	newLi.innerHTML = "number " + count;
	list[0].appendChild(newLi);

};

