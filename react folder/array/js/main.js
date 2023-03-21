	div=document.createElement("div")
	div.style.marginTop="60px"
	document.body.appendChild(div)



var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","email");
	input1.setAttribute("id","n1");
	document.body.appendChild(input1);
	document.write("<br>");
	document.write("<br>");
	
var input2=document.createElement("INPUT");
	input2.setAttribute("type","text");
	input2.setAttribute("placeholder","pwd");
	input2.setAttribute("id","n2");
	document.body.appendChild(input2);
	document.write("<br>");
	document.write("<br>");
	
	
	var but=document.createElement("INPUT");
		but.setAttribute("type","submit");
		but.setAttribute("onclick","sum()");
		document.body.appendChild(but);
		but.innerHTML="Submit";

	
	
function sum() {
	innerHTML=""
	a=(document.getElementById("n1").value);
	b=(document.getElementById("n2").value);
	div.innerHTML+=`<li>${a}</li>`+`<li>${b}</li>`
	
	document.getElementById("n1").value=" ";
	document.getElementById("n2").value=" ";

	
	d=document.createElement("Button");
	d.setAttribute("onclick","delt()");
	d.style.marginLeft="10px";
	document.body.appendChild(d);
	d.innerHTML="Delete";
	
	clk1=document.createElement("Button");
	clk1.setAttribute("onclick","Edit()");
	clk1.style.marginLeft="10px";
	document.body.appendChild(clk1);
	clk1.innerHTML="Edit";
	
}

function Edit(){
	
	a=(document.getElementById("n1").value);
	b=(document.getElementById("n2").value);
	div.innerHTML=`<li>${a}</li>`+`<li>${b}}</li>`
	
}

function delt() {
	div.innerHTML=null
}