/*Write and execute code that includes the new XMLHttpRequest() method.*/
function loadDoc(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById("demo").innerHTML = this. responseText;
        }
        xhttp.open("GET", "./ajax_info.txt");
        xhttp.send();
}