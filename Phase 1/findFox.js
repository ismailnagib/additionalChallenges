function findFox(map) {
  var coordinate = [];
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'UBER') {
        coordinate.push(i, j);
      }
    }
  }

  var foxFound = false;
  var path = [];

  while(foxFound === false) {
    var moveCode = pathCheck(map, coordinate);
    coordinate = move(moveCode[0], coordinate);
    switch(moveCode[0]) {
      case 1: path.push("atas"); break;
      case 2: path.push("kanan"); break;
      case 3: path.push("bawah"); break;
      case 4: path.push("kiri"); break;
    }
    if (moveCode[1]) {
      foxFound = true;
      break;
    }
  }
  
  forbiddenPath = 0;
  console.log(path.join(", "));
  return "";
}

var forbiddenPath = 0;

function pathCheck(map, coordinate) {
  for (var k = 1; k <= 4; k++) {
    var pathFound = false;
    switch(k) {
      case 1: pathFound = checkUp(map, coordinate); break;
      case 2: pathFound = checkRight(map, coordinate); break;
      case 3: pathFound = checkDown(map, coordinate); break;
      case 4: pathFound = checkLeft(map, coordinate); break;
    }
    if (pathFound === true && k !== forbiddenPath) {
      switch(k) {
        case 1: forbiddenPath = 3; break;
        case 2: forbiddenPath = 4; break;
        case 3: forbiddenPath = 1; break;
        case 4: forbiddenPath = 2; break;
      }
      return [k, false];
    } else if (pathFound === "fox") {
      return [k, true];
    }
  }
}

function checkUp(map, coordinate) {
  if (map[coordinate[0]-1] === undefined) {
    return false;
  }
  if (map[coordinate[0]-1][coordinate[1]] === ' ') {
    return true;
  } else if (map[coordinate[0]-1][coordinate[1]] === 'FOX') {
    return "fox";
  } else {
    return false;
  }
}

function checkRight(map, coordinate) {
  if (map[coordinate[0]][coordinate[1]+1] === ' ') {
    return true;
  } else if (map[coordinate[0]][coordinate[1]+1] === 'FOX') {
    return "fox";
  } else {
    return false;
  }
}

function checkDown(map, coordinate) {
  if (map[coordinate[0]+1] === undefined) {
    return false;
  }
  if (map[coordinate[0]+1][coordinate[1]] === ' ') {
    return true;
  } else if (map[coordinate[0]+1][coordinate[1]] === 'FOX') {
    return "fox";
  } else {
    return false;
  }
}

function checkLeft(map, coordinate) {
  if (map[coordinate[0]][coordinate[1]-1] === ' ') {
    return true;
  } else if (map[coordinate[0]][coordinate[1]-1] === 'FOX') {
    return "fox";
  } else {
    return false;
  }
}

function move(moveCode, coordinate) {
  switch(moveCode) {
    case 1: coordinate[0]--; break;
    case 2: coordinate[1]++; break;
    case 3: coordinate[0]++; break;
    case 4: coordinate[1]--; break;
  }
  return coordinate;
}

//driver code

let mapOne = [
  ['UBER', ' ', 'X', 'X', 'X'],
  ['X', ' ', 'X', 'X', 'X'],
  [' ', ' ', 'X', ' ', 'FOX'],
  [' ', 'X', 'X', ' ', 'X'],
  [' ', ' ', ' ', ' ', 'X'],
];

findFox(mapOne);
// kanan, bawah, bawah, kiri, bawah, bawah, kanan, kanan, kanan, atas, atas, kanan

let mapTwo = [
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'UBER', 'X', ' ', 'X'],
  ['X', ' ', 'X', 'FOX', 'X'],
  ['X', ' ', ' ', ' ', 'X'],
]

findFox(mapTwo);
// bawah, bawah, kanan, kanan, atas