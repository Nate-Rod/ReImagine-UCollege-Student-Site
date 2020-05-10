//Allows for addition of elements to the DOM using a raw string as an input.
//Very useful for SVGs.
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

//Reads text data from an external (local) file
//and returns the contents as a string.
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send();
}

//example of above two functions in action:
sq_nate = readTextFile("squiggle_nate.txt");
document.getElementById("process").insertAdjacentHTML('beforeend', sq_nate);
