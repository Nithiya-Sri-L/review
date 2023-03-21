function avg(a){
	sum=0
	for(i=0;i<a.length;i++){
		sum=sum+1
		b=sum/a.length
	}
	return (b)
}
c=[2,3,5,10]
d=avg(c)
console.log(d);