// Defining all planner time elements
var am9 = $("#am9");
var am10 = $("#am10");
var am11 = $("#am11");
var pm12 = $("#pm12");
var pm1 = $("#pm1");
var pm2 = $("#pm2");
var pm3 = $("#pm3");
var pm4 = $("#pm4");
var pm5 = $("#pm5");
saveBtn = $("#saveBtn")

am9 = moment().hour('7').format("LT");

var currentDay = $("#currentDay");

var m = moment();
currentDay.text(m.format("[Today is] dddd MMMM Do YYYY[.] [The time is] LT[.]"));


var timeCheck = moment().format("LT")

console.log(timeCheck)
console.log(am9);




// Indicate if the time slot has passed IS SAME moment.js, color code and addClass past present or future
// function hourSlot() {

// }



// onClick of time block, add text input
// function addToScheduleText() {

// }




// save button saves to localStorage
function saveScheduledEvent(event) {
    event.preventDefault();
    if (saveBtn.on('click'))
        localStorage.setItem("scheduledTask", JSON.stringify(values));
}



// saved item persists if page is refreshed