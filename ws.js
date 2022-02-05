//https://unsplash.com/photos/oHfAs5iVLwA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink


function stopwatch101 (){
var b = document.createElement("div");
b.style.position="absolute";
var img= document.createElement("img");
img.src= "digital.jpg";
img.height=screen.height*0.5;
document.body.appendChild(b);
b.appendChild(img);
b.style.top=(screen.height*0.25)+"px";
b.style.left=(0.25*screen.width)+"px";

var n=5;
var b2 = document.createElement("div");
b2.style.position="absolute";
document.body.appendChild(b2);
var but=document.createElement("button");
b2.appendChild(but);

but.style.height=screen.height*0.334;
//but.style.width=img.width;
but.style.background="black";
but.style.color="yellow";
but.style.border="none";
but.innerHTML=n;
but.style.fontSize=screen.height*0.1;
b2.style.top=(screen.height*0.25)+"px";
b2.style.left=((0.25+0.015)*screen.width)+"px";

var si=setInterval(function(){but.innerHTML=n;n=n-1;if(n==-2){clearInterval(si);document.onload=but.remove();document.onload=img.remove();}},1000);


}

stopwatch101();

document.onkeydown = function (e) {
        return false;
}

document.addEventListener('contextmenu', event => event.preventDefault());
