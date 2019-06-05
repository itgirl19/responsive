
var isDropped = false;  //default: not droppped, check css

function toggleSubMenu() {

  isDropped = !isDropped; //toggle
  
  if (isDropped) document.getElementById("submenu_01").style.display = "block";
  else           document.getElementById("submenu_01").style.display = "none";
  
  //short notation: document.getElementById("submenu_01").style.display = (isDropped?"block":"none");
}

function closeAllExercise() {  //and result

  document.getElementById("result").style.display = "none";
  document.getElementById("output_exercise_01").style.display = "none";
  document.getElementById("output_exercise_02").style.display = "none";
  document.getElementById("output_exercise_03").style.display = "none";
}

function showExcercise(exercise) {

  closeAllExercise();
  
  switch (exercise) {
  
	case "exercise_01":
	document.getElementById("output_exercise_01").style.display = "block";
	break;
	
	case "exercise_02":
	document.getElementById("output_exercise_02").style.display = "block";
	break;
	
	case "exercise_03":
	document.getElementById("output_exercise_03").style.display = "block";
	break;
  }
}

function calculate() {  //exercise_01

  var myNumber01 = parseInt(document.getElementById("myNumber01").value);
  var myNumber02 = parseInt(document.getElementById("myNumber02").value);
  var operators  = document.getElementsByName("calc");
  
  var selectedOperator = "plus";
  var myAnswer = -1;
  
  //check if we have numbers
  if (isNaN(myNumber01) || isNaN(myNumber02)) {
  
	document.getElementById("result").innerHTML = "One of the input values is not a number";
	document.getElementById("result").style.display = "block";
	return false; //error
  }
  
  //which operator is selected
  for (index = 0; index < operators.length; index++) {
  
	if (operators[index].checked) {
	  selectedOperator = operators[index].value;
	  break;
	}
  }

  //calculate
  switch (selectedOperator) {
  
	case "plus":
	myAnswer = myNumber01 + myNumber02;
	break;
  
	case "minus":
	myAnswer = myNumber01 - myNumber02;
	break;
  
	case "multiply":
	myAnswer = myNumber01 * myNumber02;
	break;
  
	case "devide":
	myAnswer = myNumber01 / myNumber02;
	break;
  }

  //show at result div
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = myNumber01 + " " + selectedOperator + " " 
                                              + myNumber02 + " = " + myAnswer.toFixed(2);
}
