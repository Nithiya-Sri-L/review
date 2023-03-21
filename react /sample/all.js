// function a(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("a");
//             resolve('a');
//         },4000);
//     });
// }
// function b(param){
//     console.log('param',param);
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//        reject('b');
//         },2000)
//     })
// }
// Promise.all([a(),b()])
// .then(function(res){
//     console.log("res",res);
// })
// .catch(function(err){
//     console.log("err",err)
// });
//@ ts-check
function main (arr){
    if(orr.length){
        console.log("if");
    }
}
main([1,2,3]);