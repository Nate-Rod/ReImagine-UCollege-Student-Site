ScrollReveal().reveal('.container', { delay: 700, scale: 0.95});
ScrollReveal().reveal('.load-hidden', { delay: 0, scale: 1});

//Javascript unique to bios should go here and not in the script.js file.
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-container-bio");
    var $splash = $("#bio-splash-nate")
    $nav.toggleClass('scrolled', $(this).scrollTop() > 1.5*$splash.height());
  });
});
