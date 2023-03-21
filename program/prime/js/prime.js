var num=parseInt(prompt("enter a number"));
flag=true;
for(i=2;i<=num-1;i++){
	if (num%i==0)
	{
		flag=false;
		break;
	}
}
if(flag==true)
{
		alert("prime number")
}		
else
	{
		alert("num is not a prime")
	}