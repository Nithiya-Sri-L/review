//...spred  

//[1,2,3]=>1,2,3x
// var obj={
//     a:"b",
//     b:"m"
// }
// var obj1=     {...obj}     //original ah affect pannathu
// obj1.a="n";
// console.log(obj1,obj)           


// var arr=[1,6,8]
// arr1=[...arr]
// arr1[0]=10;
// console.log(arr,arr1)       
//...rest
function main(){
    console.log(arguments);

}
main(4,8,9);
main(3,8,4,2,9);             
//function main(...m){        //individual element ah combine panni array va kodukum so rest
    //console.log(m);

//}
//main(4,8,9);
//main(3,8,4,2,9);