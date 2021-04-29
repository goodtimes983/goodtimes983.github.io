function welcome(){
var c=document.getElementById("container");
var img=document.createElement("img");
img.src="welcome.png";
c.appendChild(img);
img.style.height=screen.height;
img.style.width=screen.width;
}

w1=new welcome;

function cookie1(){

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
alert(document.cookie);

}

cookie1();
