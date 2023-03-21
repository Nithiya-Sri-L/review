var arr=[28,10,14,26,3]
const res=arr.map(function(val,index){   
    return val-2;

});
console.log('res',res)
var arr=[28,10,14,26,3]
const res1=arr.filter(function(val,index){   
    return val>20;

});
console.log('res1',res1)           //boolean return
var arr=[28,10,14,26,3]
const res2=arr.every(function(val,index) {   
    return val>20;

});
console.log('res2',res2)

var arr=[28,10,14,26,3]     //boolean return
const res3=arr.some(function(val,index) {   
    return val>20;

});
console.log('res3',res3)
var arr=[28,10,14,26,3]
const res4=arr.find(function(val,index){   //value return otherwise undefined
    return val==3;   //>20 one condition check                           
 
});
console.log('res4',res4)
var arr=[28,10,14,26,3]
const sum=arr.reduce(function(acc,c){   
    return acc*c;

},3);                      //initial value ennavnalum pass panniklam
console.log("sum",sum)