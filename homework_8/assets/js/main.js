// Gobal Variables
var speed = 50; 
var titleIndex = 0; 
var i = 0;

// Descriptions + Titles about Jen
var allTitles = ["a UX Designer.", "an Artist.", "a Coffee Lover.", "a believer", "interested in accessibility."]

// indexes through each title in the allTitles list
function getNewText() {
  let chosenResponse = allTitles[titleIndex];
  // loops through each title depending on the length
  titleIndex = (titleIndex + 1) % allTitles.length;
  return chosenResponse;
}

// 
function resetHeader(isDeleted, text) {
  var header = document.getElementById("changing-header");
  var completed = false;
  if (isDeleted) {
    if (header.innerHTML.length < text.length) { 
      header.innerHTML += text.charAt(i);
      i++;
    }   
    else {
      completed = true;
      i = 0; // reset for next time
      setTimeout(function () {resetHeader(false, getNewText())}, 2000);
    }
  } 
  else {
    if (header.innerHTML.length > 0) {
      header.innerHTML = header.innerHTML.slice(0, -1);
    } 
    else {
      isDeleted = true;
    }
  }
  if (!completed) setTimeout(function() {resetHeader(isDeleted, text);}, speed); 
}

$(document).ready(function() {
  resetHeader(true, getNewText());
});