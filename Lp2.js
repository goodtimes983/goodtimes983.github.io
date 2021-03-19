function welcome(){
var c=document.getElementById("box");
var img=document.createElement("img");
c.appendChild(img);
img.src="freestyle.png";
c.style.zIndex="1";
var button=document.createElement("button");
c.appendChild(button);
button.innerHTML="twitter: James";
button.style.fontSize="XX-large";
button.style.color="white";
button.style.background="blue";
button.onclick=function(){
window.open("https://twitter.com/guesss52629790?lang=en");
 }
img.onclick=function(){
img.remove();
var aud=document.createElement("audio");
aud.src="not a dick pick.m4a";
aud.play();
 }
}

var w=new welcome;