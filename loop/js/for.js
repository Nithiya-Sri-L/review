a=[1,24,26,46,73,8,43,92,65,82,100,48];
odd=[]
even=[]
for (i=0;i<=a.length-1;i=i+2){
	odd.push(a[i])
}
for (i=1;i<=a.length-1;i=i+2){
	even.push(a[i])
}
x=odd.();
y=x.concat.(even);
console.log(x)

