

var cursor = document.querySelectorAll(".cursor");
var open = document.querySelectorAll(".open");


window.addEventListener("mousemove", function(e) {
    cursor[0].style.top = e.pageY + "px";
    cursor[0].style.left = e.pageX + "px";
});


open[0].addEventListener("mouseover", function() {
    cursor[0].classList.add("hover3");
}); 
open[0].addEventListener("mouseleave", function() {
    cursor[0].classList.remove("hover3");
}); 

