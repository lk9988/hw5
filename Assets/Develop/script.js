
// Get the current hour of the day using moment.js

// setting moment() as var so we can call it once and store and reuse them in different places. 
var currentMoment= moment(); 


// get today's date and display  "day of week, month date year, time am/pm"
var now = currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"); 

// display currenttime in "currentDay" in html

var dateDisplay =  $("#currentDay") 
dateDisplay.text(now);


var currentHour = parseInt(currentMoment.format("H")); 
var currentHourtwo = currentMoment.hour(); 
console.log( currentHour, currentHourtwo ); 
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

event.target

