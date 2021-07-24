function welcome(){
var c=document.getElementById("container");
var img=document.createElement("img");
c.appendChild(img);
img.src="welcome.png";
}

w1=new welcome();

function genre(s,a){
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
this.a1= new artist(stringb);



stringb="";
 }

else{
stringb=stringb+stringa.charAt(i);
 }
}
 }
}




g1 = new genre("Rock","Jim,JimBerts,"); //  ***   All genre objects must start with the genre, and all artists in the parenthesis should end with a ","   ***
g2 = new genre("Rap","GarFunk,Turksoncakes,");
g3 = new genre("Hip Hop","back-ave,99 Celsius,");
g4 = new genre("Techno", "lit,noliter,");



function artist(s){

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
//img.alt="default.png";/////////////
img.src=s+".png";
this.button.appendChild(img);
img.onerror=function(){img.src="default.png";}
img.style.height=screen.height*0.2;
img.style.width=screen.width*0.2;


img.onclick=function(){
window.open("afm2.html");//////////////,"_self"
var r1=new relay(s);/////////////
 }
}

function relay(s){
this.r=s
var log=document.getElementById("log");
var button=document.createElement("button");
log.appendChild(button);
button.innerHTML=this.r;
button.style.display="none";
}

function policy(){
var img=document.createElement("img");
img.src="policy.png";
var c= document.getElementById("container");
c.appendChild(img);
img.width=screen.width*0.35;
img.height=screen.height*0.25;
//c.style.top=screen.height*0.75+"px";
var button1=document.createElement("button");
button1.innerHTML="Opt In";
button1.style.fontSize="large";
button1.style.background="green";
c.appendChild(button1);
button1.onclick=function(){

cookie1();

img.remove();
button1.remove();
button2.remove();
 }
var button2=document.createElement("button");
button2.innerHTML="Opt Out";
button2.style.fontSize="large";
button2.style.background="red";
c.appendChild(button2);
button2.onclick=function(){
img.remove();
button1.remove();
button2.remove();
 }
}

policy();

function cookie1(){

document.cookie = "username=" +r1.r+"; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/";
 
}

