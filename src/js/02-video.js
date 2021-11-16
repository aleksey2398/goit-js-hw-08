import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const Player_Video = 'videoplayer-current-time';
const onPlay = function (data) {
  const time = JSON.stringify(data.seconds);
  localStorage.setItem(Player_Video, time);
  console.log('played the video!', time);
};
player.on('timeupdate', throttle(onPlay, 1000));
const saveTime = localStorage.getItem(Player_Video);
player
  .setCurrentTime(saveTime)
  .then(function (seconds) {
  
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
    
        break;
      default:
       
        break;
    }
  });
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});