$(document) .ready(function(){
    $("#hide") .click(function(){
        $("p") .hide();
    });
$("#show").click(function(){

  $("p") .show();
});
});

//slide effect ....

$(document).ready(function(){
  $(".flip").dblclick(function(){
    $(".slider").css({"display": "block", "background-color":"green"});
  });
  $(".flip").click(function(){
    $(".slider").css({"display": "none"});
  });
});


//fullscreen nav

function openNav() {
document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}



  $(document).ready(function(){
$(".menu_toggle"). on("click", function(){
  $("nav ul").toggleClass("showing");
});
});
$(window).on("scroll",function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  }else{
    $('nav').removeClass('black')}

});


//.... to top button...
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//....
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByClassName("wrapper").style.display = "block";
}
//...when "order now" clicked by the client.. redirect the user to log in before taken to item site...
function myFunctionTwo(){
  document.getElementById("order").style.background="blue";
 
}
