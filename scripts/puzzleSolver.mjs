const MAX = {
  easy: 60,
  medium: 120,
  hard: 180,
};

export const solvePuzzle = (tiles, target, difficulty, symbols, solution) => {
  // console.log(tiles, target);
  const length = tiles.length;
  if (length === 1) {
    if (tiles[0] === target) {
      return solution;
    } else {
      return false;
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const num1 = tiles[i];
      const num2 = tiles[j];

      let possibleCombos = [];
      if (symbols.add > 0) {
        if (num1 + num2 <= MAX[difficulty]) {
          let remainingTiles = [num1 + num2];
          for (let k = 0; k < length; k++) {
            if (k !== i && k !== j) {
              remainingTiles.push(tiles[k]);
            }
          }
          possibleCombos.push({
            tile1: num1,
            symbol: "add",
            tile2: num2,
            remainingTiles: remainingTiles,
          });
        }
      }
      if (symbols.multipy > 0) {
        if (num1 * num2 <= MAX[difficulty]) {
          let remainingTiles = [num1 * num2];
          for (let k = 0; k < length; k++) {
            if (k !== i && k !== j) {
              remainingTiles.push(tiles[k]);
            }
          }
          possibleCombos.push({
            tile1: num1,
            symbol: "multiply",
            tile2: num2,
            remainingTiles: remainingTiles,
          });
        }
      }
      if (symbols.subtract > 0) {
        if (num1 - num2 >= 0) {
          let remainingTiles = [num1 - num2];
          for (let k = 0; k < length; k++) {
            if (k !== i && k !== j) {
              remainingTiles.push(tiles[k]);
            }
          }
          possibleCombos.push({
            tile1: num1,
            symbol: "subtract",
            tile2: num2,
            remainingTiles: remainingTiles,
          });
        }
        if (symbols.subtract > 0) {
          if (num2 - num1 >= 0) {
            let remainingTiles = [num2 - num1];
            for (let k = 0; k < length; k++) {
              if (k !== i && k !== j) {
                remainingTiles.push(tiles[k]);
              }
            }
            possibleCombos.push({
              tile1: num2,
              symbol: "subtract",
              tile2: num1,
              remainingTiles: remainingTiles,
            });
          }
        }
      }
      if (symbols.divide > 0) {
        if (num1) {
          if (num2 % num1 === 0) {
            let remainingTiles = [Math.floor(num2 / num1)];
            for (let k = 0; k < length; k++) {
              if (k !== i && k !== j) {
                remainingTiles.push(tiles[k]);
              }
            }
            possibleCombos.push({
              tile1: num2,
              symbol: "divide",
              tile2: num1,
              remainingTiles: remainingTiles,
            });
          }
        }
        if (num2) {
          if (num1 % num2 === 0) {
            let remainingTiles = [Math.floor(num1 / num2)];
            for (let k = 0; k < length; k++) {
              if (k !== i && k !== j) {
                remainingTiles.push(tiles[k]);
              }
            }
            possibleCombos.push({
              tile1: num1,
              symbol: "divide",
              tile2: num2,
              remainingTiles: remainingTiles,
            });
          }
        }
      }

      for (const result of possibleCombos) {
        let newSymbols;
        if (result.symbol === "add") {
          newSymbols = { ...symbols, add: symbols.add - 1 };
        } else if (result.symbol === "subtract") {
          newSymbols = { ...symbols, subtract: symbols.subtract - 1 };
        } else if (result.symbol === "multiply") {
          newSymbols = { ...symbols, multipy: symbols.multipy - 1 };
        } else if (result.symbol === "divide") {
          newSymbols = { ...symbols, divide: symbols.divide - 1 };
        }
        const answer = solvePuzzle(
          result.remainingTiles,
          target,
          difficulty,
          newSymbols,
          [...solution, result]
        );
        if (answer) {
          return answer;
        }
      }
    }
  }
  return false;
};
console.log(
  solvePuzzle(
    [7, 5, 9, 1, 5, 5],
    63,
    "hard",
    { add: 3, subtract: 0, multipy: 2, divide: 0 },
    []
  )
);
