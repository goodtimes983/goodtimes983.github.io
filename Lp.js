function welcome(){
var c=document.getElementById("box");
var img=document.createElement("img");
c.appendChild(img);
img.src="welcome.png";
c.style.zIndex="1";
var button=document.createElement("button");
c.appendChild(button);
button.innerHTML="Twitter: @LionConscience";
button.style.fontSize="XX-large";
button.style.color="white";
button.style.background="blue";
button.onclick=function(){
window.open("https://twitter.com/lionconscience?lang=en");
 }
img.onclick=function(){
img.remove();
var s="Leslie's Pricing Community is growing.  As it grows, it will ask its followers to gauge the price of items.  These estimations are then grouped into statistics for online shops to better price their items.";
var s2="Leslie assumes that some prices will be too high, and some will be too low.  The average price will be in the middle of the estimations.";
var s3= "*All the data is displayed for the item's seller to analyze.  Below is an example of a generated report.*";
var p=document.createElement("p");
var p2=document.createElement("p");
var p3=document.createElement("p");
c.appendChild(p);
c.appendChild(p2);
c.appendChild(p3);
p2.innerHTML=s2;
p3.innerHTML=s3;
p3.style.fontSize="xx-large";
p.innerHTML=s;
p.style.fontSize="xx-large";
p2.style.fontSize="xx-large";
img2=document.createElement("img");
p3.appendChild(img2);
img2.src="wilks3.png";
//c.style.top=screenHeight+"px";
 }
}

var w=new welcome;