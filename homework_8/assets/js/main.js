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

// resets the title as each character deletes
function resetHeader(isDeleted, text) {
  // presents the title on home page     
  var header = document.getElementById("changing-header");
  var completed = false;
  // types out the new word by character - once previous title is deleted   
  if (isDeleted) {
    if (header.innerHTML.length < text.length) { 
      header.innerHTML += text.charAt(i);
      i++;
    }   
    else {
      completed = true;
      // reset for next time    
      i = 0;
      setTimeout(function () {resetHeader(false, getNewText())}, 2000);
    }
  }
  // deletes through each char of the title (checks for length)      
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

// run JavaScript code as soon as the page's DOM is safe to manipulat
$(document).ready(function() {
  resetHeader(true, getNewText());
});