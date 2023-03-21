//concat - merge two or more arrays
/*var x = [1,2,3];
var y = [4,5,6];
var z = [4,5,6];
b=x.concat(y,z);
console.log(b);

//every - it will return true only if the condition satisfy
let age = [23,45,78,13,29]; 
var x = age.every(function(value)
{
	return value>=10
});
console.log(x);


//fill - it fills specifiefd element in a array with a value
var a= ['e','r','g','m','a'] //value,start,end
var b = a.fill("d",1,4)
console.log(b);*/




//filter - it will check the array and it will give what we wanted
/*let a = [23,45,78,13,29];
var x = a.filter(function(value)
{
	return value>=25       //length reduce
});
console.log(x);


//find - return the value of first element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let even = num.find(function(value)
{
	return value%2==0
});
console.log(even)  //value return 


//findIndex - return the index value of first element that passes the test
var num = [11,17,12,3,4,5,6,7,8,9];
let e = num.findIndex(function(value)
{
	return value %2==0
});
console.log(e)


//findLast - return the value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let no = num.findLast(function(value)
{
	return value%2==0
});
console.log(no)


//findLastIndex - return the index value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,39,9];
let s = num.findLastIndex(function(value)
{
	return value%2==0
});
console.log(s)


//includes - it return true if an array contain specified element else return false
var t = ["aee","bee","cee","dee","eee"]; //value,start
var r = t.includes("ni")
console.log(r);     


//indexOf - returns the position of a specified value in an array.
var o = ['cat','dog','goat','dog','tiger','dog']; //item,start
var p = o.indexOf("dog",0);
console.log(p);


//join - returns an array as a string. //seperator is optional
var b = ['cat','dog','goat','lion','tiger'];
var v = b.join(" nithi "); 
console.log(v);
 
//map - new array from calling a function for every array element. 
var k = [1,2,3,4,5,6,7];
var h = k.map(function(value)
{
	return value/5;
});
console.log(h);


//push - add one or more element at the end of the array and return length
var m = [1,2,3,4,5,8];
var u = m.push(9); // m.push(9)
console.log(u);  // insert last


//pop - remove the last element frm array and return the removed element
var z = [1,2,3,4,5,8];
var u = z.pop(); 
console.log(u);


//shift - method removes the first item of an array and return the removed element
var a = ["cat","goat","zebra","donkey","buffaloo"];
var b = a.shift()
console.log(b)


//unshift - add one or more element at the begining of the array and return length
var ao= ["cat","goat","zebra","donkey","buffaloo"];
b = ao.unshift("camel")
console.log(b)//length


//reduce - 
var s = [9,2,5,6,8];
var total = s.reduce(function(acc,currentVal)
{
	return acc+currentVal;
	
})
console.log(total)


//reverse - it reverse the order of the element of an array
var gg = [66,45,93,78,34];
var hh = gg.reverse()
console.log(hh);


//slice - return selected element in an array as a new array
var pp = ['cat','dog','goat','lion','tiger']; //start,end
var tt = pp.slice(2)
var dd = pp.slice(1,3)
console.log(tt);
console.log(dd);*/


//splice - adds and/or removes array elements. 
var jj = ["carrot","tomato","beetroot","raddish","onion"]; //index,howmany,item1...itemn
var kk =  jj.splice(3,0,"brinjal")     //replace
console.log(jj)


var kl = ["carrot","tomato","beetroot","raddish","onion"];
lk = kl.splice(2,2)
console.log(lk)


//sort - sorts the elements of an array.
/*var rr = [21,38,36,0,41];
var uu = rr.sort()
console.log(uu);


//some - atleast one element satisfy the condition it will return true
let ax = [23,45,78,13,29];
var xa = ax.some(function(value)
{
	return value>=25
});
console.log(xa);*/