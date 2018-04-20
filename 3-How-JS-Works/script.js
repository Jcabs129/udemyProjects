///////////////////////////////////////
// Lecture: Hoisting

//This represents a 'Function declaration'. as explained.....

/*
calculateAge (1987);

function calculateAge(year){
  console.log(2018 - year);
}
*/

//retirement (1987);

//this is a 'function expression' which does not work when using 'hoisting' method.
//notice the 'var retirement = ' (function expression)
//REMEBER - Hoisting functions only works using functions declaration method.

/*var retirement = function(year) {
  console.log(65 - (2018 - year));
}


// variables

age = 31;
console.log(age);

function foo () {
  console.log(age);

  var age = 65;
  console.log (age);

}
foo ();
console.log(age);
*/



///////////////////////////////////////
// Lecture: Scoping

// Example to show the difference between execution stack
// and scope chain

// This represents a global variable that can be used

/*
var a = 'Hello! ';
first();

//this represents a
function first(){
  var b = ' Hi!';
  second();

  function second() {
    var c = ' Hey!';
    console.log(a + b + c);
    third()



    }

  }
// ERROR - the reason why 'b' and 'c' will not be defined is becuase it is within a
//scope chain "Uncaught ReferenceError: b is not defined"

function third() {
  var d = ' Jimbob';
  //console.log(a + b + c + d);
// 'a' - This will execute as its parsing the global variable 'var a = 'Hello! ';'
// in which it is allowed .
// 'd' - 'var d' is out of the scope chain and has its own function
  console.log(a + d)

}
*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1987);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/

var James = {
  name: 'James',
  yearOfBirth: 1987,
  calculateAge: function() {
      console.log(this);

// this line executes a property within an object. in this case
// this proprety is "this.yearOfBirth"
      console.log(2018 - this.yearOfBirth)

    }
  }

James.calculateAge();


var mike = {
  name: 'mike',
  yearOfBirth: 1985
};

//Method borrowing

// because we want the same method for mike (calculateAge), instead of re-writing it
// again we can simply us this ......
mike.calculateAge = James.calculateAge;
// means mike.calculateAge() = run this function
mike.calculateAge();
