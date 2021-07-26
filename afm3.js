function welcome(){
var c=document.getElementById("container");
var img=document.createElement("img");
c.appendChild(img);
img.src="welcome.png";

var button=document.createElement("button");
button.style.fontSize="xx-large";
button.style.background="purple";
button.innerHTML="HOME";
c.appendChild(button);
button.style.fontFamily="impact";
button.onclick=function(){
window.open("afm.html","_self");
 }
}

w1=new welcome();

function albums(s,a){

window.opener.close();


if(window.name!=s){
return;
}

var box=document.getElementById("box");
box.style.top=100+"px";
box.style.left=700+"px";
this.button=document.createElement("button");
box.appendChild(this.button);
this.button.innerHTML=s;
this.button.style.fontSize="xx-large";
this.button.style.background="pink";
this.button.style.fontFamily="impact";
this.button.onclick=function(){

element=document.getElementById("table");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}



stringa=a;
stringb="";
stringc="";
for(i=0;i<stringa.length;i++){
if(stringa.charAt(i)==","){
this.a1= new song(stringb);
stringb="";
 }

else{
stringb=stringb+stringa.charAt(i);
 }
}
 }
}




a1 = new albums("dung","dodoodoo,lol,"); //  ***   All albums objects must start with the album, and all songs in the parenthesis should end with a ","   ***



function song(s){
var box=document.getElementById("table");
box.style.top=100+"px";
box.style.left=800+"px";
this.button=document.createElement("button");
box.appendChild(this.button);
this.button.innerHTML=s;
this.button.style.fontSize="xx-large";
this.button.style.background="LimeGreen";
this.button.style.fontFamily="impact";

var img=document.createElement("img");
img.src=s+".png";
this.button.appendChild(img);
img.onerror=function(){img.src="default.png";}
img.style.height=screen.height*0.2;
img.style.width=screen.width*0.2;


img.onclick=function(){

var aud=document.createElement("audio");
aud.src=s+".mp3";/////only mp3 so far
aud.play();
aud.onerror=function(){img.src="no_audio.png";}

 }
}


