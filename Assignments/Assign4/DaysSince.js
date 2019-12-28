// Set the date we're counting  to
var countDownDate = new Date("Dec 20, 2019 15:37:25").getTime();

// Interval to update everysecond
var interval = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days ;
}, 1000);
