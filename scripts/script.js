const skipButtonElem = document.querySelector('.js-skip-button');
const overlayElem = document.querySelector('.overlay-body');
const overlayReplayButton = document.querySelector('#js-replay-button');

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
};

skipButtonElem.addEventListener('click', () => {
  player.seekTo(39);
  overlayElem.classList.remove('overlay-display');
});

overlayReplayButton.addEventListener('click', () => {
  overlayElem.classList.add('overlay-display');
  player.seekTo(0)
})

