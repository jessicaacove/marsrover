var myRover = {
  position: [0,0],
  direction: 'N'
};

var myRover2 = {
  position: [0,1],
  direction: 'N'
};

var obstacleArray = [
  [1,2],
  [4,3],
  [9,4]
];

function goForward(rover) {
  var canForward = false;
  switch(rover.direction) {
    case 'N':
      for (var i=0; i< obstacleArray.length; i++) {
        if (rover.position[1] < 10) {
          if (((rover.position[0] == myRover.position[0]) && ((rover.position[1] + 1) == myRover.position[1])) || ((rover.position[0] == myRover2.position[0]) && ((rover.position[1] + 1) == myRover2.position[1])));
          else if ((rover.position[0] == obstacleArray[i][0]) && ((rover.position[1] + 1) == obstacleArray[i][1]));
          else {
          	canForward = true;
          }
        }
        else {
          if (((rover.position[0] == myRover.position[0]) && (myRover.position[1] === 0)) || ((rover.position[0] == myRover2.position[0]) && (myRover2.position[1] === 0)));
          else if ((rover.position[0] == obstacleArray[i][0]) && (obstacleArray[i][1] === 0));
          else {
            rover.position[1] = 0;
          }
        }
      }
if (canForward) {
  rover.position[1]++;
}
      break;
    case 'E':
      for (var j=0; j<obstacleArray.length; j++) {
        if (rover.position[0] > 0) {
          if (((rover.position[1] == myRover.position[1]) && ((rover.position[0] - 1) == myRover.position[0])) || ((rover.position[1] == myRover2.position[1]) && ((rover.position[0] - 1) == myRover2.position[0])));
          else if ((rover.position[1] == obstacleArray[j][1]) && ((rover.position[0] - 1) == obstacleArray[j][0]));
          else {
            canForward = true;
          }
        }
        else {
          if (((rover.position[1] == myRover.position[1]) && (myRover.position[0] == 10)) || ((rover.position[1] == myRover2.position[1]) && (myRover2.position[0] == 10)));
          else if ((rover.position[1] == obstacleArray[j][1]) && (obstacleArray[j][0] == 10));
          else {
              rover.position[0] = 11;
          }
        }
      }
if (canForward) {
  rover.position[0]--;
}
      break;
    case 'S':
      for (var k=0; k< obstacleArray.length; k++) {
        if (rover.position[1] > 0) {
          if (((rover.position[0] == myRover.position[0]) && ((rover.position[1] - 1) == myRover.position[1])) || ((rover.position[0] == myRover2.position[0]) && ((rover.position[1] - 1) == myRover2.position[1])));
          else if ((rover.position[0] == obstacleArray[k][0]) && ((rover.position[1] - 1) == obstacleArray[k][1]));
          else {
            canForward = true;
          }
        }
        else {
          if (((rover.position[0] == myRover.position[0]) && (myRover.position[1] == 10)) || ((rover.position[0] == myRover2.position[0]) && (myRover2.position[1] == 10)));
          else if ((rover.position[0] == obstacleArray[k][0]) && (obstacleArray[k][1] == 10));
          else {
            rover.position[1] = 11;
          }
        }
      }
if (canForward) {
  rover.position[1]--;
}
      break;
    case 'W':
      for (var m=0; m<obstacleArray.length; m++) {
        if (rover.position[0] < 10) {
          if (((rover.position[1] == myRover.position[1]) && ((rover.position[0] + 1) == myRover.position[0])) || ((rover.position[1] == myRover2.position[1]) && ((rover.position[0] + 1) == myRover2.position[0])));
          else if ((rover.position[1] == obstacleArray[m][1]) && ((rover.position[0] + 1) == obstacleArray[m][0]));
          else {
            canForward = true;
          }
        }
        else {
          if (((rover.position[1] == myRover.position[1]) && (myRover.position[0] === 0)) || ((rover.position[1] == myRover2.position[1]) && (myRover2.position[0] === 0)));
          else if ((rover.position[1] == obstacleArray[m][1]) && (obstacleArray[m][0] === 0));
          else {
            rover.position[0] = 0;
          }
        }
      }
if (canForward) {
  rover.position[0]++;
}
      break;
  }
}


