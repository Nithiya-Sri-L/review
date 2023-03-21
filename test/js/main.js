function unique(){
	b=a.sort()
	c=[]
	for(i=0;i<a.length;i++){
		if(b[i]!=b[i+1]){
			c.push(b )
		}
	}
	return (c);
}
a=[2,4,2,5,3,8,3]
d=unique(a)
console.log(d)


