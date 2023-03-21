var a=document.createElement("INPUT");
	a.setAttribute("type","text");
	a.setAttribute("placeholder","Enter the colour:");
	a.setAttribute("id","nithu");
	a.style.textAlign="center";
	a.style.height="50px";
	a.style.width="100px";
	document.body.appendChild(a);
	document.write('<br/>','<br/>','<br>');
	

	document.body.style.textAlign="center";
	document.body.style.marginTop="100px";
	document.body.style.backgroundColor="leghtGray";

    btn=document.createElement("button")
    btn.setAttribute("onclick","random()")
	btn.style.height="30px";
	btn.style.width="70px";
    btn.innerHTML="click clr";
    document.body.appendChild(btn);
	


function random()
{
	var m=document.getElementById("nithu").value
	document.getElementById("nithu").style.color=m;	
        
}