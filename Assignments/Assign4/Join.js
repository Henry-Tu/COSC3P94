var name;
var planet;
var person;
var personJSON;
var data;
function loadData(){
  if(localStorage.length != 0){
    return  true;
  }else{
    return  false;
  }
}
name = null;
planet = null;
listed = loadData();
if(listed){
  name = localStorage.data;
  document.getElementById("box").innerHTML = "Hello, " + name  +" You have already signed up";
}
else{
function join(){
  name = document.getElementById("value1").value;
  planet = document.getElementById("value2").value
  person = {"name":name , "planet":planet};
  personJSON = JSON.stringify(person);
  localStorage.setItem("data",personJSON);
  document.getElementById("box").innerHTML = "Thank you " + name + " of " + planet +" for signing up";
}
}
