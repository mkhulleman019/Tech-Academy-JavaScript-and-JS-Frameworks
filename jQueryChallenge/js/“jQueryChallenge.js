/*
Write and execute code that utilizes the following jQuery:
element selector
#id selector
.class selector
$(“ul li:first-child”) selector*/
$(document).ready(function(){
    $("button").click(function(){
        $("h1").hide();
        $("#hideP").hide();
        $("ul li:first-child").hide();
    });
  
/*$(document).ready() method
click() method
hover() method
blur() method*/
    $("#toggleBtn").click(function(){
        $("#pToggle").toggle();
    });

    $("#hoverBtn").hover(function(){
        alert("You hovered over that paragraph!");
    });

    $("#inputBlur").blur(function(){
        $(this).css("background-color","gray");
    });

/*Write and execute code that utilizes the following jQuery:
hide() method
show() method
toggle() method*/ 
    $("#showP").hide();
        $("#showBtn").click(function(){
            $("#showP").show();
        });
    
    $("#pHideMethod").click(function(){
        $("#pHideMethod").hide();
    });

    $("#btnToggleMethod").click(function(){
        $("#pToggleMethod").toggle();
    });

    /*Write and execute code that utilizes the following jQuery:
    fadeOut() method
    jQuery slideDown()
    animate() method
    stop() method
    a callback functions
    method chaining*/
    $("#fadeBtn").click(function(){
        $("#fadeP").fadeOut("slow");
    });


    $("#slideP").hide();
    $("#slideBtn").click(function(){
        $("#slideP").slideDown("fast");
    });


    $("#animateBtn").click(function(){
        $("div").animate({left: '800px'});
    });


    $("#slideDownP").click(function(){
        $("#stopP").slideDown(3000);
    });
    $("#stopBtn").click(function(){
        $("#stopP").stop();
    });


    $("#callbackBtn").click(function(){
        $("#callbackP").hide();
        alert("Now you don't!")
    });


    $("#chainingBtn").click(function(){
        $("#chainingP").slideUp(2000)
        .slideDown(2000);
    });


    /*Write and execute code that utilizes the following jQuery:
    text() method
    attr() method*/
    $("#textBtn").click(function(){
        alert("Text: " + $("#textP").text());
    });


    $("#attrBtn").click(function(){
        $("#mhd").attr("href", "https://github.com/mkhulleman019")
    })
});


