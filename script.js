//Allows for addition of elements to the DOM using a raw string as an input.
//Very useful for SVGs.
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

function loadSVG(file){
  xhr = new XMLHttpRequest();
  xhr.open("GET",file,false);
  // Following line is just to be on the safe side;
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = function(e) {
    // You might also want to check for xhr.readyState/xhr.status here.
    document.getElementById("process")
      .appendChild(xhr.responseXML.documentElement);
    }
  xhr.send("");
}

loadSVG("images/squiggle_nate.svg");
