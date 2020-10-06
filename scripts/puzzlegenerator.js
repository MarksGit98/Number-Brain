const Modes = {
  easy: 4,
  medium: 5,
  hard: 6,
};

const generatePuzzles = (mode, puzzleCount, minResult, maxResult) => {
  const puzzles = {};
  while (puzzleCount-- !== 0) {
    const puzzle = {
      bigNumber: 0,
      tiles: [],
      symbols: {
        add: 0,
        subtract: 0,
        multiply: 0,
        divide: 0,
      },
      solution: [],
    };
    let current = generateRandomDigit();
    let tiles = 1;
    while (tiles <= Modes[mode]) {
      const symbol = generateRandomSymbol();
      const newNum = generateRandomDigit();
      const temp = current;
      if (symbol === "add") {
        if (isValidOperation(current, newNum, symbol, minResult, maxResult)) {
          current += newNum;
        } else {
          continue;
        }
      } else if (symbol === "subtract") {
        if (isValidOperation(current, newNum, symbol, minResult, maxResult)) {
          current -= newNum;
        } else {
          continue;
        }
      } else if (symbol === "multiply") {
        if (isValidOperation(current, newNum, symbol, minResult, maxResult)) {
          current *= newNum;
        } else {
          continue;
        }
      } else if (symbol === "divide") {
        if (isValidOperation(current, newNum, symbol, minResult, maxResult)) {
          current /= newNum;
        } else {
          continue;
        }
      }
      tiles++;
      puzzle.symbols[symbol]++;
      puzzle.tiles.push(newNum);
      puzzle.solution.push({
        tile1: temp,
        symbol: symbol,
        tile2: newNum,
      });
    }
    puzzle.bigNumber = current;
    console.log(puzzle);
  }
};

const generateRandomDigit = () => {
  return Math.ceil(Math.random() * 9);
};

const generateRandomSymbol = () => {
  const symbols = ["add", "subtract", "multiply", "divide", "divide"];
  const chooseSymbol = Math.floor(Math.random() * 5);
  return symbols[chooseSymbol];
};

const isValidOperation = (num1, num2, symbol, minResult, maxResult) => {
  let result;
  if (symbol === "add") {
    result = num1 + num2;
  } else if (symbol === "subtract") {
    result = num1 - num2;
  } else if (symbol === "multiply") {
    result = num1 * num2;
  } else if (symbol === "divide") {
    if (num1 % num2 !== 0) {
      return false;
    }
    result = num1 / num2;
  }
  return result <= maxResult && result >= minResult;
};

generatePuzzles("hard", 50, 1, 100);
