const ele = (
  <>
  <h1>welcome sunday </h1>
  <h6>welcome sunday </h6>  
  <h4>welcome sunday </h4>
</>
);
  console.log("ele",ele);
  
  
  //element ah variable la store panni dom la render pandrom
  var title="react js"     //text varavailkanumn element render pannanum
  var arr=["aaa","mmm","nnn"]           
  const ele=(
    <div>
  <h1 style={{color:"red",fontSize:"16px",}}className="asdas">welcome
  {title}          {4+6}    {true?"true":"false"}                                                       
  </h1>  
  {arr.map((item,index)=>(
    <h1 key={index}>{item}</h1>
  ))}
  <h2>welcome</h2>      
   </div>
   );              
  console.log("ele",ele);
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(ele);
  
  //function component
  function Main(){
    return <h1>function component <Second /></h1>
  }
  function Second(){
    return <div>Second component<Third/></div>
  }

  function Third(){
    return <div>Third component</div>
  }
  
  
  
  
  