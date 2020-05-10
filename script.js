//Allows for addition of SVGs to the DOM.
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
