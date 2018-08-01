$('p').on("click", function getIt() {
    alert('Hey!');
  });


$('.tasty').on("load", function frameIt() {
  
});

$("#typing").on("keydown", function pressIt(key) {
  if (key.which == 71) {
    alert("G was pressed"); 
  }
});

$('form').on("submit", function submitIt() {
if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
    return;}
});


$(document).ready(function(){

getIt(); 
frameIt();
pressIt();
submitIt();

});
