var date;
var cYear;
var age;
var bYear;
date = new Date();
cYear = date.getFullYear();
age = prompt("What is your age?");
bYear = cYear - age;
document.getElementById("text").innerHTML = bYear;
