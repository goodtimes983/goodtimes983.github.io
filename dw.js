function welcome(){
var c=document.getElementById("container");
this.img=document.createElement("img");
this.img.src="welcomedaniel3.png";
c.appendChild(this.img);
this.img.style.height=screen.height;
this.img.style.width=screen.width;
}

w1=new welcome;

function cookie1(){

var d=new Date();
var t=d.getTime();
//alert(t);

//alert(document.cookie);

if(document.cookie==""){
document.cookie = "username=" +t+"; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/";
 }
else{
var str=document.cookie;
var res = str.slice(9);
var num=parseInt(res);
if(t>=num+60000){
w1.img.src="triangle.png";
  }
 }

}




function policy(){
var img=document.createElement("img");
img.src="policy.png";
var c= document.getElementById("box");
c.appendChild(img);
img.width=screen.width*0.35;
img.height=screen.height*0.25;
c.style.top=screen.height*0.75+"px";
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
