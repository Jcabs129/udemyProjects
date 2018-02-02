//////////////////////////////
// Lecture: Objects and methods


var james = {
    name: 'Billy',
    lastName: 'Midget',
    yearOfBirth: 35,
    job: 'CEO AMAGON',
    isMarried: false,
    cars: ['Bently', 'Audi R8', 'Rolls Royce'],
    //function expressions: a variable inside an object which is assign to a function
    calculateAge: function(yearOfBirth){
      return 2018 - yearOfBirth;
    }
};



//this is to call the variable 'james' and return everything within the object
console.log(james);
//this is to call the property 'lastName' and ruturn 'Midget'
console.log(james.lastName);
//this is to call the property 'cars' and the index 2 and return 'Rolls royce'
console.log(james.cars[2]);

console.log(james.calculateAge(1930));
