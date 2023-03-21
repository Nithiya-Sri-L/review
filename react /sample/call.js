function a(callback,c2,c3){
    setTimeout(function(){
        console.log('a');          //callback within callback
        callback(c2,c3);
    },3000)  
}
function b(c2,c3){
    setTimeout(function(){
        console.log('b');
        c2(c3);
    },2000)
}
function d(c3){
    setTimeout(function(){
        console.log('d');
        c3();
    },5000)
}

function c(){
    setTimeout(function(){
        console.log('c');
    },2000)
}
a(b,d,c);


// function a(call){
//     setTimeout(function(){
//         console.log('a');          
//         call();
//     },3000)
// }
// function b(){
//     setTimeout(function(){
//         console.log('b');          
//     },2000)
// }
// a(b);
function a(){
    setTimeout(function(){
        console.log('a');          

    },2000)
}
function b(call){
    setTimeout(function(){
        console.log('b');   
        call();       
    },4000)
}
b(a);