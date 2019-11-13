function addition(){
  var num1;
  var num2;
  var sum;
  num1 = Number(document.getElementById("value1").value);
  num2 = Number(document.getElementById("value2").value);
  sum = num1 + num2;
  document.getElementById("output").innerHTML = sum;
}
