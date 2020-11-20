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

$(function() { 

// Looping thru hours and change colors by adding class 
// **** NEED TO FIX TO 17 
    for (let hourIndex = 9; hourIndex <= 23; hourIndex++){
        // console.log(currentHour); 
        // console.log(hourIndex); 
        const currentHourIndex = $(`#hours${hourIndex}`).data('hour'); 
        //currentHourIndex is data-hour value of #hours + hourIndex 
        // console.log(`#hours${hourIndex}`); 
        // console.log(currentHourIndex); 
        if ( currentHour > currentHourIndex ) { 
            $(`#hours${hourIndex}`).addClass("past"); 
        }
        else if ( currentHour == currentHourIndex ) { 
            $(`#hours${hourIndex}`).addClass("present"); 
        }
        else if ( currentHour < currentHourIndex ) { 
            $(`#hours${hourIndex}`).addClass("future"); 
        }

    }
    // Looping thru eventIndex that was saved in localStorage 
    // and render it on html with matching hourindex
    for ( let eventIndex = 9; eventIndex <= 23; eventIndex++){
        let savedEvent = localStorage.getItem(`hour-${eventIndex}`); 
        $(`#hours${eventIndex}`).text(savedEvent); 
    

        

        

        

    }

})
