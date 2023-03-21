var div=document.createElement("div");
document.body.appendChild(div);
div.style.backgroundColor="gray";


var input1=document.createElement("input");
div.appendChild(input1);
input1.setAttribute("id","nithi");
input1.setAttribute("placeholder","email");
input1.style.backgroundColor="skyblue";
input1.style.padding="15px";
input1.style.width="10%";

var input2=document.createElement("input");
div.appendChild(input2);
input2.setAttribute("id","nathi");
input2.setAttribute("placeholder","pasword");
input2.style.backgroundColor="skyblue";
input2.style.padding="15px";
 

var but=document.createElement("button");
div.appendChild(but);
but.innerHTML="Submit";
but.onclick=function()
{
	x=document.getElementById("nithi").value;
	y=document.getElementById("nathi").value;

	var email1=document.createElement("p");
	div.appendChild(email1);
	email1.innerHTML=x;
	
	var pswd1=document.createElement("p");
	pswd1.innerHTML=y;
	div.appendChild(pswd1);
	
	
	var but1=document.createElement("button");
	
	but1.innerHTML="Edit";
	div.appendChild(but1);
	but1.onclick=function()
	{
		a=document.getElementById("nithi").value;
		b=document.getElementById("nathi").value;
	
		email1.innerHTML=a;
		pswd2.innerHTML=b;
	
	}
	var but2=document.createElement("button");
	but2.innerHTML="Delete";
	div.appendChild(but2);
	but2.onclick=function()
	{
		email1.innerHTML=" ";
		pswd1.innerHTML=" ";
	
	}
}