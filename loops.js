///////////////////////////////
//Lecture: Loops

//we defined a variable i = 0, then we have the 'i' count <0
for (var i = 0; i < 10; i++)
//i++ is i = i+1

console.log(i);

/*
0, true, print 0, then update i to 1
1, true, print 1, then update i to 2
.
.
.
9, tru, print 9, then update i to 10
10, FALSE, end loop!
*/

var cars = ['BMW', 'Rolls Royce', 'Bently', 'Audi R8',
'Mercedes']

//for (var i = 0; i < 5; i++)
//'cars.length' if we dont know the length we simply 'cars.length'
for (var i = 0; i < cars.length; i++)
// i++ is i=i+1
//function prints out what ever is in the array
console.log(cars[i]);
