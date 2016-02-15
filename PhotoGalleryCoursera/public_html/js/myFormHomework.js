/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Add the JavaScript here for the function billingFunction().  
 * It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    if (same.checked){
        var nameValue = document.getElementById("shippingName").value;
        var zipValue = document.getElementById("shippingZip").value;
        document.getElementById("billingName").value = nameValue;
        document.getElementById("billingZip").value = zipValue;
    }else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
       }
    }
    
function billingFunctionAgain(){
    if (same.checked){
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    }else{
       billingName.value = "";
       billingZip.value = "";
       }
    }