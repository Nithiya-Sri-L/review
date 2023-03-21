function small(a){
	b=a[1]
	d=[]
	for(i=0;i<a.length;i++){
		if(b>a[i]){
			d.push(a[i])
		}
	}
	return d;
}
e=[2,5,8,4]
m=small(e)
console.log(m);