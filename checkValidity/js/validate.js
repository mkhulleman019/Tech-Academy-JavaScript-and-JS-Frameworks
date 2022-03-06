function validateForm(){
    var number3 = document.getElementById("number3");
    if(!number3.checkValidity()){
        document.getElementById("validMessage").innerHTML = 
        number3.validationMessage;   
    } else {
        document.getElementById("validMessage").innerHTML = 
        "Input Okay";
    }
}