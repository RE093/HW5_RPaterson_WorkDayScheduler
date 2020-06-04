// Current day and time
$(".timeDateTwo").text(moment().format('LL'));
$(".timeDate").text(moment().format('LTS'));
setInterval(function(){
    $(".timeDate").text(moment().format('LTS'));
},1000);


// Work day hours
var hours = ["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM"];

// Time, Input and Save button generation
for (i = 0; i < hours.length; i++) {

    hourBlocks = $("<div>");
    hourBlocks.addClass("hourBlock input-group mb-3");

    time = $("<div>");
    time.addClass("input-group-prepend");
    time.css("color", "grey");

    timeText = $("<span>");
    timeText.addClass("input-group-text");
    timeText.text(hours[i]);
    timeText.css("width", "4.5rem");
    timeText.attr("data-index");

    userInput = $("<input>");
    userInput.addClass("form-control");
    userInput.attr("placeholder", "task:");

    UserInputAppend = $("<div>");
    UserInputAppend.addClass("input-group-append");

    saveButton = $("<button>");
    saveButton.addClass("fa fa-floppy-o btn btn-secondary");

    UserInputAppend.append(saveButton);
    time.append(timeText);
    hourBlocks.append(time);
    hourBlocks.append(userInput);
    hourBlocks.append(UserInputAppend);
    
    $(".container").append(hourBlocks);
};