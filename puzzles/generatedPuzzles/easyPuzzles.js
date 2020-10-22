export const easyPuzzles = {
  1: {
    bigNumber: 1,
    tiles: [1, 9, 7, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 7 },
      { tile1: 8, symbol: "add", tile2: 1 },
      { tile1: 9, symbol: "divide", tile2: 9 },
    ],
  },
  2: {
    bigNumber: 21,
    tiles: [2, 2, 7, 3],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 2 },
      { tile1: 14, symbol: "divide", tile2: 2 },
      { tile1: 7, symbol: "multiply", tile2: 3 },
    ],
  },
  3: {
    bigNumber: 36,
    tiles: [8, 3, 9, 6],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 8 },
      { tile1: 48, symbol: "subtract", tile2: 9 },
      { tile1: 39, symbol: "subtract", tile2: 3 },
    ],
  },
  4: {
    bigNumber: 18,
    tiles: [9, 7, 2, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 7 },
      { tile1: 9, symbol: "add", tile2: 9 },
      { tile1: 18, symbol: "divide", tile2: 1 },
    ],
  },
  5: {
    bigNumber: 20,
    tiles: [7, 1, 5, 8],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 7 },
      { tile1: 12, symbol: "add", tile2: 8 },
      { tile1: 20, symbol: "divide", tile2: 1 },
    ],
  },
  6: {
    bigNumber: 35,
    tiles: [9, 3, 7, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 6 },
      { tile1: 15, symbol: "divide", tile2: 3 },
      { tile1: 5, symbol: "multiply", tile2: 7 },
    ],
  },
  7: {
    bigNumber: 5,
    tiles: [4, 4, 1, 5],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 5 },
      { tile1: 20, symbol: "divide", tile2: 1 },
      { tile1: 20, symbol: "divide", tile2: 4 },
    ],
  },
  8: {
    bigNumber: 9,
    tiles: [9, 7, 5, 5],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 5 },
      { tile1: 25, symbol: "subtract", tile2: 9 },
      { tile1: 16, symbol: "subtract", tile2: 7 },
    ],
  },
  9: {
    bigNumber: 2,
    tiles: [3, 2, 1, 3],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 3 },
      { tile1: 1, symbol: "multiply", tile2: 1 },
      { tile1: 1, symbol: "multiply", tile2: 2 },
    ],
  },
  10: {
    bigNumber: 12,
    tiles: [2, 3, 7, 6],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 6, symbol: "subtract", tile2: 3 },
      { tile1: 3, symbol: "add", tile2: 7 },
      { tile1: 10, symbol: "add", tile2: 2 },
    ],
  },
  11: {
    bigNumber: 4,
    tiles: [5, 2, 1, 9],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 9 },
      { tile1: 10, symbol: "divide", tile2: 5 },
      { tile1: 2, symbol: "add", tile2: 2 },
    ],
  },
  12: {
    bigNumber: 4,
    tiles: [9, 6, 8, 7],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 8 },
      { tile1: 17, symbol: "subtract", tile2: 7 },
      { tile1: 10, symbol: "subtract", tile2: 6 },
    ],
  },
  13: {
    bigNumber: 11,
    tiles: [8, 1, 1, 3],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 1 },
      { tile1: 3, symbol: "add", tile2: 8 },
      { tile1: 11, symbol: "divide", tile2: 1 },
    ],
  },
  14: {
    bigNumber: 7,
    tiles: [3, 4, 7, 7],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 7 },
      { tile1: 10, symbol: "add", tile2: 4 },
      { tile1: 14, symbol: "subtract", tile2: 7 },
    ],
  },
  15: {
    bigNumber: 10,
    tiles: [3, 7, 1, 7],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 7 },
      { tile1: 14, symbol: "subtract", tile2: 1 },
      { tile1: 13, symbol: "subtract", tile2: 3 },
    ],
  },
  16: {
    bigNumber: 8,
    tiles: [8, 8, 3, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 5 },
      { tile1: 8, symbol: "divide", tile2: 8 },
      { tile1: 1, symbol: "multiply", tile2: 8 },
    ],
  },
  17: {
    bigNumber: 3,
    tiles: [5, 3, 3, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 5 },
      { tile1: 3, symbol: "divide", tile2: 3 },
      { tile1: 1, symbol: "multiply", tile2: 3 },
    ],
  },
  18: {
    bigNumber: 4,
    tiles: [3, 3, 4, 1],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 4, symbol: "divide", tile2: 1 },
      { tile1: 4, symbol: "multiply", tile2: 3 },
      { tile1: 12, symbol: "divide", tile2: 3 },
    ],
  },
  19: {
    bigNumber: 1,
    tiles: [5, 4, 9, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 8 },
      { tile1: 1, symbol: "add", tile2: 4 },
      { tile1: 5, symbol: "divide", tile2: 5 },
    ],
  },
  20: {
    bigNumber: 4,
    tiles: [9, 8, 2, 3],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 8 },
      { tile1: 11, symbol: "subtract", tile2: 9 },
      { tile1: 2, symbol: "add", tile2: 2 },
    ],
  },
  21: {
    bigNumber: 4,
    tiles: [5, 5, 9, 4],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 5 },
      { tile1: 10, symbol: "subtract", tile2: 9 },
      { tile1: 1, symbol: "multiply", tile2: 4 },
    ],
  },
  22: {
    bigNumber: 6,
    tiles: [5, 2, 5, 7],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 2 },
      { tile1: 7, symbol: "divide", tile2: 7 },
      { tile1: 1, symbol: "add", tile2: 5 },
    ],
  },
  23: {
    bigNumber: 5,
    tiles: [2, 7, 4, 4],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 4 },
      { tile1: 3, symbol: "add", tile2: 4 },
      { tile1: 7, symbol: "subtract", tile2: 2 },
    ],
  },
  24: {
    bigNumber: 27,
    tiles: [3, 6, 6, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 6 },
      { tile1: 11, symbol: "multiply", tile2: 3 },
      { tile1: 33, symbol: "subtract", tile2: 6 },
    ],
  },
  25: {
    bigNumber: 23,
    tiles: [2, 1, 4, 3],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 4 },
      { tile1: 8, symbol: "multiply", tile2: 3 },
      { tile1: 24, symbol: "subtract", tile2: 1 },
    ],
  },
  26: {
    bigNumber: 26,
    tiles: [4, 5, 7, 2],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 4 },
      { tile1: 20, symbol: "subtract", tile2: 7 },
      { tile1: 13, symbol: "multiply", tile2: 2 },
    ],
  },
  27: {
    bigNumber: 8,
    tiles: [6, 4, 8, 2],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 6 },
      { tile1: 14, symbol: "subtract", tile2: 4 },
      { tile1: 10, symbol: "subtract", tile2: 2 },
    ],
  },
  28: {
    bigNumber: 2,
    tiles: [8, 5, 5, 7],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 5 },
      { tile1: 2, symbol: "add", tile2: 8 },
      { tile1: 10, symbol: "divide", tile2: 5 },
    ],
  },
  29: {
    bigNumber: 13,
    tiles: [1, 1, 8, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 8 },
      { tile1: 9, symbol: "add", tile2: 4 },
      { tile1: 13, symbol: "multiply", tile2: 1 },
    ],
  },
  30: {
    bigNumber: 6,
    tiles: [8, 6, 4, 2],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 4 },
      { tile1: 2, symbol: "divide", tile2: 2 },
      { tile1: 1, symbol: "multiply", tile2: 6 },
    ],
  },
  31: {
    bigNumber: 26,
    tiles: [2, 1, 9, 7],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 2 },
      { tile1: 18, symbol: "add", tile2: 1 },
      { tile1: 19, symbol: "add", tile2: 7 },
    ],
  },
  32: {
    bigNumber: 30,
    tiles: [7, 1, 4, 3],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 4 },
      { tile1: 11, symbol: "subtract", tile2: 1 },
      { tile1: 10, symbol: "multiply", tile2: 3 },
    ],
  },
  33: {
    bigNumber: 1,
    tiles: [6, 8, 2, 1],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 6 },
      { tile1: 8, symbol: "divide", tile2: 8 },
      { tile1: 1, symbol: "divide", tile2: 1 },
    ],
  },
  34: {
    bigNumber: 3,
    tiles: [7, 1, 6, 4],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 4, symbol: "divide", tile2: 1 },
      { tile1: 4, symbol: "add", tile2: 6 },
      { tile1: 10, symbol: "subtract", tile2: 7 },
    ],
  },
  35: {
    bigNumber: 30,
    tiles: [4, 7, 9, 1],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 9 },
      { tile1: 36, symbol: "add", tile2: 1 },
      { tile1: 37, symbol: "subtract", tile2: 7 },
    ],
  },
  36: {
    bigNumber: 38,
    tiles: [5, 6, 1, 8],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 6 },
      { tile1: 30, symbol: "divide", tile2: 1 },
      { tile1: 30, symbol: "add", tile2: 8 },
    ],
  },
  37: {
    bigNumber: 16,
    tiles: [9, 5, 7, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 7 },
      { tile1: 35, symbol: "divide", tile2: 5 },
      { tile1: 7, symbol: "add", tile2: 9 },
    ],
  },
  38: {
    bigNumber: 18,
    tiles: [2, 3, 3, 9],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 9 },
      { tile1: 18, symbol: "subtract", tile2: 3 },
      { tile1: 15, symbol: "add", tile2: 3 },
    ],
  },
  39: {
    bigNumber: 4,
    tiles: [2, 4, 3, 2],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 2 },
      { tile1: 4, symbol: "subtract", tile2: 3 },
      { tile1: 1, symbol: "multiply", tile2: 4 },
    ],
  },
  40: {
    bigNumber: 5,
    tiles: [4, 4, 1, 6],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 4 },
      { tile1: 10, symbol: "subtract", tile2: 1 },
      { tile1: 9, symbol: "subtract", tile2: 4 },
    ],
  },
  41: {
    bigNumber: 23,
    tiles: [2, 2, 8, 6],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 8 },
      { tile1: 48, symbol: "subtract", tile2: 2 },
      { tile1: 46, symbol: "divide", tile2: 2 },
    ],
  },
  42: {
    bigNumber: 40,
    tiles: [8, 8, 5, 7],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7 },
      { tile1: 1, symbol: "multiply", tile2: 8 },
      { tile1: 8, symbol: "multiply", tile2: 5 },
    ],
  },
  43: {
    bigNumber: 9,
    tiles: [6, 1, 3, 3],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 1 },
      { tile1: 6, symbol: "subtract", tile2: 3 },
      { tile1: 3, symbol: "multiply", tile2: 3 },
    ],
  },
  44: {
    bigNumber: 23,
    tiles: [9, 8, 3, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 9 },
      { tile1: 45, symbol: "divide", tile2: 3 },
      { tile1: 15, symbol: "add", tile2: 8 },
    ],
  },
  45: {
    bigNumber: 15,
    tiles: [4, 9, 2, 7],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 9 },
      { tile1: 18, symbol: "add", tile2: 4 },
      { tile1: 22, symbol: "subtract", tile2: 7 },
    ],
  },
  46: {
    bigNumber: 11,
    tiles: [9, 6, 3, 7],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 3 },
      { tile1: 9, symbol: "subtract", tile2: 7 },
      { tile1: 2, symbol: "add", tile2: 9 },
    ],
  },
  47: {
    bigNumber: 36,
    tiles: [1, 1, 4, 6],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 4 },
      { tile1: 5, symbol: "add", tile2: 1 },
      { tile1: 6, symbol: "multiply", tile2: 6 },
    ],
  },
  48: {
    bigNumber: 3,
    tiles: [6, 6, 1, 3],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 6 },
      { tile1: 1, symbol: "divide", tile2: 1 },
      { tile1: 1, symbol: "multiply", tile2: 3 },
    ],
  },
  49: {
    bigNumber: 23,
    tiles: [6, 8, 1, 9],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 1 },
      { tile1: 6, symbol: "add", tile2: 8 },
      { tile1: 14, symbol: "add", tile2: 9 },
    ],
  },
  50: {
    bigNumber: 1,
    tiles: [4, 4, 2, 2],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 4, symbol: "divide", tile2: 4 },
      { tile1: 1, symbol: "multiply", tile2: 2 },
      { tile1: 2, symbol: "divide", tile2: 2 },
    ],
  },
  51: {
    bigNumber: 9,
    tiles: [4, 3, 4, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 3 },
      { tile1: 9, symbol: "multiply", tile2: 4 },
      { tile1: 36, symbol: "divide", tile2: 4 },
    ],
  },
  52: {
    bigNumber: 8,
    tiles: [4, 2, 6, 4],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 6 },
      { tile1: 24, symbol: "divide", tile2: 2 },
      { tile1: 12, symbol: "subtract", tile2: 4 },
    ],
  },
  53: {
    bigNumber: 45,
    tiles: [5, 3, 5, 8],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 5 },
      { tile1: 3, symbol: "multiply", tile2: 5 },
      { tile1: 15, symbol: "multiply", tile2: 3 },
    ],
  },
  54: {
    bigNumber: 1,
    tiles: [5, 5, 5, 6],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 6 },
      { tile1: 30, symbol: "divide", tile2: 5 },
      { tile1: 6, symbol: "subtract", tile2: 5 },
    ],
  },
  55: {
    bigNumber: 19,
    tiles: [1, 7, 9, 2],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 1 },
      { tile1: 8, symbol: "add", tile2: 9 },
      { tile1: 17, symbol: "add", tile2: 2 },
    ],
  },
  56: {
    bigNumber: 25,
    tiles: [5, 1, 2, 3],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 3 },
      { tile1: 5, symbol: "divide", tile2: 1 },
      { tile1: 5, symbol: "multiply", tile2: 5 },
    ],
  },
  57: {
    bigNumber: 1,
    tiles: [4, 1, 1, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 1 },
      { tile1: 1, symbol: "add", tile2: 4 },
      { tile1: 5, symbol: "divide", tile2: 5 },
    ],
  },
  58: {
    bigNumber: 48,
    tiles: [6, 8, 7, 8],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7 },
      { tile1: 1, symbol: "multiply", tile2: 6 },
      { tile1: 6, symbol: "multiply", tile2: 8 },
    ],
  },
  59: {
    bigNumber: 13,
    tiles: [6, 1, 1, 1],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 1 },
      { tile1: 2, symbol: "multiply", tile2: 6 },
      { tile1: 12, symbol: "add", tile2: 1 },
    ],
  },
  60: {
    bigNumber: 7,
    tiles: [2, 5, 2, 2],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "divide", tile2: 2 },
      { tile1: 1, symbol: "multiply", tile2: 5 },
      { tile1: 5, symbol: "add", tile2: 2 },
    ],
  },
  61: {
    bigNumber: 6,
    tiles: [2, 8, 2, 8],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 2 },
      { tile1: 4, symbol: "add", tile2: 8 },
      { tile1: 12, symbol: "divide", tile2: 2 },
    ],
  },
  62: {
    bigNumber: 25,
    tiles: [9, 2, 1, 7],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "divide", tile2: 1 },
      { tile1: 2, symbol: "multiply", tile2: 9 },
      { tile1: 18, symbol: "add", tile2: 7 },
    ],
  },
  63: {
    bigNumber: 47,
    tiles: [5, 9, 1, 2],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 9 },
      { tile1: 45, symbol: "add", tile2: 2 },
      { tile1: 47, symbol: "multiply", tile2: 1 },
    ],
  },
  64: {
    bigNumber: 9,
    tiles: [1, 6, 2, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 1, symbol: "divide", tile2: 1 },
      { tile1: 1, symbol: "add", tile2: 2 },
      { tile1: 3, symbol: "add", tile2: 6 },
    ],
  },
  65: {
    bigNumber: 28,
    tiles: [7, 9, 2, 2],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 7 },
      { tile1: 16, symbol: "subtract", tile2: 2 },
      { tile1: 14, symbol: "multiply", tile2: 2 },
    ],
  },
  66: {
    bigNumber: 28,
    tiles: [2, 2, 4, 6],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 2 },
      { tile1: 8, symbol: "add", tile2: 6 },
      { tile1: 14, symbol: "multiply", tile2: 2 },
    ],
  },
  67: {
    bigNumber: 5,
    tiles: [1, 2, 5, 2],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 5 },
      { tile1: 7, symbol: "divide", tile2: 1 },
      { tile1: 7, symbol: "subtract", tile2: 2 },
    ],
  },
  68: {
    bigNumber: 11,
    tiles: [1, 5, 4, 1],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 5 },
      { tile1: 6, symbol: "add", tile2: 4 },
      { tile1: 10, symbol: "add", tile2: 1 },
    ],
  },
  69: {
    bigNumber: 41,
    tiles: [8, 4, 9, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 9 },
      { tile1: 45, symbol: "add", tile2: 4 },
      { tile1: 49, symbol: "subtract", tile2: 8 },
    ],
  },
  70: {
    bigNumber: 14,
    tiles: [7, 7, 1, 8],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7 },
      { tile1: 1, symbol: "add", tile2: 1 },
      { tile1: 2, symbol: "multiply", tile2: 7 },
    ],
  },
  71: {
    bigNumber: 5,
    tiles: [1, 1, 2, 3],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 1 },
      { tile1: 4, symbol: "subtract", tile2: 1 },
      { tile1: 3, symbol: "add", tile2: 2 },
    ],
  },
  72: {
    bigNumber: 40,
    tiles: [5, 8, 8, 8],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 8 },
      { tile1: 40, symbol: "divide", tile2: 8 },
      { tile1: 5, symbol: "multiply", tile2: 8 },
    ],
  },
  73: {
    bigNumber: 3,
    tiles: [5, 8, 3, 6],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 5 },
      { tile1: 3, symbol: "add", tile2: 6 },
      { tile1: 9, symbol: "divide", tile2: 3 },
    ],
  },
  74: {
    bigNumber: 16,
    tiles: [6, 9, 6, 7],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 6 },
      { tile1: 1, symbol: "add", tile2: 6 },
      { tile1: 7, symbol: "add", tile2: 9 },
    ],
  },
  75: {
    bigNumber: 6,
    tiles: [8, 2, 3, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 1 },
      { tile1: 4, symbol: "add", tile2: 8 },
      { tile1: 12, symbol: "divide", tile2: 2 },
    ],
  },
  76: {
    bigNumber: 5,
    tiles: [1, 1, 4, 1],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 4 },
      { tile1: 5, symbol: "divide", tile2: 1 },
      { tile1: 5, symbol: "divide", tile2: 1 },
    ],
  },
  77: {
    bigNumber: 1,
    tiles: [2, 1, 2, 1],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 1 },
      { tile1: 2, symbol: "divide", tile2: 2 },
      { tile1: 1, symbol: "multiply", tile2: 1 },
    ],
  },
  78: {
    bigNumber: 30,
    tiles: [3, 6, 5, 8],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 6 },
      { tile1: 2, symbol: "multiply", tile2: 3 },
      { tile1: 6, symbol: "multiply", tile2: 5 },
    ],
  },
  79: {
    bigNumber: 12,
    tiles: [1, 9, 7, 3],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "multiply", tile2: 7 },
      { tile1: 21, symbol: "subtract", tile2: 9 },
      { tile1: 12, symbol: "divide", tile2: 1 },
    ],
  },
  80: {
    bigNumber: 11,
    tiles: [8, 1, 5, 3],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 5 },
      { tile1: 13, symbol: "subtract", tile2: 3 },
      { tile1: 10, symbol: "add", tile2: 1 },
    ],
  },
  81: {
    bigNumber: 18,
    tiles: [3, 2, 7, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 3 },
      { tile1: 10, symbol: "add", tile2: 6 },
      { tile1: 16, symbol: "add", tile2: 2 },
    ],
  },
  82: {
    bigNumber: 37,
    tiles: [7, 1, 9, 4],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 7 },
      { tile1: 28, symbol: "add", tile2: 9 },
      { tile1: 37, symbol: "divide", tile2: 1 },
    ],
  },
  83: {
    bigNumber: 6,
    tiles: [4, 4, 1, 6],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 4, symbol: "divide", tile2: 4 },
      { tile1: 1, symbol: "divide", tile2: 1 },
      { tile1: 1, symbol: "multiply", tile2: 6 },
    ],
  },
  84: {
    bigNumber: 8,
    tiles: [6, 6, 1, 8],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 1 },
      { tile1: 6, symbol: "divide", tile2: 6 },
      { tile1: 1, symbol: "multiply", tile2: 8 },
    ],
  },
  85: {
    bigNumber: 2,
    tiles: [6, 4, 3, 3],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "multiply", tile2: 4 },
      { tile1: 12, symbol: "subtract", tile2: 6 },
      { tile1: 6, symbol: "divide", tile2: 3 },
    ],
  },
  86: {
    bigNumber: 18,
    tiles: [5, 7, 9, 7],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 7 },
      { tile1: 16, symbol: "subtract", tile2: 5 },
      { tile1: 11, symbol: "add", tile2: 7 },
    ],
  },
  87: {
    bigNumber: 13,
    tiles: [8, 4, 6, 5],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 6 },
      { tile1: 10, symbol: "add", tile2: 8 },
      { tile1: 18, symbol: "subtract", tile2: 5 },
    ],
  },
  88: {
    bigNumber: 31,
    tiles: [4, 3, 7, 2],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 7 },
      { tile1: 9, symbol: "multiply", tile2: 3 },
      { tile1: 27, symbol: "add", tile2: 4 },
    ],
  },
  89: {
    bigNumber: 21,
    tiles: [5, 3, 8, 5],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 3 },
      { tile1: 8, symbol: "add", tile2: 8 },
      { tile1: 16, symbol: "add", tile2: 5 },
    ],
  },
  90: {
    bigNumber: 26,
    tiles: [7, 4, 9, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 7 },
      { tile1: 13, symbol: "add", tile2: 4 },
      { tile1: 17, symbol: "add", tile2: 9 },
    ],
  },
  91: {
    bigNumber: 42,
    tiles: [7, 2, 5, 7],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 5 },
      { tile1: 7, symbol: "multiply", tile2: 7 },
      { tile1: 49, symbol: "subtract", tile2: 7 },
    ],
  },
  92: {
    bigNumber: 8,
    tiles: [2, 5, 6, 4],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "subtract", tile2: 4 },
      { tile1: 2, symbol: "multiply", tile2: 5 },
      { tile1: 10, symbol: "subtract", tile2: 2 },
    ],
  },
  93: {
    bigNumber: 3,
    tiles: [1, 3, 6, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 1, symbol: "divide", tile2: 1 },
      { tile1: 1, symbol: "multiply", tile2: 6 },
      { tile1: 6, symbol: "subtract", tile2: 3 },
    ],
  },
  94: {
    bigNumber: 8,
    tiles: [1, 5, 7, 4],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 5 },
      { tile1: 2, symbol: "multiply", tile2: 1 },
      { tile1: 2, symbol: "multiply", tile2: 4 },
    ],
  },
  95: {
    bigNumber: 1,
    tiles: [1, 4, 2, 9],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 1 },
      { tile1: 10, symbol: "divide", tile2: 2 },
      { tile1: 5, symbol: "subtract", tile2: 4 },
    ],
  },
  96: {
    bigNumber: 18,
    tiles: [6, 8, 4, 8],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 6 },
      { tile1: 14, symbol: "subtract", tile2: 4 },
      { tile1: 10, symbol: "add", tile2: 8 },
    ],
  },
  97: {
    bigNumber: 24,
    tiles: [2, 8, 1, 1],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 1, symbol: "divide", tile2: 1 },
      { tile1: 1, symbol: "add", tile2: 2 },
      { tile1: 3, symbol: "multiply", tile2: 8 },
    ],
  },
  98: {
    bigNumber: 18,
    tiles: [9, 3, 3, 3],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 3 },
      { tile1: 6, symbol: "divide", tile2: 3 },
      { tile1: 2, symbol: "multiply", tile2: 9 },
    ],
  },
  99: {
    bigNumber: 9,
    tiles: [2, 7, 2, 2],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 2 },
      { tile1: 4, symbol: "subtract", tile2: 2 },
      { tile1: 2, symbol: "add", tile2: 7 },
    ],
  },
  100: {
    bigNumber: 6,
    tiles: [1, 3, 2, 9],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 2 },
      { tile1: 18, symbol: "multiply", tile2: 1 },
      { tile1: 18, symbol: "divide", tile2: 3 },
    ],
  },
};
