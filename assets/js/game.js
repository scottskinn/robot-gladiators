var fight = function(){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


var playerName = window.prompt("What is your robot's name?");
var playerAttack = 10;
var playerHealth = 100; 
var playerMoney = 10;

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
console.log(promptFight);

// check to see if the value of the palyerHealth varible is greater than 0
if (playerHealth === 0){
    // three equal signs allows us to check if two values are directly equal to one another.
    console.log("Your player is alive!")
}
else {
    console.log("This will run instead.");
}

    console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT"){

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)
// check players health
if (playerHealth <= 0){
    window.alert(playerName + " has died!");
}
else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
}
// if player choses to skip
}else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?")

    // if true leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    }
    //if false ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to chose a vaild option. Try again!")
}
};




fight();

