var x=document.createElement("INPUT");
x.setAttribute("type","text");
x.setAttribute("placeholder","enter the number");
x.setAttribute("id","number");
document.body.appendChild(x);
x.style.backgroundColor="aqua";
x.style.border="10px solid black";
document.write("<br>");
document.write("<br>");
document.write("<br>");


var y=document.createElement("INPUT")
y.setAttribute("type","text")
y.setAttribute("placeholder","enter the range")
y.setAttribute("id","range")
y.style.backgroundColor="aqua";
y.style.border="10px solid black";
document.body.appendChild(y);
document.write("<br>");
document.write("<br>");
document.write("<br>");
  
  
var z=document.createElement("button")
z.setAttribute("onclick","table()")
z.innerHTML	="click"
z.style.backgroundColor="yellow";
z.style.width="10%";
z.style.padding="10px";
z.style.marginLeft="50%";
document.body.appendChild(z);
m=document.createElement("div")
m.style.marginLeft="30%";
m.style.padding="30px";
document.body.appendChild(m) 


function table() {
	
	var number = document.getElementById("number").value;
	var range= document.getElementById("range").value;
	var  i=1;
while(i<=range)
{
 m.innerHTML  +=i+  "  X  "  +number+  "  =  "  +i*number+ "<br>";
i++;
}
}
