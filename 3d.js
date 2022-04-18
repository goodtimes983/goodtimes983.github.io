var video = document.createElement('video');
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.style.width = '200px';
video.style.height = '200px';

/* Setting up the constraint */
var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
  audio: false,
  video: {
   facingMode: facingMode
  }
};

/* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  video.srcObject = stream;
});

//var video = document.getElementById('myVideo');
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

/*function welcome(){
var c=document.getElementById("container");
var b=document.getElementById("box");
var img=document.createElement("img");
b.appendChild(img);
img.src="woman.png";
var b2=document.getElementById("table");
var img2=document.createElement("img");
b2.appendChild(img2);
img2.src="boy2.png";
}

welcome();

*/