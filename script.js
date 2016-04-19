var ctx = null;

function loop() {
  if (!this.mov.paused && !this.mov.ended) {
    this.ctx.drawImage(this.mov, 0, 0);
    setTimeout(loop.bind(this), 1000 / 30); // drawing at 30fps
  }
}


$(function() {
  var canvas = document.getElementById('canvas');
  ctx=canvas.getContext('2d');
  var video = document.getElementById('video');

  video.addEventListener('play', function() {
    var drawPack={};
    drawPack.mov=this;
    drawPack.ctx=ctx;
    console.log(drawPack);
    loop.bind(drawPack)();
  }, 0);
});
