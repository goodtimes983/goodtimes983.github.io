function welcome(){
var c=document.getElementById("container");
var img=document.createElement("img");
c.appendChild(img);
img.src="welcome.png";
}

w1=new welcome();

function artists(s,a){

s = document.cookie;
s.replace("try_", "");
  


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
this.a1= new album(stringb);
stringb="";
 }

else{
stringb=stringb+stringa.charAt(i);
 }
}
 }
}




a1 = new artists("Jim","dung,chi,"); //  ***   All artist objects must start with the artist, and all albums in the parenthesis should end with a ","   ***
a2 = new artists("GarFunk","poop,plow,");
a3 = new artists("back-ave","fog,oops,");
a4 = new artists("lit","pops,ok,");



function album(s){
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
window.open("afm2.html","_self");//////////////

 }
}


