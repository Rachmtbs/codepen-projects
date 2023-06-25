function process() {
  'use strict';
  var firstName = document.getElementById ('firstName').value;
  var lastName = document.getElementById ('lastName').value;
  var department = document.getElementById ('department').value;
  


  var output = document.getElementById ('output');
  /* create a new object representing the employee */
  var employee  = {
    firstName: firstName,
    lastName: lastName,
    department: department,
    hireDate: new Date() /* found error, new date was written as one it needed to be seprate  */

  }; /* why do we put the semi colon here*/
  var message = '<h2> Employee Added</h2>Name: ' + employee.lastName + ' ,' + employee.firstName +'<br>';
  message += 'Department:' + employee.department + '<br>';
  message += 'Hire Date:' + employee.hireDate.toDateString();

  output.innerHTML = message

  return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
    } 
    window.onload = init;


    /*function process() {
    'use strict';
 
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        hireDate: new Date()
        }; 
  var message = '<h2>Employee Added</h2>Name: ' + employee.lastName + ', ' + employee.firstName + '<br>';
  message += 'Department: ' + employee.department + '<br>';
  message += 'Hire Date: ' + employee.hireDate.toDateString();

  output.innerHTML = message;
  return false;

}
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
    } 
    window.onload = init; */