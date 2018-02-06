////////////////////////////////////////////////////
//  CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born.
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
*/

////////////
//1.
/*
var james = ['james was born in ' + 1987]
console.log(james);


var ryan = ['ryan was born in ' + 1989]
console.log(ryan);

var rob = ['rob was born in ' + 1984]
console.log(rob);
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
var names = ['james', 'ryan', 'rob'];
var age = [20, 25, 30];


for (i = 0; i < names.length; i++){
    console.log(names, age);

}
