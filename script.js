a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var audio = document.getElementById("you-win");

function nextImage(el) {
	// If the image is a cherry, change it to a lemon
	if (el.src.match("images/cherry_slot.PNG")){
		if (el.classList.contains("opaque")){
			//Do nothing
		}
		else{
			el.src = "images/lemon_slot.PNG";
		}
	}
	// If the image is a lemon, change it to an orange
	else if (el.src.match("images/lemon_slot.PNG")){
		if (el.classList.contains("opaque")){
			//Do nothing
		}
		else{
			el.src = "images/orange_slot.PNG";
		}
	}
	// If the image is an orange, change it to a cherry
	else if (el.src.match("images/orange_slot.PNG")){
		if (el.classList.contains("opaque")){
			//Do nothing
		}
		else{
			el.src = "images/cherry_slot.PNG";
		}
	}
}
// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function playSound() {
	document.getElementById("you-win").play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}

function yes(){
	a = document.getElementById("slot1");
	b = document.getElementById("slot2");
	c = document.getElementById("slot3");
	var audio = document.getElementById("you-win");
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		audio.play();
	}
	else{
		//Do nothing
	}
}