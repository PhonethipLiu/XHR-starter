// first line of code in JS file; similar to !Doctype
"use strict";

console.log("xhr main.js");

// Today's date
let startTime = Date.now();
console.log("startTime", startTime);

for(let i = 0; i < 2000000; i++){
    let x = i + i/2 * 6;
};
console.log("newTime", Date.now());


let bigDataRequest = new XMLHttpRequest();
bigDataRequest.addEventListener("load", bigDatatComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

function bigDatatComplete(event){
    console.log("event", event);
    if(event.target.status === 200){
        let bigData = JSON.parse(event.target.responseText);
        console.log("Time of the Big Data", Date.now()-startTime);
        console.log("data", bigData);
    } else {
        console.log("check the spelling of your file");
    }
};

function bigDataFailed(event){
    console.log("oops, something went wrong");
};

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();

// loading color json file
let dataRequest = new XMLHttpRequest();
console.log(dataRequest);
dataRequest.addEventListener("load", dataRequestComplete);
// "load" and "error" is an event
dataRequest.addEventListener("error", dataRequestFailed);

//function for data request complete
function dataRequestComplete(event) {
    console.log("colors have loaded");
    let colorData = JSON.parse(event.target.responseText);
    console.log("color Data", colorData);
    showData(colorData);
};

function showData(taco){
    let colorDiv = document.getElementById("all-my-colors");
    let colorData = '';
    for(let item in taco){
        let colorItem = taco[item];
        colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`
    };
    colorDiv.innerHTML = colorData;
    console.log("The colors are done", Date.now() - startTime);
};

function dataRequestFailed(event){
    console.log("this data failed to load", event);
};

//open the request with Get
dataRequest.open("GET", "color.json");

//send the request
dataRequest.send();










