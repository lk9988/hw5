// Get the current hour of the day using moment.js

// setting moment() as var so we can call it once and store and reuse them in different places. 
const currentMoment= moment(); 
// get today's date and display  "day of week, month date year, time am/pm"
let now = currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
console.log (now) ; 
// display currenttime in "currentDay" in html
let dateDisplay =  $("#currentDay"); 
dateDisplay.text(now);


let currentHour = parseInt(currentMoment.format("H")); 
// var currentHourtwo = currentMoment.hour(); 
console.log( currentHour ) ; 

const saveBtn = $("<i>"); 

$(function(){ 

    


}