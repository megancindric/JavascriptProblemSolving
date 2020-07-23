"use strict";

//Reverse a string function

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

//Capitalize First Letter Function

function getCapStringInput() {
    let response = prompt("What string would you like to capitalize?")
    return response;
}

function convertToLower(inputString) {
var response = inputString.toLowerCase();
return response;
}

function splitIntoWords(stringToSplit) {
    var response = stringToSplit.split(" ");
    return response;
}

function capitalizeEachFirstLetter(splitArray)
{
    for (var i = 0; i < splitArray.length; i++)
    {
        splitArray[i] = splitArray[i].charAt(0).toUpperCase() + splitArray[i].substring(1);
    }
    return splitArray;
}

function arrayToString(capArray)
{
    var result = capArray.join(' ');
    return result;
}

function displayCapCase(result){
    document.getElementById('capStr').innerHTML = result;    
    }

function capitalizeFirstLetterRoutine() {
    let stringToCap = getCapStringInput();
    let lowerString = convertToLower(stringToCap);
    let splitString = splitIntoWords(lowerString);
    let capArray = capitalizeEachFirstLetter(splitString);
    let resultString = arrayToString(capArray)
    let result = displayCapCase(resultString);
}