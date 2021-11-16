// 'use strict'

// countdown and redirect to home page
var count = 4;
var redirect = "index.html";
function countDown() {
  var element = document.getElementById("timer");
  if (count > 0) {
    count--;
    element.innerText = "This page will redirect in " + count + " seconds.";
    setTimeout("countDown()", 1000);
  } else {
    window.location.href = redirect;
  }
}
countDown();
