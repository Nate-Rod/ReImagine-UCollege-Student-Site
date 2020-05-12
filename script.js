//Allows for addition of SVGs to the DOM. Requires an ID'd element.
function loadSVG(id, file){
  xhr = new XMLHttpRequest();
  xhr.open("GET",file,true);
  // Following line is just to be on the safe side;
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = function(e) {
    // You might also want to check for xhr.readyState/xhr.status here.
    document.getElementById(id)
      .appendChild(xhr.responseXML.documentElement);
    }
  xhr.send("");
}

loadSVG("svgs-main","images/squiggles_for_everyone.svg");

ScrollReveal().reveal('.container', { delay: 700, scale: 0.95});
ScrollReveal().reveal('.load-hidden', { delay: 0, scale: 1});
ScrollReveal().reveal('.svgs-main', { delay: 0, scale: 1});
ScrollReveal().reveal('.images/squiggles_for_everyone.svg', { delay: 0, scale: 1});


const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

// //background change animation  https://www.samsung.com/sec/smartphones/galaxy-note9/
// window.addEventListener('scroll', () => {
//   let y = 1 + (window.scrollY || window.pageYOffset) / 150
//   y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//   const [r, g, b] = [red*y, green*y, blue*y].map(Math.round)
//   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })

//Place everything that requires all the DOM elements to be fully loaded here.
document.addEventListener("DOMContentLoaded", function() {
      // - Code to execute when all DOM content is loaded.
      //Accepts an ID for a text element and replaces the contents of the
      //element with a new string detailed by newString.
      function changeText(elementToChange, newString){
        document.getElementById(elementToChange).innerHTML = newString;
      };

      console.log(document.getElementById('svgs-main').childNodes)
      var allGs = document.getElementsByTagName('g');
      var firstG = allGs[0];
      var firstChild = firstG.childNodes[0];
      console.log(allGs)
      console.log(firstG)
      console.log(firstChild)
});
