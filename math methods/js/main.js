//1)sum of elemnt
/*var a=[1,3,4,6,7]
sum=0;
for(let i=0;i<a.length;i++)
{
	sum=sum+a[i]
}
console.log(sum)
//2)average
var a=[1,3,4,6,7]
sum=0;
for(let i=0;i<a.length;i++)
{
	sum=sum+a[i]/a.length
}
console.log(sum)


//3)even number passed
var arr=[1,2,6,4,9,3]
function sum(a)
{
	var b=[]
	for (i=0;i<arr.length;i++){
		if(arr[i]%2==0){
			b.push(arr[i]);
			console.log(b)
		}
	}
}
sum(arr)






//4)display odd numbers AND even numbers
var arr=[1,-2,3,-4,5,-6,7]
count=0;
add=0;
for(i=0;i<arr.length;i++){
if (arr[i]>0)
{
	count++;
	//console.log("positive numbers"+count)
}
else if(arr[i]<0){
	add++;
}
}
console.log("positive numbers"+"="+count);
console.log("negative numbers"+add);



	//6_)dublicate elements delete
var a=[2,3,6,5,3,5,8,5,4]
b=a.sort();
console.log(b);
c=[];
for (i=0;i<b.length;i++)
{
		if (a[i]!=a[i+1])
		{
			c.push(a[i])
		console.log(c)
		}

}


//7)count digits
// var arr=[1,2,3,6,8]
// count=0
// for(i=0;i<arr.length;i++)
// {
// 	while(arr[i]!=0)
// 	{
// 		count++
// 	}
// }
// console.log("digits is"+"="+count)

//8)divisible by 3,4,5
a=[600,650,1200,239,15]   //div by 4,5,3
c=[]
count=0
for(i=0;i<a.length;i++)
{
	if((a[i]%4==0) && (a[i]%5==0) && (a[i]%3==0))
		
	{
		c.push(a[i])
		count++
		
	}
	
}

	
console.log("div count=" +count)

//9) delete particular index
n=parseInt(prompt("Enter a index"))   //delete index
b=[1,2,3,4,5,6,7,8]
c=[]
	delete b[n];
	c.push(b)
console.log(c) 
//10)zig zag	
	a=[1,2,3,4,5]   //zigzag
	b=[6,7,8,9,10]
	dot=[]
	for(i=0;i<a.length;i++)
	{
		dot.push(a[i],b[i])
	}
	document.write("zigzag="+dot)
	document.write("<br>")
//9)palindrom
var a=[231,121,987,454]
b=a
c=[]
for(i=0;i<a.length;i++)
{
	rem=0;
	while (a[i]>0){
	rem=(rem*10)+a[i]%10
	a[i]=a[i]/10
}
		if(rem==b[i])
		{
			c.push(a[i]);
			console.log("num is palindrom"+"="+c)
		}
		else{
			console.log(b)
		}

	}



//10)combine 2 arrays
	var a=[231,121,987,454]
	b=[1,3,7,9]
	c=a.concat(b)
	console.log(c)

	//11)even average sum
var b=[1,3,4,6,7]
sum=0;
for(let i=0;i<b.length;i++)
{
	if(b[i]%2==0)
	{
	sum=sum+b[i]/b.length
	avg=sum+b[i]/b.length
	}
}
console.log(even)
console.log(sum)
console.log(avg)


//12)reverse elemnts
a=[22,30,42,5,6,2]
b=[]
for(i=a.length-1;i>=0;i--)
{
	b.push(a[i]);
}
	console.log(b)

//13)merge two array elemnt sorted form
a=[1,5,2,7,4,9,3]
b=[13,76,54,12,10]
c=a.concat(b);
c.sort()
console.log(c);*/

//14)ascending orader
arr=[2,5,1,3,6,9]
temp=0
for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
          if(arr[i] < arr[j]) {
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
       }
   }
   console.log(arr)

//15)descending order

   /*arr=[2,5,1,3,6,9]
   temp=0
   for (let i = 0; i < arr.length; i++) {
          for (let j = i+1; j < arr.length; j++) {
             if(arr[i] >arr[j]) {
                 temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
          }
      }
       console.log(arr)


	16)smallest number
 var array=[20,43,13,25,40]
 s=array[0]
 for(i=0;i<array.length;i++)
 	 {
 		 if(s>array[i]){
 			 s=array[i];
 		 }
 	 }
 console.log(s)

17)largest number
	 var array=[20,43,13,25,40]
 	 s=array[0]
 	 for(i=0;i<array.length;i++)
 		 {
 			 if(s<array[i]){
 				 s=array[i];
 			 }
 		 }
 	 console.log(s)*/




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
	 