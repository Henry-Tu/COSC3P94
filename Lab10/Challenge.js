function addition(){
  var num1;
  var num2;
  var sum;
  num1 = Number(document.getElementById("value1").value);
  num2 = Number(document.getElementById("value2").value);
  sum = num1 + num2;
  document.getElementById("output").innerHTML = sum;
}
function subtraction(){
  var num1;
  var num2;
  var difference;
  num1 = Number(document.getElementById("value1").value);
  num2 = Number(document.getElementById("value2").value);
  difference = num1 - num2;
  document.getElementById("output").innerHTML = difference;
}
function muliplication(){
  var num1;
  var num2;
  var product;
  num1 = Number(document.getElementById("value1").value);
  num2 = Number(document.getElementById("value2").value);
  product = num1 * num2;
  document.getElementById("output").innerHTML = product;
}
function division(){
  var num1;
  var num2;
  var sum;
  num1 = Number(document.getElementById("value1").value);
  num2 = Number(document.getElementById("value2").value);
  if(num2 == 0){
    quotient = "undefined";
  }else{
    quotient = num1 / num2;
  }
  document.getElementById("output").innerHTML = quotient;
}
