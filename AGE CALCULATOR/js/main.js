document.querySelector("#submit").addEventListener("click",function
(){
   const update=function(){
    let dob=document.querySelector("#dob").value,
    day=new Date(dob),
    time=day.getTime(),
    today=new Date(),
    timenow=today.getTime(),
    value=timenow-time,
    sec = Math.floor(value/1000),
    min = Math.floor(value/(1000*60)),
    hour=Math.floor(value/(1000*60*60)),
    days = Math.floor(value/(1000*60*60*24)),
    week = Math.floor(value/(1000*60*60*24*7)),
    month = Math.floor(value/(1000*60*60*24*30.4375)),
    year=Math.floor(value/(1000*60*60*24*365.25)),


    insert=function(x,y){
        document.querySelector(x).innerHTML = y;
    }
    insert("#year",year+"-years");
        insert("#month",month+"-month");
        insert("#week",week+"-week");
        insert("#day",day+"-day");
        insert("#hour",hour+"-hours");
        insert("#min",min +"-Minitues");
        insert("#sec",sec+"-seconds");
   }
    setInterval(update,1000);
})

   


       
        

