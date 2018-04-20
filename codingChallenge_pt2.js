////////////////////////////////////////////////////
//  CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born.
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is full age
(18 or older), as well as their age
5. Finally, create a function called printFullAge which recieves the vector of
years as an argument, excutes the steps 2., 3. and 4. and returns vector of
true/false boolean values: true if the person is of full age (>= 18 years)
and false if not (< 18 years)
*/

////////////
//1. Create an array with some years where persons were born.

/*
var james = ['james was born in ' + 1987]
console.log(james);


var ryan = ['ryan was born in ' + 1989]
console.log(ryan);

var rob = ['rob was born in ' + 1984]
console.log(rob);
*/

////////////
//1.1 Create an array with some years where persons were born.
/*
 var persons = [
   {
     name: 'james',
     age: 30
   },
   {
     name: 'rob',
     age: 33
   },{
     name: 'ryan',
     age: 29
   },
 ]
console.log(persons);
*/


/*
//object
var james = {
    name: 'james',
    yearOfBirth: 1987
}

console.log(james);

var ryan = {
    name: 'ryan',
    yearOfBirth: 1989
}
console.log(ryan);
*/

////////////////
//2. Create an empty array (just [])
/*
var james = [ ];
console.log(james);
*/


////////////
//3. Use a loop to fill the array with the ages of the persons
/*
var names = ['james', 'ryan', 'rob'];
var age = [20, 25, 30];


for (i = 0; i < age.length; i++){
    console.log(age[i]);

}
*/

////////////
//4. Use another loop to log into the console whether each person is full age
//(18 or older), as well as their age
//https://stackoverflow.com/questions/12462257/print-all-numbers-below-x-in-an-array

/*
var names = ['james', 'ryan', 'rob', 'mary', 'jane'];
var age = [10, 35, 30, 44, 11];

var i = 0;

for (var i = 0; i < age.length; i++) {
// if - line is reading the age arrays list, and any number >= 18 console.log answer
    if(age[i] >= 18){
    console.log(age[i]);
    }
  }
*/


////////////
//5. Finally, create a function called printFullAge which recieves the vector of
//years as an argument, excutes the steps 2., 3. and 4. and returns vector of
//true/false boolean values: true if the person is of full age (>= 18 years)
//and false if not (< 18 years)

/*

function printFullAge(years){

}

//step 1
var persons = [
  {
    name: 'james',
    age: 30
  },
  {
    name: 'rob',
    age: 33
  },{
    name: 'ryan',
    age: 29
  },
]
console.log(persons);
//////////////////
*/


/*
//step 2
var james = [ ];
console.log(james);
*/

/*
//step 3
var names = ['james', 'ryan', 'rob'];
var age = [20, 25, 30];


for (i = 0; i < age.length; i++){
    console.log(age[i]);
*/

//step 4
var names = ['james', 'ryan', 'rob', 'mary', 'jane'];
var age = [10, 35, 30, 44, 11];

var i = 0;

for (var i = 0; i < age.length; i++) {
    if(age[i] >= 20){
    console.log(age[i]);
    }
  }
