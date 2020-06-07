// jQuery initial function
$(document).ready(function() {

    // Current day and time
    $(".timeDateTwo").text(moment().format('LL'));
    $(".timeDate").text(moment().format('LTS'));
    setInterval(function(){
        $(".timeDate").text(moment().format('LTS'));
    },1000);
    
    // Work day hours
    var hours = ["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM", "7 PM", "8 PM"];
    var value = ["06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"]
    var time = "";
    var timeNow = "";
    taskArray = []

    // getTasks()

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
        timeText.attr("value", value[i])
        timeText.css("width", "4.5rem");

        console.log(timeText.attr("value"))

        userInput = $("<div>");
        userInput.addClass("userInput");
        userInput.attr("contentEditable", "true");
        userInput.attr("data-index", i);

        UserInputAppend = $("<div>");
        UserInputAppend.addClass("input-group-append");
        
        saveButton = $("<button>");
        saveButton.addClass("fa fa-floppy-o btn btn-secondary save");
        saveButton.attr("data-index", i);

        UserInputAppend.append(saveButton);
        time.append(timeText);
        hourBlocks.append(time);
        hourBlocks.append(userInput);
        hourBlocks.append(UserInputAppend);
        $(".container").append(hourBlocks);

        console.log(saveButton.attr("data-index"));

        var time = moment().format('HH')
        var timeNow = (time - 12);

        if (time > timeText.attr("value")) {
            timeText.css("background-color", "lightgrey")
        }
        if (time === timeText.attr("value")) {
            timeText.css("background-color", "lightblue")
        }
        if (time < timeText.attr("value")) {
            timeText.css("background-color", "lightgreen")
        }
       
    }; 

    $(".save").on("click", function(){
        taskArray.push(userInput.text());
        var taskItems = localStorage.setItem("task" + $(this).attr("data-index"), JSON.stringify(taskArray));
    });

    

    // function getTasks() {
    //     var items = JSON.parse(localStorage.getItem("8am"));
    //     $(".text").append($(".text").text(items))
    // }

    


    // for (i = 0; i <= 13; i++) {
    //     var time = parseInt(moment().format('HH'))
    //         var timeNow = (time - 12);

    //     if (timeNow.toString() + " PM" === hours[i]) {
    //         console.log("yes");
    // //     };
    // };
});