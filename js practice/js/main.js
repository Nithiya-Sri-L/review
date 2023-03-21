// function check(){
// 	box=document.getElementById("n").value;
// 	 document.getElementById("to").innerHTML=box;
// }
//atagname example
function check(){
	a=document.getElementById("mydiv");
	box=a.getElementsByTagName("input")
	data=document.getElementsByTagName("p")
	//3 input example
	/* data[0].innerHTML=box[0].value
	 data[1].innerHTML=box[1].value
	 data[2].innerHTML=box[2].value*/
	//more inputs
	for(i=0;i<box.length;i++)
	{
		data[i].innerHTML=box[i].value;
		console.log(i); 
	}
}