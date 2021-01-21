   const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];
    const initial_position = [0,0];
    const moves1 = ['up', 'left', 'right', 'left', 'left'];
    const moves2 = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

function streetFighterSelection(fighters, initial_position, moves){
    var positionX = initial_position[0];
    var positionY = initial_position[1];
    var result = [];

    function moveFighter(str) {
      switch (str) {
        case "up":
            if (positionX == 1) positionX = 0;
            break;
        case "down":
            if (positionX == 0) positionX = 1;
            break;
        case "left":
            positionY--;
            if (positionY < 0) positionY = 5;
            break;
        case "right":  
            positionY++;
            if (positionY > 5) positionY = 0;
            break;
        }
      return result.push(fighters[positionX][positionY]);
        
    }
  
   for (let i = 0; i < moves.length; i++) {
    moveFighter(moves[i]);
   }
    
    return result;
}

console.log("test case 1");
console.log(streetFighterSelection(fighters,initial_position,moves1));

console.log("test case 2");
console.log(streetFighterSelection(fighters,initial_position,moves2));
