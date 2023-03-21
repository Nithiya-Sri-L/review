/*main =()=>{
    console.log("arrow")
}*/
// no need return
// main=(...a)=>{
//     console.log(a);
//     return "nith"
// };
// main(3)
// hello=(a,b) =>{
//     return a/b;
//   }
//   c=hello(10,5)
//   console.log(c)
  //this
//   var obj={
//     name:"nithi",
//     normalFun:function(){
//         console.log(this.name);
//     },
//     arrowFun:()=>{
//         console.log(this.name);     //no this key
//     },
//   };
//   obj.normalFun();
//   obj.arrowFun();
  //inside the norm fun this is work in arrow
  var obj={
    name:"nithi",
      const  arrowFun=()=>{
            console.log(this.name);     
        },
      }

  obj.arrowFun();
  