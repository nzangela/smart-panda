// 'use strict'

// contact form - number validation
function numberValidation(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    alert("Please enter numbers only!");
  }
}
