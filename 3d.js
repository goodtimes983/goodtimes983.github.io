window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
//alert(gamma);
  // Do stuff with the new orientation data
}

var c=document.getElementById("container");
var video = document.createElement('video');
c.appendChild(video);
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.style.width = screen.height;
video.style.height = screen.height;

/* Setting up the constraint */
var facingMode = "environment"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
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



///////////////////////////////////////////////geo


var x = document.getElementById("demo");
function getLocation() {

var img1=document.createElement("img");
var c=document.getElementById("box");
c.appendChild(img1);
img1.src="boy2.png";


  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

checker();
/*if(x.innerHTML = "Latitude: " + 40.7154518 +"<br>Longitude: " + -73.7919103){
img1.height=screen.height;
img1.width=screen.height;

}*/

//if{///should be else
function checker(){
if(position.coords.latitude==Math.abs(position.coords.latitude)&&position.coords.longitude==-1*Math.abs(position.coords.longitude)){
var lat=Math.abs(position.coords.latitude)-40.7154518;
var long=Math.abs(position.coords.longitude)-73.7919103;
var displacement=Math.sqrt(Math.pow(long,2)+Math.pow(lat,2));
//alert(displacement);
img1.height=screen.height/((1000*displacement)+1);
img1.width=screen.height/((1000*displacement)+1);
}
}
//}



setInterval(showPosition(position),1000);
 }
}
