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
    displayCapCase(resultString);
}

//Compressing a string of characters

function getCompressionInput() {
    let response = prompt("Enter a string to compress:")
    return response;
}

function compressInputString(string) {
    var result = "";
    var letterCount = 1;
    for (var i = 0; i < string.length; i++)
    {
        if(string[i] != string[i+1]) {
            result += letterCount + string[i];
            letterCount = 1;
        }
        else {
            letterCount++;
        }
    }

    return result;
}

function displayCompressString(result){
    document.getElementById('compStr').innerHTML = result;    
    }

function compressStringRoutine() {
    var input = getCompressionInput();
    var compressedString = compressInputString(input);
    displayCompressString(compressedString);
}