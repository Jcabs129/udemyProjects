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


var scores, roundScore, activePlayer, lastDice, gamePlaying;

init();

/*
Related to lecture 43 (section 4) - Dont Repeat Yourself

scores = [0,0];
roundScore = 0;
activePlayer = 0;
lastDice = 0;
*/

/*
1. '.dice' represents a class, when calling a class id within a HTML file, simply input '.[classsname]'.
2. when calling a css file 'display' propety and set the value to 'none'
TIP - OPEN CONSOLE LOG 'ELEMENTS' TAB AND YOU CAN VIEW THE DICE SET TO 'NONE'

document.querySelector('.dice').style.display = 'none';

//this line is a faster way to get element ID within the HTML file, rather then using 'document.querySelector'
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//PRACTISE - document.querySelector('.ion-ios-download-outline').style.display = 'hidden';
*/

// a function that is in an argument '(  )' as shown below is called 'anonymous function'.
// when using an anonymous function, this cant be used outside of this context/line
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1  //genrates a random number =<6

  // 2. display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice === 6 && lastDice === 6) {
              //Player looses score
              scores[activePlayer] = 0;
              document.querySelector('#score-' + activePlayer).textContent = '0';
              lastDice = -1;
              nextPlayer();
              //nextPlayer();
          }else if (dice !== 1) {
            //add scroe
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            lastDice = dice;

          }else  {
            // next player - if active player equals 0 then play, else active player 1, plays
            lastDice = -1;
            nextPlayer();
          }
      }
});
      /*if(activePlayer === 0){
        activePlayer = 1;
      }else {
        activePlayer = 0;
      }
// this else block can also be written as: 'activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;'

      roundScore = 0;       // when swtiching players or landing on dice-1, then the player's score must = 0 to start

      document.getElementById('current-0').textContent = '0'
      document.getElementById('current-1').textContent = '0'

      document.querySelector('.player-0-panel').classList.toggle('active');     // 'classList.toggle' is a way in switching between class elements if 'active'. in this case, if dice rolls on 1 then toggle is activated to switch player
      document.querySelector('.player-1-panel').classList.toggle('active');

      //document.querySelector('.player-0-panel').classList.remove('active');   //when selecting a class '.player-0-panel' you can do a number of things when calling 'classList', in this case 'remove'
      //document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.dice').style.display = 'none';

    }*/


document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying){
    // Add CURRENT score to GLOBAL score
    lastDice = 0;
    scores[activePlayer] += roundScore;      // the same as scores[activePlayer] = scores[activePlayer] + roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // Check if player won the game
      if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');       // this 'winner' tag is defined in the css file 'style, which deines the colour text etc
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
      } else {
        //Next player
        nextPlayer();
        }
    }
});


function nextPlayer () {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
// this block (above) is another way of calling this:
//   if(activePlayer === 0){
//      activePlayer = 1;
//    }else {
//      activePlayer = 0;
//    }

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);    //when the element '.btn-new' is called, by its click then run the function 'init ()'


function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 0';
  document.getElementById('name-1').textContent = 'Player 1';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');






}
