//video handler functions
function pauseVideo(event){
  // `this` is the player in this context
  this.pause();
};

//"constructor" method to build a video given an SRC and an ID
function buildVideo(vidID, vidSRC){
  return new videojs(vidID, {
    aspectRatio: '16:9',
    autoplay: false,
    controls: true,
    fill: true,
    preload: 'auto',
    responsive: true,
    sources: [{
      src: vidSRC,
      type: 'video/mp4'
    }]
  });
}

//create a video player object to use in DOM
$('#v-box').append(
  buildVideo('vid1', 'videos/test.mp4')
);
