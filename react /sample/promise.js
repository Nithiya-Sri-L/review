function a(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("a");
            reject('errr');
        },2000)
    })
}
a()
.then(function(res){
   console.log("success",res);
})
.catch(function(err){
    console.log("err",err);
});
