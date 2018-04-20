/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

//////////////// Events and Event handling: Rolling the Dice

what will you learn ?

- How to set up an event handler;
- What an anonymous function is;
- Another way to select elements by ID;
- How to change the image in an <img> element
*/


var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
//activePlayer = 1;

/*
// var dice - this line genrates random numbers from 1 - 6.
dice = Math.floor(Math.random() * 6) + 1
//dice2 = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

// this line select HTML elements 'querySelector()'.
// '#' select ID within the HTML file
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// this line is simply to read the value or content of the element of ID 'score-0'
// and to store it into 'var = x'
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/




/*
1. '.dice' represents a class, when calling a class id within a HTML file, simply input '.[classsname]'.
2. when calling a css file 'display' propety and set the value to 'none'
TIP - OPEN CONSOLE LOG 'ELEMENTS' TAB AND YOU CAN VIEW THE DICE SET TO 'NONE'
*/
document.querySelector('.dice').style.display = 'none';

//this line is a faster way to get element ID within the HTML file, rather then using 'document.querySelector'
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//document.getElementByID('dice-5.png').style.display = 'hidden';
document.querySelector('.ion-ios-download-outline').style.display = 'hidden';


// a function that is in an argument '(  )' as shown below is called 'anonymous function'.
// when using an anonymous function, this cant be used outside of this context/line
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1

    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1

});
