// function a(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('a');
//         },4000);
//     });
// }
// function b(param){
//     console.log('param',param);
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//        resolve('b');
//         },2000)           //2mey resolve na without try catch
//     })
// }async function main(){

//         let res=await a();
//         console.log(await b(res));
                                   
// }
// main();
function a(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('a');
        },4000);
    });
}
function b(param){
    console.log('param',param);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
       reject('b');
        },2000)
    })
}async function main(){
try{
        let res=await a();
        console.log(await b(res));
                                   
}catch (err){
    console.log(err);
}
}
main();
