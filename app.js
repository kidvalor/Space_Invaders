


let shipS = class {
    constructor (hull,firePower, accuracy) {
      this.hull = hull;
      this.firePower = firePower;
      this.accuracy = accuracy;
      this.isAlive = true;
    }
myShipAttack(target) {
    let accU = Math.random();
    console.log(`Accuracy is ${accU}`);
    if (accU < this.accuracy) {
        console.log(`It's a hit!!`);
        target.hull = target.hull - myShip.firePower;
        if (target.hull <= 0) {
            target.isAlive = false;
            console.log("alien ship is Destroyed!!!!");
        }
    } else {
        console.log(`you missed!`);
        alert("You Missed!")
    }
}

 attack(target) {
   let accUTwo = Math.random();
   console.log(`Accuracy is ${accUTwo}`);
   if (accUTwo < this.accuracy) {
       console.log(`You've been hit!`);
       myShip.hull = myShip.hull - target.firePower;
       alert(`You were hit and have ${target.hull} hull points left.`);
       if (target.hull <= 0) {
           target.isAlive = false;
           console.log("You Died, Game is Over");
           alert("You Died, Game is Over")
      
        
      }
   } else {
       console.log(`You dodged the attack!`);
       alert("You Dodged the Attack")
   }
 }
 }

      let myShip = new shipS(20,5,0.7)
      let ship1 = new shipS(0,2,0.6)
      let ship2 = new shipS(0,2,0.6)
      let ship3 = new shipS(0,3,0.7)
      let ship4 = new shipS(0,3,0.7)
      let ship5 = new shipS(0,4,0.8)
      let ship6 = new shipS(0,4,0.8)
    

      
      const battle = (player,target) => {
         
        start1 = prompt("Are you ready to start game", "yes or no")
        while (ship1.isAlive && myShip.isAlive && "yes" == start1) {
                       myShip.myShipAttack(ship1)
                       if (ship1.isAlive == false && "yes" == start1) {
                         alert("Ship 1 is Dead")
                       }
                   if (ship1.isAlive && "yes" == start1) {
                           ship1.attack(player);
                    }  
                     
        }
if ("yes" != start1 || myShip.isAlive == false) {
  console.log("Game Over")
  alert("Game Over, Thanks for Playing")
  return;
}
             
    input1 = prompt("Ship 1 is Dead", "attack or retreat")
   while (ship2.isAlive && myShip.isAlive && ship1.isAlive == false && input1 == "attack") {
                 myShip.myShipAttack(ship2)
         
                
         if (ship2.isAlive == false && input1 == "attack") {
         alert("Ship 2 is Dead")
                
              }
         if (ship2.isAlive && input1 == "attack") {
          ship2.attack(player);
          }
 }
 if (input1 != "attack"|| myShip.isAlive == false){
   console.log("Game Over");
   alert("You're Dead, Game Over");
   return;
 }

 input2 = prompt("Ship 2 is Dead", "attack or retreat");

 while (ship3.isAlive && myShip.isAlive && ship2.isAlive == false && input2 == "attack") {
  myShip.myShipAttack(ship3)

 
if (ship3.isAlive == false && input2 == "attack") {
alert("Ship 3 is Dead")
 
}
if (ship3.isAlive && input2 == "attack") {
ship3.attack(player);
}
}
if (input2 != "attack"|| myShip.isAlive == false){
console.log("Game Over");
alert("You're Dead, Game Over");
return;
}

input3 = prompt("Ship 3 is Dead", "attack or retreat");

while (ship4.isAlive && myShip.isAlive && ship3.isAlive == false && input3 == "attack") {
  myShip.myShipAttack(ship4)

 
if (ship4.isAlive == false && input3 == "attack") {
alert("Ship 4 is Dead")
 
}
if (ship4.isAlive && input3 == "attack") {
ship4.attack(player);
}
}
if (input3 != "attack"|| myShip.isAlive == false){
console.log("Game Over");
alert("You're Dead, Game Over");
return;
}

input4 = prompt("Ship 4 is Dead", "attack or retreat");

while (ship5.isAlive && myShip.isAlive && ship4.isAlive == false && input4 == "attack") {
  myShip.myShipAttack(ship5)

 
if (ship5.isAlive == false && input4 == "attack") {
alert("Ship 5 is Dead")
 
}
if (ship5.isAlive && input4 == "attack") {
ship5.attack(player);
}
}
if (input4 != "attack"|| myShip.isAlive == false){
console.log("Game Over");
alert("You're Dead, Game Over");
return;
}

input5 = prompt("Ship 5 is Dead", "attack or retreat");

while (ship6.isAlive && myShip.isAlive && ship5.isAlive == false && input5 == "attack") {
  myShip.myShipAttack(ship6)

 
if (ship6.isAlive == false && input5 == "attack") {
alert("Ship 6 is Dead, You WIN!")
return;
}
if (ship6.isAlive && input5 == "attack") {
ship5.attack(player);
}
}
if (input5 != "attack"|| myShip.isAlive == false){
console.log("Game Over");
alert("You're Dead, Game Over");
return;
} 
      }

                            
  
           
                  
      
      
battle(myShip,ship1)

