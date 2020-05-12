//Place everything that requires all the DOM elements to be fully loaded here.
document.addEventListener("DOMContentLoaded", function() {
      // - Code to execute when all DOM content is loaded.
      //Accepts an ID for a text element and replaces the contents of the
      //element with a new string detailed by newString.
      function changeText(elementToChange, newString){
        document.getElementById(elementToChange).innerHTML = newString;
      };

      function addScribbleEvents(scribble, newString, defaultString){
        scribble.onmouseenter = changeText("explore", newString);
        scribble.onmouseout = changeText("explore", defaultString);
      }

      defString = "Explore Our Process";

      var redS = document.querySelector("#sq-all-red");
      var blueS = document.querySelector("#sq-all-blue");
      blueS.onmouseenter = changeText("explore", defString+": Carrie");
      blueS.onmouseout = changeText("explore", defString);
      var yellowS = document.querySelector("#sq-all-yellow");
      var magentaS = document.querySelector("#sq-all-magenta");
      var greenS = document.querySelector("#sq-all-greenS");
      //addScribbleEvents(redS, defString+": Nate", defString);
      //addScribbleEvents(blueS, defString+": Carrie", defString);
      //addScribbleEvents(yellowS, defString+": Victoria Grace", defString);
      //addScribbleEvents(magentaS, defString+": Anya", defString);
      //addScribbleEvents(greenS, defString+": Jane", defString);

  });
