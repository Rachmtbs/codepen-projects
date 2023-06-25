function process(){
    'use strict';
    var firstName = document.getElementById ('firstName').value;
    var lastName = document.getElementById ('lastName').value;
    var language = document.getElementById ('language').value;
    var age = document.getElementById ('age').value;
    var email= document.getElementById ('email').value;
    var output = document.getElementById('output');

    var userInfo ={
      firstName: firstName,
      lastName: lastName,
      age: age,
      language: language,
      inputDate: new Date(),
      email: email,
    };

  var message = '<h2> User Info</h2>Name:' + userInfo.firstName + ',' + userInfo.lastName + '<br>';
  message += 'language:' + userInfo.language +'<br>'
   message += 'email:' + userInfo.email +'<br>'
   message += 'age:'  + userInfo.age + '<br>'
   message += 'Date' + ','+ userInfo.inputDate. toDateString();
    output.innerHTML = message
     return false;
 }
document.getElementById("checkButton").onclick = function(){
 const  checkYesBtn = document.getElementById ("checkYesBtn")
  const  checkNoBtn = document.getElementById ("checkNoBtn")
  if(checkYesBtn.checked){
     alert("You are all set")
  }else if(checkNoBtn.checked){
    alert("Please Review and make changes")
  }
   
}
  function init() {
    'use strict';
    document.getElementById('theform').onsubmit = process;
    } 

  window.onload = init;