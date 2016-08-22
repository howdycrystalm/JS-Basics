//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as 
//it's only parameter.
//If the argument you passed in is equal to 'Tyler', 
//return true. If it's not, return false.
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}
isTyler("Tyler");

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, 
//then returns the name.


function getName() {
  var storeName = prompt("gimme your name");
  return storeName;
}

getName();
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in 
//the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var usersName = getName();
  alert("Welcome, " + usersName);
}

welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//arguments are used while invoking the function. parameters are used while defining the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//"", 0, false, undefined, NaN, null;


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  return "Crystal";
}

var newMyName = myName;

alert(newMyName());
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  
  

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////

function outerFn() {
  return function() {
    return "Crystal";
  }
}

var innerFn = outerFn();

innerFn();
//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.















