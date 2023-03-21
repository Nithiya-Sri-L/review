function neg(a){
	b=[]
	for(i=0;i<a.length;i++){
		if(a[i]<0){
			c=a[i]*(-1)
			b.push(c)
		}
	}
	return (b);
}
d=[-1,2,-5,4,-6,-8]
m=neg(d);
console.log(m);