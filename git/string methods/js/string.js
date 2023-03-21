//string methods
/*var a="she is an angel"; // length
len=a.length;
console.log(len)
  //replace
result=a.replace('a','n')
console.log(result)
//indexof
var c=["a","e","h","n"]
var index=c.indexOf('n')
console.log(index)*/
//startswith  
/*var m="it id return boolean values"          //returns boolean
// var res=m.startsWith('id')
// console.log(res)
//endswith
var res1=m.endsWith('values')
console.log(res1)
//to upper case
var s="nithiya is cute"
res2=s.toUpperCase();
console.log(res2);
//TOLOWER
var msg="SHE IS GARGEOUS";
 lower=msg.toLowerCase();
console.log(lower)
 //includes
 a=["a","n","m","o","s"]
var inc=a.includes('o')  //boolean
 console.log(inc);
// repeat
n='nith iya'
res=n.repeat(4);
 document.write(res+" <br>")
index1=n.charCodeAt(4);
console.log(index1);    //indexof and charAt is difference
 //substring
 res=n.substring(1,5);   //0 to within the value
 console.log(res);
 //padstart
var padstart=n.padStart(14,"n");
 console.log(padstart)
var padend=n.padEnd(14,"a");
 console.log(padend)*/
//slice
// let a="she is an amazing";
//  c=a.slice(3,7);
//  console.log(c);
 //trim
// res1=a.trim();
//  console.log(res1);  //removing white space
//split
/*a="she is so pretty";
res=a.split(" ")
console.log(res)  //array output
//concat
str=a.concat(" she is beauty")
console.log(str);
//replaceall
// var msg="ball bat"
// str=msg.replaceAll('b','c')//replace entire string and replace it
// console.log(str);
//locale compare
val='n'.localeCompare('n');  //if boths string same 0
console.log(val);         //m before n 1 otherwise -1

  //match
const msg="javascript is a programming language.";
const exp='is';
res=msg.match(exp);
console.log(res);*/
                     //index return pannum


var a="hello india"     //start,length
c=a.substr(3,5)
 console.log(c)
c=a.substring(3,5)    //0 index h eduthukum
console.log(c)

c=a.slice(-8,5)
 console.log(c)

c=a.charAt(5)
 console.log(c)   //display the char of the string


 console.log(a.charCodeAt(10));
 h=a.search("o")
console.log(h)   //otherwise 0



