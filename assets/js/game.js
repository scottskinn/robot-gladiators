

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    console.log(promptFight);
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var playerInfo = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var enemyInfo = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// Random number thingy
var randomNumber = function(){
  var value = Math.floor(Math.random()* 21) + 40;

  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
}

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function(){
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    //debugger;
    for (var i = 0; i < enemyInfo.lenght; i++) {
  // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            //picks a random number. Math.floor() to round down to the nearest whole number
            // function to generate a random numeric value
            pickedEnemyObj = randomNumber(40, 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            
            fight(pickedEnemyObj);

            // if we're not the last enemyin th array
            if (playerInfo.health > 0 && i < enemy.name.length - 1); {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
                if (storeConfirm) {
                    shop();
                }
        
            }
        }
        // if player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    endGame();
};


var endGame = function(){
    if(playerInfo.health > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
  
      var playAgianConfirm = window.confirm("Would you like to play again?");
        if(playAgianConfirm) {
            startGame();
        }
        
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

var shop = function() {
    var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        if (playerInfo.money >= 7 ){
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
        }
        else {
            window.alert("You dont have enough money!")
        }
      break;
    
    case "UPGRADE":
    case "upgrade":
        if (playerInfo.money >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerInfo.attack = playerInfo.attack + 6;
      playerInfo.money = playerInfo.money - 7;
    }
    else{
        window.alert("You dont have enough money")
    }
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }

};

startGame();