// var obj={
//     name:"nithiyam",
// };
// function getName(a,b){

//     console.log(this,a,b);
// }
// getName.call(obj, 6, 7);      //,seperator
// getName.apply(obj,[5,8]);     //[]seperator //rendumey function cl pannum    no need to cl the function
// bind method
var obj={
    name:"nithi-m",
};
function getName(m,n){

    console.log(this.name,m,n);
}
var fun=getName.bind(obj,8,10);      //arguments , la kodukalam  its need to cl th function 
fun();    
