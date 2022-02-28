// This function clear all the values
function clearScreen() {
 document.getElementById("result").innerHTML = "";
}

// This function display values
function display(value) {
 const calcStat = document.getElementById("status").innerHTML;
 if (calcStat==="display calc"){
	clearScreen();
	document.getElementById("status").innerHTML="";
 }
 document.getElementById("result").innerHTML +=value;
}

function operation(value) {
 document.getElementById("result").innerHTML +=value;
 const prevData = document.getElementById("result").innerHTML;
 document.getElementById("previous-input").innerHTML = prevData;
 clearScreen();
}

// This function evaluates the expression and return result
function calculate() {
 const p = document.getElementById("previous-input").innerHTML;
 const q = document.getElementById("result").innerHTML;
 const r = eval(p+q);
 clearScreen();
 document.getElementById("status").innerHTML="display calc";
 document.getElementById("previous-input").innerHTML="";
 document.getElementById("result").innerHTML = r;
}