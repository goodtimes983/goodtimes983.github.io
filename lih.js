function welcome(){
var c=document.getElementById("container");
var b=document.getElementById("box");

var bd=b.cloneNode(true);
c.appendChild(bd);
var img=document.createElement("img");
img.src="welcome.jpg";
b.appendChild(img);
img.style.height=427*screen.height*0.001+"px";
img.style.width=640*screen.height*0.001+"px";

var bod=document.getElementById("div1");
var b3=document.createElement("p");
var s1="Get A Local Real Estate Broker To Sell Your Home.";
var s2=s1.fontcolor("green");
b3.innerHTML=s2;
bod.appendChild(b3);
b3.style.fontSize="xx-large";
b3.style.top=0+"px";

}



welcome();


function info(){
var c=document.getElementById("container");
var b=document.getElementById("box");

//b.style.top=427*screen.height*0.001+"px";
//b.style.left=640*screen.height*0.001+"px";

var bd=b.cloneNode(true);
c.appendChild(bd);

var a=document.createElement("a");
var linkText = document.createTextNode("Email");
a.style.fontSize=screen.height*0.1+"px";
a.appendChild(linkText);
a.title="Email";


a.href = "mailto:ziva.homes@gmail.com";

//a.href="https://goodtimes983.github.io/";
b.appendChild(a);
//bd.style.top=screen.height*0.6+"px";

////////////////////////////////

var bd2=b.cloneNode(true);
c.appendChild(bd2);

var a2=document.createElement("a");
var linkText2 = document.createTextNode("   Phone   ");
a2.style.fontSize=screen.height*0.1+"px";
a2.appendChild(linkText2);
a2.title="Phone";
a2.href="tel:5167847366";
b.appendChild(a2);
//bd2.style.left=2*a.style.width+"px";
//bd2.style.left=screen.width*0.6+"px";
//bd2.style.top=screen.height*2*0.1+"px";


}

info();

function written(s){

var write=document.createElement("p");
write.style.fontSize="x-large";
write.innerHTML=s;
write.style.width=screen.width+"px";
var b=document.getElementById("box2");
var b2=document.getElementById("box");
b2.appendChild(write);
//b.style.top=screen.height*0.5+"px";
b.style.top=b2.style.top;

}

written("Here at Long Island Homes, we have over 10 years of experience selling homes in our area.");
written("Come see what our personal touch can do for you.");
//written("While some more well known brokerages may sell your home with a less experienced agent,");
//written("we offer the best local real estate brokers.");
//written("Brokers require a higher level of real estate expertise.");
//written("Get a local broker to sell your home.");




//function zil1(){
//var z=document.getElementById("zillow-large-search-box-widget-container");
//z.style.zIndex="999";
//z.style.position="absolute";
//z.style.top=screen.height+"px";
//}

//zil1();

function zil(){
var box=document.getElementById("box")
var box2=document.getElementById("box2");
var box3=document.getElementById("box3");
var z=document.getElementById("div2");
z.style.zIndex="999";
z.style.position="absolute";
//z.style.top=screen.height*2+"px";
box.appendChild(box3);
}

zil();



//https://unsplash.com/photos/178j8tJrNlc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// fix comments as I only use only 1 box now.
// maybe credit picture on a hover.
