// 'use strict'

// automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// what we offer -- grid cards -- like button
function liked() {
  var element = document.getElementById("btn1");
  element.classList.toggle("liked");
}

function liked1() {
  var element = document.getElementById("btn2");
  element.classList.toggle("liked");
}

function liked2() {
  var element = document.getElementById("btn3");
  element.classList.toggle("liked");
}

// Cookie Consent
const cookieBox = document.querySelector(".wrapper");
const acceptBtn = cookieBox.querySelector(".buttons button");
acceptBtn.onclick = () => {
  cookieBox.classList.add("hide");
};

// draggable Cookie

dragElement(document.getElementById("theDiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Cookie function
function cookieFunction() {
  var x = document.cookie;
  document.getElementById("cookies-accepted").innerHTML = "User's Cookie: " + x;
}

// Geolocation share
navigator.geolocation.getCurrentPosition(function (position) {
  geoLocationFunction(position.coords.latitude, position.coords.longitude);
});

// back up website on local storage
if (localStorageKeys.length > 0) {
  for (var i = 0; i < localStorageKeys.length; i++) {
    var key = localStorageKeys[i];
    if (key.search(_instrumentId) != -1) {
      keysToBackup.push(key);
      var data = localStorage.getItem(localStorageKeys[i]);
      zip.file(localStorageKeys[i].slice(0, -19) + ".txt", data);
    } else {
      keysNotToBackup.push(key);
    }
    var datafile = document.getElementById("backupData");
    datafile.download = formName + "_Data.zip";
    datafile.href = window.URL.createObjectURL(zip.generate({ type: "blob" }));
  }
}
