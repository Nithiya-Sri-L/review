//callback
function a(callback){
    setTimeout(function(){
        console.log("a");
        callback();
    },3000);
}
function b(){
    setTimeout(function(){
        console.log("b");
    },2000);
}
a(b);

