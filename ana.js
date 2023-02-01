function layout(){
this.c=document.createElement("container");
this.c.style.position="relative";
document.body.appendChild(this.c);
this.b=document.createElement("box");
this.c.appendChild(this.b);
this.b.style.position="absolute";
var a=document.createElement("audio");
a.src="rock inst.mp3";
this.b.onclick=function(){
a.play();
 }
}

var l1=new layout;

function map(){
l1.b.style.background="red";
l1.b.style.height=screen.height*0.1+"px";
l1.b.style.width=screen.height*0.1+"px";

var bc=l1.b.cloneNode(true);
bc.style.background="blue";
l1.b.appendChild(bc);
}

map();