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

// ScrollReveal Animations
ScrollReveal().reveal('.container', { delay: 400, scale: 0.97});
ScrollReveal().reveal('.load-hidden', { delay: 0, scale: 1});
ScrollReveal().reveal('#svgs-main', { delay: 0, scale: 1});
//Main Page Scroll Reveal
ScrollReveal().reveal('#main-p', { delay: 300, opacity: 0});
ScrollReveal().reveal('#main-one', { delay: 1000, opacity: 0, scale: 0.98});
ScrollReveal().reveal('#main-two', { delay: 600, opacity: 0, scale: 0.98});
//Image Gallery Scroll Reveal
ScrollReveal().reveal('#main-img-one', { delay: 600, opacity: 0});
ScrollReveal().reveal('#main-img-two', { delay: 600, opacity: 0});
ScrollReveal().reveal('#main-quote-three', { delay: 600, opacity: 0});
ScrollReveal().reveal('#main-img-four', { delay: 600, opacity: 0});



const [red, green, blue] = [69, 111, 225];
const section1 = document.querySelector('.section1');

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-container");
    var $bg = $(".main-container");
    var $splash = $(".load-hidden");
    var scrollPos = $splash.outerHeight() - 0.05*$splash.outerHeight();
    var targetPos = $(this).scrollTop();
    $nav.toggleClass('nav-container-scrolled', targetPos > scrollPos);
    $bg.toggleClass('main-container-scrolled', targetPos > scrollPos);
  });
});

//This segment of code toggles the visibility of the
//"image gallery" layer of the webpage.
function focusImage(event){
  console.log("Clicked " + event.data.imgsrc);
};

//First, an eventlistener is added to every <img> element:
var images = document.getElementsByTagName('img');
var srcList = [];
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
    $(images[i]).on("click", {imgsrc: srcList[i]}, focusImage);
};
console.log(srcList);
