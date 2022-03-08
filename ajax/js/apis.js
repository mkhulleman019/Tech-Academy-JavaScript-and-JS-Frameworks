// JavaScript Document
var catFacts = new XMLHttpRequest();
catFacts.open('GET', 'https://catfact.ninja/fact?max_length=140', true);
catFacts.responseType = 'text';
catFacts.send();
var cfResponse;

catFacts.onload = function() {
    if(catFacts.status === 200){
        var cfResponse = JSON.parse(catFacts.responseText);
        console.log(cfResponse);

        document.getElementById("catFact").innerHTML = cfResponse.fact;
    }
}


