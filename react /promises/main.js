// function a(){
//     return new.promise(function(resolve,reject){
//         setTimeout(function())
        
//     })
// }
//object destructuring
// var obj={
//     a:'nithi',
//     b:2,
//     c:true
// }
// const {a,b,c}=obj
//console.log(a,b,c)
//array destructuring
/*var arr=[1,2,3,4]
var a=[...arr]
console.log(a)    //array of element spread panni kodukum
var a={
    va:'nih',
    bh:3
}
var b={...a}
b.va='nithiys';
console.log(a,b);
//shallow copy
var a=[1,2,4,5]
var arr=a;
console.log(arr,a)

//deep copy
var t=[5,7,8,9]
var ty={...t}
console.log(ty,t)*/
//default values
function main(a)
{
    return a+2;
}
v=main(7)
console.log(v)