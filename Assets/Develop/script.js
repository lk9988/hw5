
// Get the current hour of the day using moment.js

// setting moment() as var so we can call it once and store and reuse them in different places. 
var currentMoment= moment(); 


// get today's date and display  "day of week, month date year, time am/pm"
var now = currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
console.log (now) ; 
// display currenttime in "currentDay" in html

var dateDisplay =  $("#currentDay"); 
dateDisplay.text(now);


var currentHour = parseInt(currentMoment.format("H")); 
// var currentHourtwo = currentMoment.hour(); 
console.log( currentHour ) ; 

// saveButton // save it by clicking the icon 
var saveBtn = $("<i>"); 

// save text from textarea when saveicon is clicked 
$(document).on('click', 'i', function(event){

    event.preventDefault(); 
   


}); 


// if (currentHour = )

// for (let index )

// For  Loop pver the hours of the day from 9am to 5pm 
//   i = 9 to i <= 17 

// var i = 9

//  Current checking 9am < current hour 

// 9am is in the past 

// < div id = "hour-9" > 로 만들려면 

// Element ID =  "hour- " + i 

// Select Matching element - $( Element ID )

// saving / loading data 

// saving it to localstorage 

// add a click event on a parent element that can listen 

// to my save button clicks 

// When the user clicks a save button 

// than i need to save the associated text for the associated user 
// get the current hour from the 'event.target' ( the clicked button)

// var theClickedHour = $(event.target).parent().attr("id"); 

// getting value and save from testarea 

// var value = $(event.target).prev().val(); 

// and store in local storage

// localStorage.setItem("hour-" + theClickedHour, value ) ; 
// making keyname unique is important !! prevent conflict 


