function board(){
var c=document.getElementById("container");
var img=document.createElement("img");
img.src="board.png";
c.appendChild(img);
img.height=screen.width;
img.width=screen.width;
}

board();

function props(){
var c=document.getElementById("container");

var img1=document.createElement("img");
var img2=document.createElement("img");
var img3=document.createElement("img");
var img4=document.createElement("img");
var img5=document.createElement("img");
var img6=document.createElement("img");
var img7=document.createElement("img");
var img8=document.createElement("img");
var img9=document.createElement("img");
var img10=document.createElement("img");
var img11=document.createElement("img");
var img12=document.createElement("img");
var img13=document.createElement("img");
var img14=document.createElement("img");
var img15=document.createElement("img");
var img16=document.createElement("img");
var img17=document.createElement("img");
var img18=document.createElement("img");
var img19=document.createElement("img");
var img20=document.createElement("img");
var img21=document.createElement("img");
var img22=document.createElement("img");
var img23=document.createElement("img");
var img24=document.createElement("img");
var img25=document.createElement("img");
var img26=document.createElement("img");
var img27=document.createElement("img");

img1.src="med"+".png";
img2.src="baltic"+".png";
img3.src="oriental"+".png";
img4.src="vermont"+".png";
img5.src="conn"+".png";
img6.src="reading"+".png";
img7.src="st charles"+".png";
img8.src="electric"+".png";
img9.src="virginia"+".png";
img10.src="states"+".png";
img11.src="penn"+".png";
img12.src="st james"+".png";
img13.src="tenn"+".png";
img14.src="new york"+".png";
img15.src="kentucky"+".png";
img16.src="indiana"+".png";
img17.src="illinois"+".png";
img18.src="bo"+".png";
img19.src="vent"+".png";
img20.src="marvin"+".png";
img21.src="atl"+".png";
img22.src="penn ave"+".png";
img23.src="north carolina"+".png";
img24.src="pacific"+".png";
img25.src="short"+".png";
img26.src="park"+".png";
img27.src="boardwalk"+".png";

var box=document.getElementById("box2");

box.appendChild(img1);
box.appendChild(img2);
box.appendChild(img3);
box.appendChild(img4);
box.appendChild(img5);
box.appendChild(img6);
box.appendChild(img7);
box.appendChild(img8);
box.appendChild(img9);
box.appendChild(img10);
box.appendChild(img11);
box.appendChild(img12);
box.appendChild(img13);
box.appendChild(img14);
box.appendChild(img15);
box.appendChild(img16);
box.appendChild(img17);
box.appendChild(img18);
box.appendChild(img19);
box.appendChild(img20);
box.appendChild(img21);
box.appendChild(img22);
box.appendChild(img23);
box.appendChild(img24);
box.appendChild(img25);
box.appendChild(img26);
box.appendChild(img27);

box.style.top=screen.width+"px";
}

props();

function chest(){


var box=document.getElementById("box3");
var box2=document.getElementById("box4");
box.style.height=0.2*screen.height+"px";//
box.style.top=screen.width+"px";
box2.style.top=box.style.top;
box.style.left=screen.width+"px";
box2.style.top=screen.width*1.2+"px";
box2.style.left=screen.width+"px";
box.style.background="orange";
box2.style.background="yellow";
//
box2.style.height=0.2*screen.height+"px";
box.style.width=0.25*screen.height+"px";
box2.style.width=0.25*screen.height+"px";


box.ondblclick=madlib();


box.onclick=function(){

//box.style.position="sticky";
var b=true;
var x=0;
var y=0;
onmousemove = function(e){x= e.pageX; y= e.pageY}
onmousedown=function(){
var userHasScrolled = false;
window.onscroll = function (e)
{
    userHasScrolled = true;

}
if(b==true&&userHasScrolled==false){
box.style.top=y+"px";
box.style.left=x+"px";
b=false;

}
  }
}

box2.ondblclick=madlib();


box2.onclick=function(){
var x=0;
var y=0;
var b=true;
onmousemove = function(e){x= e.pageX; y= e.pageY}
onmousedown=function(){
var userHasScrolled = false;
window.onscroll = function (e)
{
    userHasScrolled = true;

}
if(b==true&&userHasScrolled==false){
box2.style.top=y+"px";
box2.style.left=x+"px";
b=false;

}
  }
 }
}

chest();

function madlib(){
var noun1="Birds ";
var verb1="jump ";
var adjective1="fast.";

var s=noun1+verb1+adjective1;

alert(s);
}

//madlib();

//onmousemove = function(e){console.log("mouse location:", e.pageX, e.pageY)} 
