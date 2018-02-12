////////////////////////////////////////////////////
//  CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born.
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is full age
(18 or older), as well as their age
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

////////////
//2.
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

//HELP ME!!!!!!
var names = ['james', 'ryan', 'rob', 'mary', 'jane'];
var age = [10, 25, 30, 44, 11];

var i = 18;

for (var i = 18; i > age.length; i++) {
    if( age.length > 18){
      console.log(age[i]);
      i++;
    }
  }
