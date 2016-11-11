var testDiv = document.createElement('div');
var t = document.createTextNode("hello");
testDiv.id = "app";
testDiv.appendChild(t);

document.getElementById = function(element){
  switch(element) {
    case "app":
      return testDiv;
  }
}
