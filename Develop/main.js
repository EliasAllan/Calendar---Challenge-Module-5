// Create

var $9AMblock = $("#9");
var $10AMblock = $("#10");
var $11AMblock = $("#11");
var $12AMblock = $("#12");
var $1PMblock = $("#1");
var $2PMblock = $("#2");
var $3PMblock = $("#3");
var $4PMblock = $("#4");
var $5PMblock = $("#5");

// Append
$9AMblock.append(CheckTime)

// Today's date
var $currentDay = $('#currentDay');
var todaysdate = moment();
$currentDay.text(todaysdate.format("dddd, MMMM Do"));


// Time Variables

// var textarea = $('textarea');
var currentTimeHr = moment().hour();
var segmentTime = parseInt(document.body.children[1].children[0].children[1].id);


function CheckTime(){
if(currentTimeHr < segmentTime){
    $9AMblock.addClass("past");
    return;
}else if(currentTimeHr > segmentTime){
    $9AMblock.addClass("future");
    return; 
}else{
    $9AMblock.addClass("present");
    return;
}
}
// var segmentHour = 

// if(moment)
// $("textarea").attr("class", "present")
