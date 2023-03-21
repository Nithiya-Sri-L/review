function a(callback,c2,c3){
    setTimeout(function(){
        console.log("a");
        callback(c2,c3);
    },3000);
}
function b(c2,c3){
    setTimeout(function(){
        console.log("b");
    },2000);
}
function c(){
    setTimeout(function(){
        console.log("c");
    },4000);
}
function d(c3){
    setTimeout(function(){
        console.log("d");
    },5000);

