// variables
// First-class citizen
// Function can be:
// decoration
// values
// argument
// parameter
// object

function bioData(firstName, lastName, job) {
  var firstName = firstName;
  var lastName = lastName;
  var job = job;
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Job: " + job);
}
// decoration
function funcName(param1, param2) {

}
bioData("wacky", "dev", "developer");

// anonymous function
// function expression
// function named expression
var sayMyName = function sayName(name) {
  return name;
}

function caller(cb, anything) {
  return cb(anything);
}

console.log(caller(sayMyName, 'arsalan'));
















