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

img.src=s+".png"; /////////////////makes sure that img has a associated band picture.
this.button.appendChild(img);
img.onerror=function(){img.src="default.png";}
img.style.height=screen.height*0.2;
img.style.width=screen.width*0.2;


img.onclick=function(){

var w=window.open("afm2.html",s);

 }
}



