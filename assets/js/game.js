var fight = function(){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerAttack = 10;
var playerHealth = 100; 

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
};




fight();

