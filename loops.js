///////////////////////////////
//Lecture: Loops
/*
for (var i = 0 ; i < 10 ; i++){
    console.log(i);
}
*/
/*
0, true , print 0, update i to 1
1, true , print 1, update i to 2,
.
.
.
9, true , print 0, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['James', 'ryan', 'robert', 'linda'];

for (var i = names; i < 5; i++)
*/

//////////////////////////////////////////////////////////////
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
//'cars.length' - if we dont know the length we simply use 'cars.length'
for (var i = 0; i < cars.length; i++)
// i++ is i=i+1
//function prints out what ever is in the array
console.log(cars[i]);


///////////////////////////////
/// for Loops

/*
var cars = ['BMW', 'Rolls Royce', 'Bently', 'Audi R8',
'Mercedes'];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//var reversed = cars.reverse();

//print cars reverse - we defined the variable i by geting the cars.length - 1,
// then we count down (start) of 'mercedes' untill we hit >=0
// i is i = i - 1
for (var i = cars.length - 1; i >= 0; i--){
console.log(cars[i]);
}

//for (var i = 0; i < cars.length; i--){
//console.log(cars[i]);
//}
*/

///////////////////////////////
///   While Loops

var cars = ['BMW', 'Rolls Royce', 'Bently', 'Audi R8',
'Mercedes'];

var i =0;
while (i < cars.length){
    console.log(cars[i]);
    i++;

}

// for loop: break

for (var i = 1; i <=6; i++){
//break is when i = {number}, which will count up to that number and then stop.
//so in this case it will print 1,2,3,4. because i=== 5 break
    if (i === 5) {break;}
  console.log(i);
}


// for loop: continue
for (var i = 1; i <=10; i++){
  if (i === 5) {continue;}
console.log(i);
}