function goBackward(rover) {
  var canBackward = false;
  switch(rover.direction) {
    case 'N':
      for (var i=0; i< obstacleArray.length; i++) {
        if (rover.position[1] > 0) {
          if (((rover.position[0] == myRover.position[0]) && ((rover.position[1] - 1) == myRover.position[1])) || ((rover.position[0] == myRover2.position[0]) && ((rover.position[1] - 1) == myRover2.position[1])));
          else if ((rover.position[0] == obstacleArray[i][0]) && ((rover.position[1] - 1) == obstacleArray[i][1]));
          else {
            canBackward = true;
          }
        }
        else {
          if (((rover.position[0] == myRover.position[0]) && (myRover.position[1] == 10)) || ((rover.position[0] == myRover2.position[0]) && (myRover2.position[1] == 10)));
          else if ((rover.position[0] == obstacleArray[i][0]) && (obstacleArray[i][1] == 10));
          else {
            rover.position[1] = 11;
          }
        }
      }
if (canBackward) {
  rover.position[1]--;
}
      break;
    case 'E':
      for (var j=0; j<obstacleArray.length; j++) {
        if (rover.position[0] < 10) {
          if (((rover.position[1] == myRover.position[1]) && ((rover.position[0] + 1) == myRover.position[0])) || ((rover.position[1] == myRover2.position[1]) && ((rover.position[0] + 1) == myRover2.position[0])));
          else if ((rover.position[1] == obstacleArray[j][1]) && ((rover.position[0] + 1) == obstacleArray[j][0]));
          else {
            canBackward = true;
          }
        }
        else {
          if (((rover.position[1] == myRover.position[1]) && (myRover.position[0] === 0)) || ((rover.position[1] == myRover2.position[1]) && (myRover2.position[0] === 0)));
          else if ((rover.position[1] == obstacleArray[j][1]) && (obstacleArray[j][0] === 0));
          else {
            rover.position[0] = 0;
          }
        }
      }
if (canBackward) {
  rover.position[0]++;
}
      break;
    case 'S':
      for (var k=0; k< obstacleArray.length; k++) {
        if (rover.position[1] < 10) {
          if (((rover.position[0] == myRover.position[0]) && ((rover.position[1] + 1) == myRover.position[1])) || ((rover.position[0] == myRover2.position[0]) && ((rover.position[1] + 1) == myRover2.position[1])));
          else if ((rover.position[0] == obstacleArray[k][0]) && ((rover.position[1] + 1) == obstacleArray[k][1]));
          else {
            canBackward = true;
          }
        }
        else {
          if (((rover.position[0] == myRover.position[0]) && (myRover.position[1] === 0)) || ((rover.position[0] == myRover2.position[0]) && (myRover2.position[1] === 0)));
          else if ((rover.position[0] == obstacleArray[k][0]) && (obstacleArray[k][1] === 0));
          else {
            rover.position[1] = 0;
          }
        }
      }
if (canBackward) {
  rover.position[1]++;
}
      break;
    case 'W':
      for (var m=0; m<obstacleArray.length; m++) {
        if (rover.position[0] > 0) {
          if (((rover.position[1] == myRover.position[1]) && ((rover.position[0] - 1) == myRover.position[0])) || ((rover.position[1] == myRover2.position[1]) && ((rover.position[0] - 1) == myRover2.position[0])));
          else if ((rover.position[1] == obstacleArray[m][1]) && ((rover.position[0] - 1) == obstacleArray[m][0]));
          else {
            canBackward = true;
          }
        }
        else {
          if (((rover.position[1] == myRover.position[1]) && (myRover.position[0] == 10)) || ((rover.position[1] == myRover2.position[1]) && (myRover2.position[0] == 10)));
          else if ((rover.position[1] == obstacleArray[m][1]) && (obstacleArray[m][0] == 10));
          else {
            rover.position[0] = 11;
          }
        }
      }
if (canBackward) {
  rover.position[0]--;
}
      break;
  }
}



var directionArray = ["N","E","S","W"];

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = directionArray[1];
      break;
    case 'E':
      rover.direction = directionArray[2];
      break;
    case 'S':
      rover.direction = directionArray[3];
      break;
    case 'W':
      rover.direction = directionArray[0];
      break;
  }
}



function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = directionArray[3];
      break;
    case 'E':
      rover.direction = directionArray[0];
      break;
    case 'S':
      rover.direction = directionArray[1];
      break;
    case 'W':
      rover.direction = directionArray[2];
      break;
  }
}




function commandstring(rover, string) {
  for (var i=0; i< string.length; i++) {
    if (string[i] == "f") {
      goForward(rover);
    }
    else if (string[i] == "b") {
      goBackward(rover);
    }
    else if (string[i] == "r") {
      turnRight(rover);
    }
    else if (string[i] == "l") {
      turnLeft(rover);
    }
    else {
      console.log("Invalid command");
    }
  }
}




function grid (rows, columns, defaultValue) {
  var array = [];
    for (var i=0; i< rows + 1; i++) {
      for (var j=0; j< columns + 1; j++) {
        if ((myRover.position[0] == j) && (myRover.position[1] == i)) {
          array.push("X");
        }
        else if ((myRover2.position[0]== j) && (myRover2.position[1]==i)) {
          array.push("Y");
        }
        else {
          array.push(defaultValue);
        }
			}
		}
				for (var m=0; m<obstacleArray.length; m++) {
					array.splice(((obstacleArray[m][1]) * 11) + (obstacleArray[m][0]),1,"O");
				}
	for (var k=0; k<array.length; k++) {
  	if (k%12===0) {
    	array.splice(k, 0, "\n");
  	}
	}
console.log(array.join(" "));
}
grid(10, 10, "_");
