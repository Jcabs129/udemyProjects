/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, its the next player's
turn. (HINT: Always save the previous dice roll in a seperate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the good
predefined score of 100. (Hint: you can read that value with .value property in javascript. This is a good
oppurtunity to use google to figure this one out :)

3. Add another dice to the game, so that there are two dices now. the player looses his current score
when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the css
code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;
var lastDice;

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

  ///////////Challenge 1
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
  /*  if(activePlayer === 0){
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

////////////// CHALLENGE 3

    document.querySelector('.secondDice').classList.add = '.secondDice';

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

/////// Challenge 3
    var input = document.querySelector('.final-score').value;
    console.log(input);

    // Check if player won the game
      if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');       // this 'winner' tag is defined in the css file 'style, which deines the colour text etc
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        ////////////////  Challege 2
        document.querySelector('#score-0').contentEditable = "true";
        document.querySelector('#score-1').contentEditable = "true";

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
