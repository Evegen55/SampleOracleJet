/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function nicknameFunction(){
    if (yesNick.checked){
        nick.style.display="inline";
        nickname.setAttribute('required',true);
    }else{ 
        nickname.removeAttribute('required');
        nick.style.display="none";
        }
    }