class MyClass{
        constructor() {
            this.name="nithiya";      //variable initialization
        }                               //using this
        getName(){
        console.log(this.name);     //cls inside function
    }
}

// child cls

class MyClass1 extends MyClass{                         //child cls extends from parent cls
    constructor() {
        super();                     //without this key we used to call parent function using  super 
        console.log("nathi",this.name)
    //    this.name="class";      
    }                             
    get(){
        this.getName()                //super key word      //oherwise super we uing suoer in this place used to call the
   // console.log("class",this.name);     
}
}





var obj=new MyClass1();         //keyword
obj.get();