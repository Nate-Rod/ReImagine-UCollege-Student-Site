//video handler functions
function pauseVideo(event){
  // `this` is the player in this context
  this.pause();
};

//"constructor" method to build a video given an SRC and an ID
function buildVideo(vidID, vidSRC, posterURL){
  return new videojs(vidID, {
    aspectRatio: '16:9',
    autoplay: false,
    controls: true,
    fill: true,
    poster: posterURL,
    preload: 'auto',
    responsive: true,
    sources: [{
      src: vidSRC,
      type: 'video/mp4'
    }]
  });
}

//create a video player object to use in DOM
$('#v-box-phase-1').append(
  buildVideo('vid1', 'videos/phase1_MOV.mp4', 'videos/thumbnails/01.png')
);
$('#v-box-phase-2').append(
  buildVideo('vid2', 'videos/phase2_MOV_1.mp4', 'videos/thumbnails/02.png')
);
$('#v-box-phase-3').append(
  buildVideo('vid3', 'videos/phase3_MOV_1.mp4', 'videos/thumbnails/03.png')
);
$('#v-box-phase-4').append(
  buildVideo('vid4', 'videos/phase4_MOV_1.mp4', 'videos/thumbnails/04.png')
);
