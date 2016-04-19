

var vidCanvas={
  mov:null,
  ctx:null,
  canvas:null,
  loopDraw:function() {
    if (!this.mov.paused && !this.mov.ended) {
      this.ctx.drawImage(this.mov,0,0);


      var data = this.ctx.getImageData(50, 50, 1, 1).data;
      console.log(data);
      setTimeout(this.loopDraw.bind(this), 1000 / 3); // drawing at 30fps
    }
  }

};

$(function() {
  var canvas = document.getElementById('canvas');
  ctx=canvas.getContext('2d');
  var video = document.getElementById('video');

  video.addEventListener('play', function() {
    vidCanvas.mov=this;
    vidCanvas.canvas=canvas;
    vidCanvas.ctx=ctx;

    canvas.width = 200;
    canvas.height = 200;
    console.log(vidCanvas);
    vidCanvas.loopDraw.bind(vidCanvas)();
  }, 0);
});



$(function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
});
