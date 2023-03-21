button1=document.createElement("button");
button1.setAttribute("onclick","random()");
button1.style.backgroundColor="lightblue";
button1.innerText="click me";
document.body.appendChild(button1);


function random()
{
	var randomColor = Math.floor(Math.random()*256);
	document.body.style.backgroundColor = '#' + randomColor;
}