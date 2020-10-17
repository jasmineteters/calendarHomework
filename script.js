// Defining all planner time elements
var saveBtn = $("#saveBtn")
var scheduleTest = $("#scheduledTest")
var timeCheck = moment().format("H")
var currentDay = $("#currentDay");
var m = moment();
currentDay.text(m.format("[Today is] dddd MMMM Do YYYY[.] [The time is] LT[.]"));


var savedTimes = JSON.parse(localStorage.getItem("scheduleText")) || {}




// Indicate if the time slot has passed IS SAME moment.js, color code and addClass past present or future
function hourSlot(element, time) {
    if (time == timeCheck) {
        element.addClass("present");
    } else if (time < timeCheck) {
        element.addClass("past");
    } else(element.addClass("future"));

}

for (let index = 9; index < 18; index++) {
    const time = index;
    var element = $("#" + time)
    hourSlot(element, time);

}


// onClick of time block, add text input
function addToScheduleText() {

}

$(".saveBtn").on('click', saveScheduledEvent)

var savedSchedule = $(this).parent().parent().find("textarea").val();

// save button saves to localStorage
function saveScheduledEvent(event) {
    event.preventDefault();
    var savedScheduleText = $(this).parent().parent().find("textarea").val();
    var savedTimeBlock = $(this).parent().parent().find("textarea").attr("id");

    savedTimes[savedTimeBlock] = savedScheduleText;
    localStorage.setItem("scheduleText", JSON.stringify(savedTimes))
    console.log("it works")
    console.log($(this).parent().parent().find("textarea").attr("id"))
}



// saved item persists if page is refreshed

function getEvents() {
    for (const key in savedTimes) {
        $("#" + key).val(savedTimes[key])
        console.log(`${key}: ${savedTimes[key]}`);
    }
}

getEvents();