function even(a){
	return if(a%2==0)
	{
		alert("a is even number");
	}
	else
	{
		alert("a is odd number");
	}
}
c=prompt(parseInt("enter a number"));
b=even(c);
console.log(b)
