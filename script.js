//Allows for addition of SVGs to the DOM.
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


const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

// //background change animation  https://www.samsung.com/sec/smartphones/galaxy-note9/
// window.addEventListener('scroll', () => {
//   let y = 1 + (window.scrollY || window.pageYOffset) / 150
//   y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//   const [r, g, b] = [red*y, green*y, blue*y].map(Math.round)
//   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })
