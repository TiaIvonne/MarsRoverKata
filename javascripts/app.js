// Rover Object Goes Here

//Object rover declaration - iteration 1

var rover = {
  direction: "N", /*Default*/
  posX: 0,/*Column*/
  posY: 0,/*Row*/
  travelLog:[0,0]
}



// Iteration 2 turnLeft and turnRight
function turnLeft(rover){
  //move to left
  switch (rover.direction){
    case "N":rover.direction = "W";break;
    case "W":rover.direction = "S";break;
    case "S":rover.direction = "E";break;
    case "E":rover.direction = "N";break;
    break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  //move to right
  
  switch (rover.direction){
    case "N":rover.direction = "E";break;
    case "E":rover.direction = "S";break;
    case "S":rover.direction = "W";break;
    case "W":rover.direction= "N";break;
  }
  console.log("turnRight was called!");
  }

//Iteration 3 moveForward and moveBackwards
function moveForward(rover){
  switch(rover.direction){
  case "N":rover.posY -= 1;break;
  case "E":rover.posX += 1;break;
  case "S":rover.posY += 1;break;
  case "W":rover.posX -= 1;break;
  }
  outGrid("Foward");
  console.log("moveForward was called");
  console.log("Current rover position " + [rover.posX, rover.posY]);
}

function moveBackwards(rover){
  switch(rover.direction){
  case "N":rover.posY += 1;break;
  case "E":rover.posX -= 1;break;
  case "S":rover.posY -= 1;break;
  case "W":rover.posX += 1;break;
  }
outGrid("Back");
console.log("moveBackwards was called");
console.log("Current rover position " + [rover.posX, rover.posY]);
}

function outGrid(){
  if (rover.posX < 0 || rover.posX >=10){
    console.log("You're out of grid");
    
  }
  if(rover.posY <= 0){
    console.log("You're out of grid");
    

  }
}

//Iteration 4 and 5 Commands to operate rover and tracking

function commands(rover){
var route = prompt("Please insert a letter to move rover").toLowerCase();
if (route.charAt(0) === "f" || route.charAt(0) === "b" || route.charAt(0) === "l" || route.charAt(0) === "r") {
  for (var i = 0; i < commands.length; i++){
    switch (route){
    case "f": //call function
    moveForward(rover);
    break;
    case "l":
    turnLeft(rover);
    break;
    case "r":
    turnRight(rover);
    break;
    case "b":
    moveBackwards(rover);
    break;
    } 
    var pos = [rover.posX, rover.posY];
    rover.travelLog.push(pos);
    console.log("The travel log is " + pos);
    /* End switch */
  } /*End for */
}
else{
  alert("Please enter a valid command");
  commands(rover);
}
}
commands(rover);


