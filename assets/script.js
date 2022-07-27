displayEvents() || [];        // Diplays what was saved in storage 

// Shows the current date 

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Color Changes depending on the hour of the day 

const currentHour = moment().hour();
let plannerInput = $(".row input[type=text]")

$(plannerInput).each(function() {
       
    let plannerInputNum = parseInt($(this).attr("data-hour"));

    if (plannerInputNum < currentHour) {
        $(this).addClass("past")
    }

    else if (plannerInputNum == currentHour) {
        $(this).addClass("present")
    }

    else if (plannerInputNum > currentHour) {
        $(this).addClass("future")
    }

});

// Message is stored when clicked storage button 

$(".saveBtn").click(function() {
    event.preventDefault();

    var hourValue = $(this).attr("data-value")
    var eventEntered = $(this).prev().val();

    localStorage.setItem(hourValue, JSON.stringify(eventEntered));
});


// events are posted by the hour time 

const keys = Object.keys(localStorage);
keys.forEach(displayEvents);

function displayEvents(item) {
    $(`*[data-hour="${item}"]`).val(JSON.parse(localStorage.getItem(`${item}`)));
};


// button to clear calendar 

$("#clearSchedule").click(function() {
    localStorage.clear();
    window.location.assign("./index.html");
});