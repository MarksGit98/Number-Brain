const Modes = {
  easy: 4,
  medium: 5,
  hard: 6,
};

const generatePuzzles = (mode, puzzleCount, minResult, maxResult) => {
  let size = 0;
  let puzzles = {};
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
    puzzle.tiles.push(current);
    while (puzzle.tiles.length < Modes[mode]) {
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
      puzzle.symbols[symbol]++;
      puzzle.tiles.push(newNum);
      puzzle.solution.push({
        tile1: temp,
        symbol: symbol,
        tile2: newNum,
      });
    }
    puzzle.bigNumber = current;
    puzzle.tiles = shuffle(puzzle.tiles);
    let sortedTiles = [...puzzle.tiles];
    sortedTiles.sort();
    sortedTiles.push(puzzle.bigNumber);
    const key = sortedTiles.join("-");
    if (!(key in puzzles)) {
      puzzles[key] = puzzle;
      size++;
    } else {
      puzzleCount++;
    }
    // console.log(puzzle);
  }
  // console.log(size);
  return puzzles;
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
const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const finalizePuzzlesForLevels = (puzzles) => {
  const levels = {};
  let level = 1;
  for (const [key, value] of Object.entries(puzzles)) {
    levels[level++] = value;
  }
  return levels;
};

console.log(
  JSON.stringify(finalizePuzzlesForLevels(generatePuzzles("easy", 200, 1, 100)))
);
// console.log(generatePuzzles("hard", 1000, 1, 100));
