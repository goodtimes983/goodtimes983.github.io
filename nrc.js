function welcome(){
var c=document.getElementById("container");
var img=document.createElement("img");
img.src="NRC_welcome.png"
c.appendChild(img);
}


function mobile(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 alert("This site is not yet available on a mobile device.");
 }
else{welcome();}
}


mobile();
