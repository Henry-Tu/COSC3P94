var start;
var startDate;
var clicked;
var clickedDate;
var time;
startDate = new Date();
start = startDate.getTime();

function pushMe(){
  clickedDate = new Date();
  clicked = clickedDate.getTime();
  time =  clicked - start;
  time = time/600;
  alert("You have been on this page for: " + time + " seconds");
}
