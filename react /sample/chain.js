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
//         },2000)
//     })
// }
// a()
// .then(b)
// .then(function(res){
//     console.log("res",res);
// })
// .catch(function(err){
//     console.log("err",err)
// });

//one function is an error  go to catch error through
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
}
a()
.then(b)
.then(function(res){
    console.log("res",res);
})
.catch(function(err){
    console.log("err",err)
});