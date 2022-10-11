// Create

var textAreas = document.getElementsByTagName("textarea");
var buttons = document.getElementsByTagName("button");
// var $9AMblock = $("#9");
// var $10AMblock = $("#10");
// var $11AMblock = $("#11");
// var $12AMblock = $("#12");
// var $1PMblock = $("#1");
// var $2PMblock = $("#2");
// var $3PMblock = $("#3");
// var $4PMblock = $("#4");
// var $5PMblock = $("#5");

// Append

// Today's date
var $currentDay = $("#currentDay");
var todaysdate = moment();
$currentDay.text(todaysdate.format("dddd, MMMM Do"));
var blocks = JSON.parse(localStorage.getItem('blocks')) || [null,null,null,null,null,null,null,null,null]
// console.log(blocks)

// buttons[0].addEventListener('click', example)

// function example(event){
//     event.preventDefault()
//     console.log(event.target.previousSibling.value)
// }

function checkTime(segment, segmentTime) {
  var currentTimeHr = moment().hour();
  //console.log(segment);
  // console.log(currentTimeHr)
  // console.log(segmentTime)
  if (segmentTime < currentTimeHr) {
    segment.classList.add("past");
  } else if (segmentTime > currentTimeHr) {
    segment.classList.add("future");
  } else {
    segment.classList.add("present");
  }
}

function addClasses() {
  for (let i = 0; i < textAreas.length; i++) {
    // console.log(textAreas[i].id)
    checkTime(textAreas[i], textAreas[i].id);
    // console.log(localStorage.getItem(textAreas[i]))
   
    textAreas[i].innerHTML = blocks[i];
  }
}


function addEventListenersToSave() {
  for (i = 0; i < buttons.length; i++) {
    //console.log(buttons[i]);
    buttons[i].addEventListener("click", savetoLocalStorage);
  }
  //iterate through each button
  //add event listener that on click calls fucntion "savetoLocalStorage"
}

addEventListenersToSave();

function renderStorage(){
  blocks = JSON.parse(localStorage.getItem('blocks'))
  console.log(blocks)
  addClasses()  
}

function savetoLocalStorage(event) {
  // it will event.stopPropagation()
// console.log(buttons[i])
  for (let i = 0; i < buttons.length; i++) {
if(event.target !== buttons[i]){
  continue  
}
blocks[i] = textAreas[i].value
localStorage.setItem('blocks', JSON.stringify(blocks))
renderStorage()
  }
  //you will find the text area next to the button via event.target
  //travel to my textArea, and save to local storage what is in that text area using the textArea id as the key
}
addClasses();
