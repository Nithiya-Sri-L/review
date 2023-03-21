var a=parseInt(prompt("Enter a number"));
var b=parseInt(prompt("Enter b number"));
var c=parseInt(prompt("Enter c number"));
var d=parseInt(prompt("Enter d number"));
if (a<b&&a<c&&a<d)
{
	if(b<c&&b<d)
	{
		if(c<d)
		{
			console.log(a,b,c,d)
			
		}
		else
		{
			console.log(a,b,d,c)
		}
	}
	else if(c<b&&c<d)
	{
		if(b<d)
		{
			console.log(a,c,b,d)
		}
		else
		{
			console.log(a,c,d,b)
		}
	}
	else if(d<b&&d<c)
	{
		if(b<c)
		{
			console.log(a,d,b,c)
		}
		else
		{
			console.log(a,d,c,b)
		}
	}
}
else if (b<a&&b<c&&b<d)
{
	if(a<c&&a<d)
	{
		if(c<d)
		{
			console.log(b,a,c,d)
			
		}
		else
		{
			console.log(b,a,d,c)
		}
	}
	else if(c<a&&c<d)
	{
		if(a<d)
		{
			console.log(b,c,a,d)
		}
		else
		{
			console.log(b,c,d,a)
		}
	}
	else if(d<c&&d<a)
	{
		if(c<a)
		{
			console.log(b,d,c,a)
		}
		else
		{
			console.log(b,d,a,c)
		}
	}
}

else if (c<a&&c<b&&c<d)
{
	if(a<b&&a<d)
	{
		if(b<d)
		{
			console.log(c,a,b,d)
			
		}
		else
		{
			console.log(c,a,d,b)
		}
	}
	else if(b<a&&b<d)
	{
		if(a<d)
		{
			console.log(c,b,a,d)
		}
		else
		{
			console.log(c,b,d,a)
		}
	}
	else if(d<a&&d<b)
	{
		if(a<b)
		{
			console.log(c,d,a,b)
		}
		else
		{
			console.log(c,d,b,a)
		}
	}
}

else if (d<a&&d<b&&d<c)
{
	if(a<b&&a<c)
	{
		if(b<c)
		{
			console.log(d,a,b,c)
			
		}
		else
		{
			console.log(d,a,c,b)
		}
	}
	else if(b<a&&b<c)
	{
		if(a<c)
		{
			console.log(d,b,a,c)
		}
		else
		{
			console.log(d,b,c,a)
		}
	}
	else if(c<a&&c<b)
	{
		if(a<b)
		{
			console.log(d,c,a,b)
		}
		else
		{
			console.log(d,c,b,a)
		}
	}
}

