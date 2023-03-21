
s=[4,1,8,3,9]
btn=document.createElement("Button")
btn.setAttribute("onclick","ascend()")
btn.innerHTML="buton"
document.body.appendChild(btn)
bli=document.createElement("li")
bli.innerHTML=s;
document.body.appendChild(bli)
document.write("<br>")


function ascend(){
btn2=document.createElement("button")
btn2.setAttribute("onclick","arr()")
btn2.innerHTML="ascButton"
document.body.appendChild(btn2)


li1=document.createElement("li")
}

function desc(){
s=[4,1,8,3,9]
for(i=0;i<s.length;i++)
{
 for(j=0;j<s.length;j++)
 {
	 if(s[j]<s[j+1]){
		 t=s[j];
		 s[j]=s[j+1]
	    s[j+1]=t
	 }
 }
}
li2=document.createElement("li")

document.body.appendChild(li2);

li2.innerHTML=s+"<br>";
rand=document.createElement("button")
rand.setAttribute("onclick","mix()");
rand.innerHTML="randomNumbers"
document.body.appendChild(rand)
}

function arr(){
s=[4,1,8,3,9]
console.log(s);
for(i=0;i<s.length;i++)
{
 for(j=0;j<s.length;j++)
 {
	 if(s[j]>s[j+1]){
		 t=s[j];
		 s[j]=s[j+1]
	    s[j+1]=t
	 }
 }
}
 li1.innerHTML=s+"<br>";
 document.body.appendChild(li1);
 btn3=document.createElement("button")
 btn3.setAttribute("onclick","desc()")
 btn3.innerHTML="desc"
 document.body.appendChild(btn3)
 
}
function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function mix(){
	mix1=s
	end=[]
	z=mix1.length;
	for(i=0;i<mix1.length;i++){
		index=getRandomNumber(z)
		end.push(mix1[index])
	}
	lsd=document.createElement("li")
    lsd.innerHTML=end
document.body.append(lsd)	
		
		
		
	}