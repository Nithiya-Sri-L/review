input1=document.createElement("input")
input1.setAttribute("type","text");
input1.setAttribute("id","nithu");
input1.classList.add("box1");
document.body.appendChild(input1);
document.write("<br>","<br>")




document.body.style.textAlign="center";
document.body.style.marginTop="100px";
document.body.style.backgroundColor="DodgerBlue";

button1=document.createElement("button");
button1.setAttribute("onclick","check()");
button1.innerText="check day";
button1.classList.add("box");
document.body.appendChild(button1);




function check(){
var num=document.getElementById("nithu").value;
	date=new Date(num)
	
	c=date.getDay()
	
if (c==0||c==6)
{
   document.write("its is a weekEnd ")
}
else
{
	document.write("Its a workingDay");
}
}

