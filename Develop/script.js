// const moment = require("/moment")


var hour = moment().hour()
var index
var textArea

//This function iterates over the time blocks, converting their IDs
//into a number and storing the value into a variable. This variable
//is then compared to the current hour (using moment.js), then changes
//its appearance using different CSS classes. The last line is changing
//the value of each text area to whatever is stored in local storage.
$( ".col-10" ).each(function(){
    var elId = Number($(this).attr("id"))

    if (elId < hour) {
        $(this).attr("class", "col-10 past")
    }
        else if (elId === hour) {
            $(this).attr("class", "col-10 present")
    }
        else {
            $(this).attr("class", "col-10 future")
    }

    $(this).children("textarea").val(localStorage.getItem($(this).attr("id")))
})

//This function listens for a click on a save button, then takes
//the value of the corresponding text area and puts it into local
//storage

$(".saveBtn").click(function(){
    index = $(this).siblings("div.col-10").attr("id")
    textArea = $(this).siblings("div.col-10").children("textarea").val()
    localStorage.setItem(index, textArea)
})
 

//This line is for printing the date and time at the top of the page
$("#currentDay").text(moment())

