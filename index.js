"use strict";

console.log("Hello World");

function askForString() {
    let response = prompt("What string would you like to reverse?");
    return response;
}

function reverseString(stringToReverse){
var response = "";
for (var i = stringToReverse.length - 1; i >= 0; i--)
    {
    response += stringToReverse[i];
    }
return response;
}

function displayReversedResult(result){
document.getElementById('revStr').innerHTML = result;    
}

function reverseStringRoutine(){
    let stringToReverse = askForString();
    let output = reverseString(stringToReverse);
    displayReversedResult(output);
}
