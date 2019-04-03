

var counter = 0;

function hoverCounter (element) {
	 counter++;
	 element.innerHTML= "You iq = " + counter;
	}

function buttonClick(button) {
	alert("You lose!! L IQ = " + counter);
}