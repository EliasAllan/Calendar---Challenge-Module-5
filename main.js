var textAreas = document.getElementsByTagName("textarea");
var buttons = document.getElementsByTagName("button");



// Today's date
var $currentDay = $("#currentDay");
var todaysdate = moment();
$currentDay.text(todaysdate.format("dddd, MMMM Do"));
var blocks = JSON.parse(localStorage.getItem('blocks')) || [null,null,null,null,null,null,null,null,null]


function checkTime(segment, segmentTime) {
  var currentTimeHr = moment().hour();
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
    checkTime(textAreas[i], textAreas[i].id);
    textAreas[i].innerHTML = blocks[i];
  }
}


function addEventListenersToSave() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", savetoLocalStorage);
  }
}

addEventListenersToSave();

function renderStorage(){
  blocks = JSON.parse(localStorage.getItem('blocks'))
  console.log(blocks)
  addClasses()  
}

function savetoLocalStorage(event) {
  for (let i = 0; i < buttons.length; i++) {
if(event.target !== buttons[i]){
  continue  
}
blocks[i] = textAreas[i].value
localStorage.setItem('blocks', JSON.stringify(blocks))
renderStorage()
  }
}
addClasses();

