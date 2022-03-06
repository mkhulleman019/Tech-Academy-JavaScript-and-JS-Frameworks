// JavaScript Document
var catFacts = new XMLHttpRequest();
catFacts.open('GET', 'https://app.swaggerhub.com/apis-docs/whiterabbit8/meowfacts/1.0.0', true);
catFacts.responseType = 'text';
catFacts.send();
var cfResponse;

catFacts.onload = function() {
    if(catFacts.status === 200){
        var cfResponse = JSON.parse(catFacts.responseText);
        console.log(cfResponse);

        document.getElementById("catFact").innerHTML = cfResponse[0].data;
    }
}


