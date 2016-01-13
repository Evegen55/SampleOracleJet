/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setDate(){
    //method getElementById UPDATE element which was got by id
    document.getElementById('date').innerHTML=Date();
    }
            
function message(msg){
    document.getElementById('output').innerHTML = msg + " event";
    }
            
function FunctionFromw3schools() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px"; 
    x.style.color = "red";
    }
function closeMe(){
      // Find the element
   		x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
   		//x.style.display="none";
  
      //Option 2: Change the class
   		 x.className="closed";
	}

function openMe(){
      // Find the element
   		x=document.getElementById("demo");
      //Option 1: Change the style attribute directly
   		 //x.style.display="block";
      
      //Option 2: Change the class
   		 x.className="open";
	}
