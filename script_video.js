//create a video player object to use in DOM
var player = new videojs('vid1', {
  aspectRatio: '16:9',
  autoplay: false,
  controls: true,
  fill: true,
  preload: 'auto',
  responsive: true,
  sources: [{
    src: 'videos/test.mp4',
    type: 'video/mp4'
  }]
});

$('#v-box').append(player);
