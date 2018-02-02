//////////////////////////////
// Lecture: Objects and methods

////v.1.0

var james = {
    name: 'Billy',
    lastName: 'Midget',
    yearOfBirth: 1990,
    job: 'CEO AMAGON',
    isMarried: false,
    cars: ['Bently', 'Audi R8', 'Rolls Royce'],
    //function expressions: a variable inside an object which is assign to a function
    calculateAge: function()/*(yearOfBirth)*/ {
//this refers to the object 'john' that has to calculate the method
      return 2018 - this.yearOfBirth //yearOfBirth;

    }
};

/////
//part2 - how to use this line inside the METHOD/Object

//console.log(james.calculateAge(1930));
//This line will simply return the function calculateAge
console.log(james.calculateAge());

//this piece of code adds the var age 'calculatAge' and puts this code within the object
var age = james.calculateAge();
james.age = age;

console.log(james);
////////////////
//part 1
//this is to call the variable 'james' and return everything within the object
//console.log(james);
//this is to call the property 'lastName' and ruturn 'Midget'
//console.log(james.lastName);
//this is to call the property 'cars' and the index 2 and return 'Rolls royce'
//console.log(james.cars[2]);
