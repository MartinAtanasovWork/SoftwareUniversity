function solve(command) {
    let size = command[0];
    let indexes = command[1].split(" ").map(Number);
    let ladybugs = Array(size).fill(0);
  
    // Place ladybugs on the field
    for (let index of indexes) {
      if (index >= 0 && index < size) {
        ladybugs[index] = 1;
      }
    }
  
    for (let i = 2; i < command.length; i++) {
      let tokens = command[i].split(" ");
      let indexOfBug = Number(tokens[0]);
      let move = tokens[1];
      let step = Number(tokens[2]);
  
      if (ladybugs[indexOfBug] === 1) {
        ladybugs[indexOfBug] = 0;
  
        let newPosition = move === "right" ? indexOfBug + step : indexOfBug - step;
  
        while (newPosition >= 0 && newPosition < size) {
          if (ladybugs[newPosition] === 0) {
            ladybugs[newPosition] = 1;
            break;
          }
          newPosition = move === "right" ? newPosition + step : newPosition - step;
        }
      }
    }
    console.log(ladybugs.join(" "));
  }
  
  solve([5, '0', '0 right 1', '1 right 2','3 right 1']);
  

   