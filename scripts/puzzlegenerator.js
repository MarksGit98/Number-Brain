const Modes = {
  easy: 4,
  medium: 5,
  hard: 6,
};

export const generatePuzzles = (mode, puzzleCount, minResult, maxResult) => {
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
    let workingTiles = [];
    for (let i = 0; i < Modes[mode]; i++) {
      workingTiles.push(generateRandomDigit());
    }
    puzzle.tiles = [...workingTiles];
    while (workingTiles.length > 1) {
      const symbol = generateRandomSymbol();
      let [tile1Index, tile2Index] = pickTwoTileIndices(workingTiles);
      while (
        tile1Index > workingTiles.length - 1 ||
        tile2Index > workingTiles.length - 1
      ) {
        [tile1Index, tile2Index] = pickTwoTileIndices(workingTiles);
      }
      if (symbol === "add") {
        if (
          isValidOperation(
            workingTiles[tile1Index],
            workingTiles[tile2Index],
            symbol,
            minResult,
            maxResult
          )
        ) {
          workingTiles.push(
            workingTiles[tile1Index] + workingTiles[tile2Index]
          );
        } else {
          continue;
        }
      } else if (symbol === "subtract") {
        if (
          isValidOperation(
            workingTiles[tile1Index],
            workingTiles[tile2Index],
            symbol,
            minResult,
            maxResult
          )
        ) {
          workingTiles.push(
            workingTiles[tile1Index] - workingTiles[tile2Index]
          );
        } else {
          continue;
        }
      } else if (symbol === "multiply") {
        if (
          isValidOperation(
            workingTiles[tile1Index],
            workingTiles[tile2Index],
            symbol,
            minResult,
            maxResult
          )
        ) {
          workingTiles.push(
            workingTiles[tile1Index] * workingTiles[tile2Index]
          );
        } else {
          continue;
        }
      } else if (symbol === "divide") {
        if (
          isValidOperation(
            workingTiles[tile1Index],
            workingTiles[tile2Index],
            symbol,
            minResult,
            maxResult
          )
        ) {
          workingTiles.push(
            workingTiles[tile1Index] / workingTiles[tile2Index]
          );
        } else {
          continue;
        }
      }
      let remainingTiles = [...workingTiles];
      if (tile1Index > tile2Index) {
        remainingTiles.splice(tile1Index, 1);
        remainingTiles.splice(tile2Index, 1);
      } else {
        remainingTiles.splice(tile2Index, 1);
        remainingTiles.splice(tile1Index, 1);
      }
      puzzle.symbols[symbol]++;
      puzzle.solution.push({
        tile1: workingTiles[tile1Index],
        symbol: symbol,
        tile2: workingTiles[tile2Index],
        remainingTiles: [...remainingTiles],
      });
      workingTiles = [...remainingTiles];
    }
    puzzle.bigNumber = workingTiles[0];
    puzzle.tiles = shuffle(puzzle.tiles);
    let sortedTiles = [...puzzle.tiles];
    sortedTiles.sort();
    sortedTiles.push(puzzle.bigNumber);
    const key = sortedTiles.join("-");
    if (!(key in puzzles)) {
      puzzles[key] = puzzle;
    } else {
      puzzleCount++;
    }
    // console.log(puzzle);
  }
  // console.log(size);
  return puzzles;
};

const pickTwoTileIndices = (listOfTiles) => {
  const tile1Index = Math.floor(Math.random() * listOfTiles.length);
  let tile2Index = tile1Index;
  while (tile1Index === tile2Index) {
    tile2Index = Math.floor(Math.random() * listOfTiles.length);
  }
  return [tile1Index, tile2Index];
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

export const GenerateSinglePuzzle = (difficulty, min, max) => {
  const puzzle = finalizePuzzlesForLevels(
    generatePuzzles(difficulty, 1, min, max)
  )["1"];
  return puzzle;
};
// console.log(generatePuzzles("hard", 1000, 1, 100));
