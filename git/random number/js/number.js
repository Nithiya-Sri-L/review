button1=document.createElement("button");
button1.setAttribute("onclick","random(0,10)");
button1.style.backgroundColor="lightblue";
button1.innerText="CLICK";
document.body.appendChild(button1);


function random(a,b)
{
  function randomValue() 
  {
    return Math.floor(Math.random()*10);
  }
}