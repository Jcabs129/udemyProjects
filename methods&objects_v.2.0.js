///////////////////////////
//// lecture part 2: Objects and methods - v.2.0

//this code represent adding a property within an object by using 'this' method

var james = {
    name: 'Billy',
    lastName: 'Midget',
    yearOfBirth: 1987,
    job: 'CEO AMAGON',
    isMarried: false,
    cars: ['Bently', 'Audi R8', 'Rolls Royce'],
    calculateAge: function(){
//'this' refers to the object 'james'. 'this.age' adds a new variable within the object.
//...and will run the function '2018 - this.yearOfBirth;' and thus adding a property 'age = 2018 - this.yearOfBirth;'
    this.age = 2018 - this.yearOfBirth;
    }
};

james.calculateAge();
console.log(james);



var jones = {
    yearOfBirth: 1950,
    calculateAge:function() {
//'this' refers to the object 'james'. 'this.age' adds a new variable within the object.
//...and will run the function '2018 - this.yearOfBirth;' and thus adding a property 'age = 2018 - this.yearOfBirth;'
    this.age = 2018 - this.yearOfBirth;
    }
};

jones.calculateAge();
console.log(jones);
