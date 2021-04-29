function welcome(){
var c=document.getElementById("container");
this.img=document.createElement("img");
this.img.src="welcomedaniel.png";
c.appendChild(this.img);
this.img.style.height=screen.height;
this.img.style.width=screen.width;
}

w1=new welcome;

function cookie1(){

var d=new Date();
var t=d.getTime();
alert(t);

alert(document.cookie);

if(document.cookie==""){
document.cookie = "username=" +t+"; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/";
 }
else{
var str=document.cookie;
var res = str.slice(9);
var num=parseInt(res);
if(t>=num+60000){
w1.img="welcomedaniel2.png";
  }
 }

}

cookie1();
