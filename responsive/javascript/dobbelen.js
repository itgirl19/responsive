

function randomInteger(min, max) { //min and max are included 
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}




  var dice_01;
  var dice_02;
  var dice_03;
  var dice_04;
  var dice_05;

  var dice_01_hold = false;
  var dice_02_hold = false;
  var dice_03_hold = false;
  var dice_04_hold = false;
  var dice_05_hold = false;

  var amountThrown = 0;

  function rollDice(isThrow) {
	
	if (!isThrow) {
	  dice_01_hold = false;
      dice_02_hold = false;
      dice_03_hold = false;
      dice_04_hold = false;
      dice_05_hold = false; 
		
	  amountThrown = 0;
		
	  document.getElementById("dice_01").style.background = "black";
	  document.getElementById("dice_01").style.color      = "white";
		
	  document.getElementById("dice_02").style.background = "black";
	  document.getElementById("dice_02").style.color      = "white";
  	  
	  document.getElementById("dice_03").style.background = "black";
	  document.getElementById("dice_03").style.color      = "white";
       
      document.getElementById("dice_04").style.background = "black";
	  document.getElementById("dice_04").style.color      = "white";

      document.getElementById("dice_05").style.background = "black";
	  document.getElementById("dice_05").style.color      =	"white";
	   
	  //result
	  //to do: check if yatzee (or another result)
	  document.getElementById("result").innerHTML = 
	  document.getElementById("result").style.display = "block";
	  //show score with green dices

  	  return false;
	}
	
	if (!dice_01_hold) { //roll the dice again
		document.getElementById("dice_01").innerHTML = randomInteger(1, 6);
	}
	
	if (!dice_02_hold) { //roll the dice again
		document.getElementById("dice_02").innerHTML = randomInteger(1, 6);
	}
	
	if (!dice_03_hold) { //roll the dice again
		document.getElementById("dice_03").innerHTML = randomInteger(1, 6);
	}
	
	if (!dice_04_hold) { //roll the dice again
		document.getElementById("dice_04").innerHTML = randomInteger(1, 6);
	}
	
	if (!dice_05_hold) { //roll the dice again
		document.getElementById("dice_05").innerHTML = randomInteger(1, 6);
	}
	
	//amountThrown++;
	if (++amountThrown >= 3) {
		rollDice(false);
		return false;
	}
	
	document.getElementById("result").innerHTML = "Dit was de " + amountThrown + " gooi";
	document.getElementById("result").style.display = "block";
	 
    }
	
	function setOnHold(myDice) {
		
		if (amountThrown == 0 || amountThrown >= 3) {
			
		  return false;
		}
		
		switch(myDice) {
			
			case "dice_01":
			dice_01_hold = !dice_01_hold;
			
			if (dice_01_hold) { //stop rolling the dice
				document.getElementById("dice_01").style.background = "red";
			} else { //roll the dice again
				document.getElementById("dice_01").style.background = "black";
				document.getElementById("dice_01").style.color      = "white";
			}
			break;
			
			case "dice_02":
			dice_02_hold = !dice_02_hold;
			
			if (dice_02_hold) { //stop rolling the dice
				document.getElementById("dice_02").style.background = "red";
			} else { //roll the dice again
				document.getElementById("dice_02").style.background = "black";
				document.getElementById("dice_02").style.color      = "white";
			}
			break;
			
			case "dice_03":
			dice_03_hold = !dice_03_hold;
			
			if (dice_03_hold) { //stop rolling the dice
				document.getElementById("dice_03").style.background = "red";
			} else { //roll the dice again
				document.getElementById("dice_03").style.background = "black";
				document.getElementById("dice_03").style.color      = "white";
			}
			break;
			
			case "dice_04":
			dice_04_hold = !dice_04_hold;
			
			if (dice_04_hold) { //stop rolling the dice
				document.getElementById("dice_04").style.background = "red";
			} else { //roll the dice again
				document.getElementById("dice_04").style.background = "black";
				document.getElementById("dice_04").style.color      = "white";
			}
			break;
			
			case "dice_05":
			dice_05_hold = !dice_05_hold;
			
			if (dice_05_hold) { //stop rolling the dice
				document.getElementById("dice_05").style.background = "red";
			} else { //roll the dice again
				document.getElementById("dice_05").style.background = "black";
				document.getElementById("dice_05").style.color      = "white";
			}
			break;
			
			
		}
			
		
	}
    





