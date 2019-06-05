
 
function showAge() { 
 console.log("start functie show age");
  
  //ATTENTION:
  //at date object the month starts at number 0 (January)
  //the day of the week starts at sunday (index 0)
  
  var myDay = parseInt(document.getElementById("myDay").value);
  var myMonth = parseInt(document.getElementById("myMonth").value);
  var myYear = parseInt(document.getElementById("myYear").value);
  
  //check if we have numbers
  if (isNaN(myDay) || isNaN(myMonth) || isNaN(myYear)) {
	  
	  document.getElementById("result").innerHTML = "One of the input values is not a number"
	  document.getElementById("result").style.display = "block";
	  return false; //error
  }
  
  var dayToday = new Date();
  var birthDate = new Date(myYear,myMonth-1,myDay); //0=January
  
  var curDay = dayToday.getDate(); //0=Sunday
  var curMonth = dayToday.getMonth()+1; //0=January
  var curYear = dayToday.getFullYear();
  
  var daysOfTheWeek = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];
  //daysOfTheWeek[birthDate.getDay()];
  
  
  var myAge = curYear - myYear;
  
  //check if your birthday is in the future
  if (myMonth > curMonth) myAge--;
  if (myMonth == curMonth) {
	  
	  if (myDay > curDay) {
		myAge--;
	 }
  }
  
  
  if (myAge < 0) myAge = 0;
  
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = "Je bent geboren op een " + daysOfTheWeek[birthDate.getDay()] 
                                              + "<br>Mijn leeftijd is " + myAge;
  console.log("einde functie show age");
											  
}
