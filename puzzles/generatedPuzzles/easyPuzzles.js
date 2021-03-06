export const easyPuzzles = {
  1: {
    bigNumber: 18,
    tiles: [5, 2, 1, 6],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "subtract", tile2: 2, remainingTiles: [6, 1, 3] },
      { tile1: 6, symbol: "multiply", tile2: 3, remainingTiles: [1, 18] },
      { tile1: 18, symbol: "multiply", tile2: 1, remainingTiles: [18] },
    ],
  },
  2: {
    bigNumber: 24,
    tiles: [9, 7, 3, 7],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 7, remainingTiles: [9, 3, 1] },
      { tile1: 9, symbol: "subtract", tile2: 1, remainingTiles: [3, 8] },
      { tile1: 3, symbol: "multiply", tile2: 8, remainingTiles: [24] },
    ],
  },
  3: {
    bigNumber: 9,
    tiles: [3, 3, 6, 9],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 3, remainingTiles: [6, 9, 6] },
      { tile1: 9, symbol: "multiply", tile2: 6, remainingTiles: [6, 54] },
      { tile1: 54, symbol: "divide", tile2: 6, remainingTiles: [9] },
    ],
  },
  4: {
    bigNumber: 2,
    tiles: [2, 4, 8, 1],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [2, 1, 2] },
      { tile1: 2, symbol: "divide", tile2: 2, remainingTiles: [1, 1] },
      { tile1: 1, symbol: "add", tile2: 1, remainingTiles: [2] },
    ],
  },
  5: {
    bigNumber: 22,
    tiles: [8, 3, 8, 6],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 3, remainingTiles: [8, 6, 5] },
      { tile1: 6, symbol: "multiply", tile2: 5, remainingTiles: [8, 30] },
      { tile1: 30, symbol: "subtract", tile2: 8, remainingTiles: [22] },
    ],
  },
  6: {
    bigNumber: 2,
    tiles: [2, 6, 7, 8],
    symbols: { add: 0, subtract: 2, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 2, remainingTiles: [6, 8, 5] },
      { tile1: 8, symbol: "subtract", tile2: 5, remainingTiles: [6, 3] },
      { tile1: 6, symbol: "divide", tile2: 3, remainingTiles: [2] },
    ],
  },
  7: {
    bigNumber: 3,
    tiles: [6, 1, 3, 6],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 3, remainingTiles: [6, 1, 18] },
      { tile1: 18, symbol: "divide", tile2: 6, remainingTiles: [1, 3] },
      { tile1: 3, symbol: "multiply", tile2: 1, remainingTiles: [3] },
    ],
  },
  8: {
    bigNumber: 14,
    tiles: [2, 7, 2, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 2, remainingTiles: [1, 2, 14] },
      { tile1: 2, symbol: "subtract", tile2: 1, remainingTiles: [14, 1] },
      { tile1: 14, symbol: "divide", tile2: 1, remainingTiles: [14] },
    ],
  },
  9: {
    bigNumber: 54,
    tiles: [6, 9, 9, 9],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 9, symbol: "divide", tile2: 9, remainingTiles: [6, 9, 1] },
      { tile1: 6, symbol: "multiply", tile2: 9, remainingTiles: [1, 54] },
      { tile1: 54, symbol: "divide", tile2: 1, remainingTiles: [54] },
    ],
  },
  10: {
    bigNumber: 9,
    tiles: [4, 1, 3, 7],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "subtract", tile2: 1, remainingTiles: [4, 7, 2] },
      { tile1: 7, symbol: "add", tile2: 4, remainingTiles: [2, 11] },
      { tile1: 11, symbol: "subtract", tile2: 2, remainingTiles: [9] },
    ],
  },
  11: {
    bigNumber: 52,
    tiles: [9, 3, 8, 5],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 5, remainingTiles: [9, 3, 40] },
      { tile1: 3, symbol: "add", tile2: 9, remainingTiles: [40, 12] },
      { tile1: 12, symbol: "add", tile2: 40, remainingTiles: [52] },
    ],
  },
  12: {
    bigNumber: 6,
    tiles: [7, 2, 5, 7],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [7, 7, 7] },
      { tile1: 7, symbol: "divide", tile2: 7, remainingTiles: [7, 1] },
      { tile1: 7, symbol: "subtract", tile2: 1, remainingTiles: [6] },
    ],
  },
  13: {
    bigNumber: 32,
    tiles: [6, 9, 9, 8],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 9, remainingTiles: [6, 8, 18] },
      { tile1: 6, symbol: "add", tile2: 8, remainingTiles: [18, 14] },
      { tile1: 14, symbol: "add", tile2: 18, remainingTiles: [32] },
    ],
  },
  14: {
    bigNumber: 10,
    tiles: [1, 3, 3, 1],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 1, remainingTiles: [3, 3, 1] },
      { tile1: 3, symbol: "multiply", tile2: 3, remainingTiles: [1, 9] },
      { tile1: 9, symbol: "add", tile2: 1, remainingTiles: [10] },
    ],
  },
  15: {
    bigNumber: 24,
    tiles: [5, 4, 5, 3],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "multiply", tile2: 5, remainingTiles: [4, 5, 15] },
      { tile1: 4, symbol: "add", tile2: 15, remainingTiles: [5, 19] },
      { tile1: 19, symbol: "add", tile2: 5, remainingTiles: [24] },
    ],
  },
  16: {
    bigNumber: 39,
    tiles: [8, 6, 1, 9],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 6, remainingTiles: [9, 1, 48] },
      { tile1: 48, symbol: "multiply", tile2: 1, remainingTiles: [9, 48] },
      { tile1: 48, symbol: "subtract", tile2: 9, remainingTiles: [39] },
    ],
  },
  17: {
    bigNumber: 23,
    tiles: [6, 8, 2, 7],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 6, remainingTiles: [2, 7, 14] },
      { tile1: 14, symbol: "add", tile2: 7, remainingTiles: [2, 21] },
      { tile1: 21, symbol: "add", tile2: 2, remainingTiles: [23] },
    ],
  },
  18: {
    bigNumber: 5,
    tiles: [2, 6, 7, 9],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 7, remainingTiles: [2, 6, 2] },
      { tile1: 6, symbol: "divide", tile2: 2, remainingTiles: [2, 3] },
      { tile1: 3, symbol: "add", tile2: 2, remainingTiles: [5] },
    ],
  },
  19: {
    bigNumber: 14,
    tiles: [6, 1, 1, 7],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 7, remainingTiles: [6, 1, 7] },
      { tile1: 1, symbol: "add", tile2: 7, remainingTiles: [6, 8] },
      { tile1: 6, symbol: "add", tile2: 8, remainingTiles: [14] },
    ],
  },
  20: {
    bigNumber: 5,
    tiles: [7, 7, 2, 6],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 7, remainingTiles: [6, 2, 1] },
      { tile1: 1, symbol: "add", tile2: 6, remainingTiles: [2, 7] },
      { tile1: 7, symbol: "subtract", tile2: 2, remainingTiles: [5] },
    ],
  },
  21: {
    bigNumber: 1,
    tiles: [6, 4, 1, 3],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 3, remainingTiles: [4, 1, 2] },
      { tile1: 2, symbol: "add", tile2: 1, remainingTiles: [4, 3] },
      { tile1: 4, symbol: "subtract", tile2: 3, remainingTiles: [1] },
    ],
  },
  22: {
    bigNumber: 24,
    tiles: [4, 4, 2, 3],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 3, symbol: "multiply", tile2: 4, remainingTiles: [2, 4, 12] },
      { tile1: 12, symbol: "divide", tile2: 2, remainingTiles: [4, 6] },
      { tile1: 4, symbol: "multiply", tile2: 6, remainingTiles: [24] },
    ],
  },
  23: {
    bigNumber: 23,
    tiles: [3, 4, 1, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 5, remainingTiles: [3, 1, 20] },
      { tile1: 3, symbol: "add", tile2: 20, remainingTiles: [1, 23] },
      { tile1: 23, symbol: "multiply", tile2: 1, remainingTiles: [23] },
    ],
  },
  24: {
    bigNumber: 3,
    tiles: [7, 9, 2, 6],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 7, remainingTiles: [2, 6, 16] },
      { tile1: 16, symbol: "add", tile2: 2, remainingTiles: [6, 18] },
      { tile1: 18, symbol: "divide", tile2: 6, remainingTiles: [3] },
    ],
  },
  25: {
    bigNumber: 9,
    tiles: [5, 4, 7, 7],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 5, remainingTiles: [7, 7, 9] },
      { tile1: 9, symbol: "subtract", tile2: 7, remainingTiles: [7, 2] },
      { tile1: 2, symbol: "add", tile2: 7, remainingTiles: [9] },
    ],
  },
  26: {
    bigNumber: 1,
    tiles: [4, 2, 4, 2],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 4, symbol: "subtract", tile2: 2, remainingTiles: [4, 2, 2] },
      { tile1: 2, symbol: "multiply", tile2: 2, remainingTiles: [4, 4] },
      { tile1: 4, symbol: "divide", tile2: 4, remainingTiles: [1] },
    ],
  },
  27: {
    bigNumber: 35,
    tiles: [5, 9, 6, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 9, remainingTiles: [5, 4, 15] },
      { tile1: 4, symbol: "multiply", tile2: 5, remainingTiles: [15, 20] },
      { tile1: 20, symbol: "add", tile2: 15, remainingTiles: [35] },
    ],
  },
  28: {
    bigNumber: 3,
    tiles: [6, 5, 3, 4],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "subtract", tile2: 4, remainingTiles: [6, 3, 1] },
      { tile1: 3, symbol: "multiply", tile2: 1, remainingTiles: [6, 3] },
      { tile1: 6, symbol: "subtract", tile2: 3, remainingTiles: [3] },
    ],
  },
  29: {
    bigNumber: 67,
    tiles: [6, 8, 7, 2],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 8, remainingTiles: [7, 6, 10] },
      { tile1: 6, symbol: "multiply", tile2: 10, remainingTiles: [7, 60] },
      { tile1: 60, symbol: "add", tile2: 7, remainingTiles: [67] },
    ],
  },
  30: {
    bigNumber: 7,
    tiles: [1, 2, 1, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "divide", tile2: 1, remainingTiles: [1, 2, 5] },
      { tile1: 1, symbol: "multiply", tile2: 5, remainingTiles: [2, 5] },
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [7] },
    ],
  },
  31: {
    bigNumber: 2,
    tiles: [2, 6, 8, 2],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 2, remainingTiles: [2, 6, 10] },
      { tile1: 10, symbol: "subtract", tile2: 6, remainingTiles: [2, 4] },
      { tile1: 4, symbol: "divide", tile2: 2, remainingTiles: [2] },
    ],
  },
  32: {
    bigNumber: 12,
    tiles: [1, 5, 5, 2],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 5, remainingTiles: [1, 2, 10] },
      { tile1: 2, symbol: "multiply", tile2: 1, remainingTiles: [10, 2] },
      { tile1: 2, symbol: "add", tile2: 10, remainingTiles: [12] },
    ],
  },
  33: {
    bigNumber: 17,
    tiles: [9, 8, 7, 6],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 6, remainingTiles: [8, 9, 1] },
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [9, 8] },
      { tile1: 9, symbol: "add", tile2: 8, remainingTiles: [17] },
    ],
  },
  34: {
    bigNumber: 9,
    tiles: [4, 8, 7, 1],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [7, 1, 2] },
      { tile1: 2, symbol: "divide", tile2: 1, remainingTiles: [7, 2] },
      { tile1: 2, symbol: "add", tile2: 7, remainingTiles: [9] },
    ],
  },
  35: {
    bigNumber: 59,
    tiles: [9, 5, 1, 6],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 5, remainingTiles: [6, 9, 5] },
      { tile1: 6, symbol: "multiply", tile2: 9, remainingTiles: [5, 54] },
      { tile1: 54, symbol: "add", tile2: 5, remainingTiles: [59] },
    ],
  },
  36: {
    bigNumber: 1,
    tiles: [9, 9, 2, 2],
    symbols: { add: 0, subtract: 2, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "divide", tile2: 2, remainingTiles: [9, 9, 1] },
      { tile1: 9, symbol: "subtract", tile2: 1, remainingTiles: [9, 8] },
      { tile1: 9, symbol: "subtract", tile2: 8, remainingTiles: [1] },
    ],
  },
  37: {
    bigNumber: 5,
    tiles: [7, 6, 4, 8],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 7, remainingTiles: [6, 4, 15] },
      { tile1: 4, symbol: "add", tile2: 6, remainingTiles: [15, 10] },
      { tile1: 15, symbol: "subtract", tile2: 10, remainingTiles: [5] },
    ],
  },
  38: {
    bigNumber: 12,
    tiles: [3, 1, 6, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 3, remainingTiles: [1, 5, 2] },
      { tile1: 1, symbol: "add", tile2: 5, remainingTiles: [2, 6] },
      { tile1: 6, symbol: "multiply", tile2: 2, remainingTiles: [12] },
    ],
  },
  39: {
    bigNumber: 25,
    tiles: [7, 6, 9, 3],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 6, remainingTiles: [7, 3, 54] },
      { tile1: 54, symbol: "divide", tile2: 3, remainingTiles: [7, 18] },
      { tile1: 18, symbol: "add", tile2: 7, remainingTiles: [25] },
    ],
  },
  40: {
    bigNumber: 8,
    tiles: [4, 2, 4, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "divide", tile2: 1, remainingTiles: [4, 4, 2] },
      { tile1: 4, symbol: "subtract", tile2: 2, remainingTiles: [4, 2] },
      { tile1: 2, symbol: "multiply", tile2: 4, remainingTiles: [8] },
    ],
  },
  41: {
    bigNumber: 8,
    tiles: [1, 9, 7, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "divide", tile2: 1, remainingTiles: [8, 7, 9] },
      { tile1: 9, symbol: "subtract", tile2: 8, remainingTiles: [7, 1] },
      { tile1: 7, symbol: "add", tile2: 1, remainingTiles: [8] },
    ],
  },
  42: {
    bigNumber: 14,
    tiles: [2, 3, 2, 2],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 2, remainingTiles: [2, 2, 5] },
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [2, 7] },
      { tile1: 2, symbol: "multiply", tile2: 7, remainingTiles: [14] },
    ],
  },
  43: {
    bigNumber: 8,
    tiles: [8, 3, 9, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 6, remainingTiles: [9, 8, 9] },
      { tile1: 9, symbol: "divide", tile2: 9, remainingTiles: [8, 1] },
      { tile1: 8, symbol: "multiply", tile2: 1, remainingTiles: [8] },
    ],
  },
  44: {
    bigNumber: 21,
    tiles: [5, 1, 7, 9],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 9, remainingTiles: [1, 7, 14] },
      { tile1: 7, symbol: "add", tile2: 14, remainingTiles: [1, 21] },
      { tile1: 21, symbol: "divide", tile2: 1, remainingTiles: [21] },
    ],
  },
  45: {
    bigNumber: 2,
    tiles: [9, 7, 2, 3],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 9, remainingTiles: [3, 7, 11] },
      { tile1: 11, symbol: "add", tile2: 3, remainingTiles: [7, 14] },
      { tile1: 14, symbol: "divide", tile2: 7, remainingTiles: [2] },
    ],
  },
  46: {
    bigNumber: 3,
    tiles: [7, 7, 2, 2],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 7, remainingTiles: [2, 2, 1] },
      { tile1: 2, symbol: "subtract", tile2: 1, remainingTiles: [2, 1] },
      { tile1: 1, symbol: "add", tile2: 2, remainingTiles: [3] },
    ],
  },
  47: {
    bigNumber: 14,
    tiles: [7, 2, 9, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 8, remainingTiles: [7, 2, 1] },
      { tile1: 2, symbol: "divide", tile2: 1, remainingTiles: [7, 2] },
      { tile1: 7, symbol: "multiply", tile2: 2, remainingTiles: [14] },
    ],
  },
  48: {
    bigNumber: 64,
    tiles: [7, 1, 7, 8],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 8, remainingTiles: [7, 1, 56] },
      { tile1: 56, symbol: "add", tile2: 7, remainingTiles: [1, 63] },
      { tile1: 63, symbol: "add", tile2: 1, remainingTiles: [64] },
    ],
  },
  49: {
    bigNumber: 14,
    tiles: [2, 9, 3, 5],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 2, remainingTiles: [3, 5, 7] },
      { tile1: 5, symbol: "subtract", tile2: 3, remainingTiles: [7, 2] },
      { tile1: 2, symbol: "multiply", tile2: 7, remainingTiles: [14] },
    ],
  },
  50: {
    bigNumber: 16,
    tiles: [5, 4, 8, 1],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 4, remainingTiles: [1, 8, 9] },
      { tile1: 8, symbol: "subtract", tile2: 1, remainingTiles: [9, 7] },
      { tile1: 9, symbol: "add", tile2: 7, remainingTiles: [16] },
    ],
  },
  51: {
    bigNumber: 29,
    tiles: [3, 5, 8, 1],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [8, 5, 3] },
      { tile1: 3, symbol: "multiply", tile2: 8, remainingTiles: [5, 24] },
      { tile1: 24, symbol: "add", tile2: 5, remainingTiles: [29] },
    ],
  },
  52: {
    bigNumber: 38,
    tiles: [8, 2, 9, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 8, remainingTiles: [2, 4, 17] },
      { tile1: 2, symbol: "multiply", tile2: 17, remainingTiles: [4, 34] },
      { tile1: 4, symbol: "add", tile2: 34, remainingTiles: [38] },
    ],
  },
  53: {
    bigNumber: 70,
    tiles: [9, 1, 7, 1],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [7, 1, 10] },
      { tile1: 7, symbol: "multiply", tile2: 1, remainingTiles: [10, 7] },
      { tile1: 10, symbol: "multiply", tile2: 7, remainingTiles: [70] },
    ],
  },
  54: {
    bigNumber: 9,
    tiles: [4, 3, 1, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 4, symbol: "subtract", tile2: 1, remainingTiles: [1, 3, 3] },
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [3, 3] },
      { tile1: 3, symbol: "multiply", tile2: 3, remainingTiles: [9] },
    ],
  },
  55: {
    bigNumber: 8,
    tiles: [1, 7, 8, 6],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 1, remainingTiles: [8, 6, 6] },
      { tile1: 6, symbol: "divide", tile2: 6, remainingTiles: [8, 1] },
      { tile1: 8, symbol: "multiply", tile2: 1, remainingTiles: [8] },
    ],
  },
  56: {
    bigNumber: 1,
    tiles: [3, 2, 9, 5],
    symbols: { add: 0, subtract: 1, multiply: 0, divide: 2 },
    solution: [
      { tile1: 5, symbol: "subtract", tile2: 2, remainingTiles: [3, 9, 3] },
      { tile1: 9, symbol: "divide", tile2: 3, remainingTiles: [3, 3] },
      { tile1: 3, symbol: "divide", tile2: 3, remainingTiles: [1] },
    ],
  },
  57: {
    bigNumber: 17,
    tiles: [6, 3, 7, 1],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 1, remainingTiles: [7, 3, 7] },
      { tile1: 7, symbol: "add", tile2: 3, remainingTiles: [7, 10] },
      { tile1: 7, symbol: "add", tile2: 10, remainingTiles: [17] },
    ],
  },
  58: {
    bigNumber: 37,
    tiles: [9, 1, 2, 8],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 9, remainingTiles: [1, 2, 72] },
      { tile1: 72, symbol: "divide", tile2: 2, remainingTiles: [1, 36] },
      { tile1: 36, symbol: "add", tile2: 1, remainingTiles: [37] },
    ],
  },
  59: {
    bigNumber: 1,
    tiles: [2, 3, 5, 6],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 3, remainingTiles: [6, 2, 8] },
      { tile1: 6, symbol: "add", tile2: 2, remainingTiles: [8, 8] },
      { tile1: 8, symbol: "divide", tile2: 8, remainingTiles: [1] },
    ],
  },
  60: {
    bigNumber: 15,
    tiles: [5, 7, 5, 2],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 7, remainingTiles: [2, 5, 12] },
      { tile1: 12, symbol: "add", tile2: 5, remainingTiles: [2, 17] },
      { tile1: 17, symbol: "subtract", tile2: 2, remainingTiles: [15] },
    ],
  },
  61: {
    bigNumber: 14,
    tiles: [7, 7, 1, 1],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 1, remainingTiles: [7, 1, 7] },
      { tile1: 1, symbol: "multiply", tile2: 7, remainingTiles: [7, 7] },
      { tile1: 7, symbol: "add", tile2: 7, remainingTiles: [14] },
    ],
  },
  62: {
    bigNumber: 23,
    tiles: [2, 4, 7, 7],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 4, remainingTiles: [7, 2, 28] },
      { tile1: 28, symbol: "add", tile2: 2, remainingTiles: [7, 30] },
      { tile1: 30, symbol: "subtract", tile2: 7, remainingTiles: [23] },
    ],
  },
  63: {
    bigNumber: 8,
    tiles: [6, 1, 1, 1],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 1, remainingTiles: [1, 1, 7] },
      { tile1: 1, symbol: "add", tile2: 7, remainingTiles: [1, 8] },
      { tile1: 8, symbol: "multiply", tile2: 1, remainingTiles: [8] },
    ],
  },
  64: {
    bigNumber: 12,
    tiles: [5, 6, 6, 2],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 6, symbol: "subtract", tile2: 5, remainingTiles: [2, 6, 1] },
      { tile1: 2, symbol: "multiply", tile2: 6, remainingTiles: [1, 12] },
      { tile1: 1, symbol: "multiply", tile2: 12, remainingTiles: [12] },
    ],
  },
  65: {
    bigNumber: 27,
    tiles: [8, 6, 7, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 6, remainingTiles: [7, 6, 14] },
      { tile1: 7, symbol: "add", tile2: 14, remainingTiles: [6, 21] },
      { tile1: 6, symbol: "add", tile2: 21, remainingTiles: [27] },
    ],
  },
  66: {
    bigNumber: 4,
    tiles: [1, 8, 3, 4],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [8, 4, 3] },
      { tile1: 3, symbol: "multiply", tile2: 4, remainingTiles: [8, 12] },
      { tile1: 12, symbol: "subtract", tile2: 8, remainingTiles: [4] },
    ],
  },
  67: {
    bigNumber: 50,
    tiles: [7, 7, 9, 8],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 7, remainingTiles: [8, 9, 49] },
      { tile1: 9, symbol: "add", tile2: 49, remainingTiles: [8, 58] },
      { tile1: 58, symbol: "subtract", tile2: 8, remainingTiles: [50] },
    ],
  },
  68: {
    bigNumber: 44,
    tiles: [2, 5, 6, 9],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 2, remainingTiles: [6, 9, 10] },
      { tile1: 6, symbol: "multiply", tile2: 9, remainingTiles: [10, 54] },
      { tile1: 54, symbol: "subtract", tile2: 10, remainingTiles: [44] },
    ],
  },
  69: {
    bigNumber: 1,
    tiles: [4, 3, 8, 8],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [3, 8, 12] },
      { tile1: 8, symbol: "add", tile2: 3, remainingTiles: [12, 11] },
      { tile1: 12, symbol: "subtract", tile2: 11, remainingTiles: [1] },
    ],
  },
  70: {
    bigNumber: 8,
    tiles: [3, 2, 9, 9],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 9, remainingTiles: [3, 2, 18] },
      { tile1: 18, symbol: "divide", tile2: 3, remainingTiles: [2, 6] },
      { tile1: 2, symbol: "add", tile2: 6, remainingTiles: [8] },
    ],
  },
  71: {
    bigNumber: 30,
    tiles: [2, 9, 7, 5],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 2, remainingTiles: [5, 7, 18] },
      { tile1: 18, symbol: "add", tile2: 7, remainingTiles: [5, 25] },
      { tile1: 25, symbol: "add", tile2: 5, remainingTiles: [30] },
    ],
  },
  72: {
    bigNumber: 16,
    tiles: [6, 1, 3, 8],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 6, remainingTiles: [3, 8, 6] },
      { tile1: 6, symbol: "divide", tile2: 3, remainingTiles: [8, 2] },
      { tile1: 8, symbol: "multiply", tile2: 2, remainingTiles: [16] },
    ],
  },
  73: {
    bigNumber: 69,
    tiles: [9, 2, 8, 6],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 2, remainingTiles: [9, 6, 10] },
      { tile1: 6, symbol: "multiply", tile2: 10, remainingTiles: [9, 60] },
      { tile1: 60, symbol: "add", tile2: 9, remainingTiles: [69] },
    ],
  },
  74: {
    bigNumber: 36,
    tiles: [7, 8, 3, 5],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 3, remainingTiles: [7, 5, 24] },
      { tile1: 24, symbol: "add", tile2: 7, remainingTiles: [5, 31] },
      { tile1: 31, symbol: "add", tile2: 5, remainingTiles: [36] },
    ],
  },
  75: {
    bigNumber: 43,
    tiles: [5, 4, 2, 6],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 4, remainingTiles: [5, 6, 8] },
      { tile1: 8, symbol: "multiply", tile2: 6, remainingTiles: [5, 48] },
      { tile1: 48, symbol: "subtract", tile2: 5, remainingTiles: [43] },
    ],
  },
  76: {
    bigNumber: 30,
    tiles: [6, 4, 2, 2],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "divide", tile2: 2, remainingTiles: [6, 4, 1] },
      { tile1: 4, symbol: "add", tile2: 1, remainingTiles: [6, 5] },
      { tile1: 6, symbol: "multiply", tile2: 5, remainingTiles: [30] },
    ],
  },
  77: {
    bigNumber: 9,
    tiles: [8, 1, 8, 7],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7, remainingTiles: [1, 8, 1] },
      { tile1: 8, symbol: "add", tile2: 1, remainingTiles: [1, 9] },
      { tile1: 9, symbol: "divide", tile2: 1, remainingTiles: [9] },
    ],
  },
  78: {
    bigNumber: 72,
    tiles: [8, 8, 4, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 4, remainingTiles: [5, 8, 32] },
      { tile1: 5, symbol: "multiply", tile2: 8, remainingTiles: [32, 40] },
      { tile1: 40, symbol: "add", tile2: 32, remainingTiles: [72] },
    ],
  },
  79: {
    bigNumber: 12,
    tiles: [6, 1, 2, 1],
    symbols: { add: 0, subtract: 0, multiply: 3, divide: 0 },
    solution: [
      { tile1: 2, symbol: "multiply", tile2: 1, remainingTiles: [6, 1, 2] },
      { tile1: 1, symbol: "multiply", tile2: 6, remainingTiles: [2, 6] },
      { tile1: 6, symbol: "multiply", tile2: 2, remainingTiles: [12] },
    ],
  },
  80: {
    bigNumber: 1,
    tiles: [4, 1, 6, 2],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 2, remainingTiles: [4, 1, 3] },
      { tile1: 4, symbol: "subtract", tile2: 3, remainingTiles: [1, 1] },
      { tile1: 1, symbol: "multiply", tile2: 1, remainingTiles: [1] },
    ],
  },
  81: {
    bigNumber: 26,
    tiles: [8, 4, 8, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 5, remainingTiles: [8, 4, 13] },
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [13, 2] },
      { tile1: 2, symbol: "multiply", tile2: 13, remainingTiles: [26] },
    ],
  },
  82: {
    bigNumber: 32,
    tiles: [1, 8, 1, 4],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [4, 1, 8] },
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [4, 8] },
      { tile1: 4, symbol: "multiply", tile2: 8, remainingTiles: [32] },
    ],
  },
  83: {
    bigNumber: 13,
    tiles: [2, 6, 1, 4],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 1, remainingTiles: [6, 2, 5] },
      { tile1: 5, symbol: "add", tile2: 6, remainingTiles: [2, 11] },
      { tile1: 2, symbol: "add", tile2: 11, remainingTiles: [13] },
    ],
  },
  84: {
    bigNumber: 36,
    tiles: [2, 9, 4, 7],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 7, remainingTiles: [2, 4, 16] },
      { tile1: 16, symbol: "multiply", tile2: 2, remainingTiles: [4, 32] },
      { tile1: 4, symbol: "add", tile2: 32, remainingTiles: [36] },
    ],
  },
  85: {
    bigNumber: 68,
    tiles: [8, 4, 1, 9],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 9, remainingTiles: [1, 4, 17] },
      { tile1: 17, symbol: "multiply", tile2: 4, remainingTiles: [1, 68] },
      { tile1: 68, symbol: "divide", tile2: 1, remainingTiles: [68] },
    ],
  },
  86: {
    bigNumber: 8,
    tiles: [7, 3, 4, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [7, 3, 2] },
      { tile1: 7, symbol: "subtract", tile2: 2, remainingTiles: [3, 5] },
      { tile1: 3, symbol: "add", tile2: 5, remainingTiles: [8] },
    ],
  },
  87: {
    bigNumber: 4,
    tiles: [6, 5, 1, 5],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 1, remainingTiles: [5, 5, 6] },
      { tile1: 5, symbol: "add", tile2: 5, remainingTiles: [6, 10] },
      { tile1: 10, symbol: "subtract", tile2: 6, remainingTiles: [4] },
    ],
  },
  88: {
    bigNumber: 61,
    tiles: [1, 7, 6, 9],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 7, remainingTiles: [6, 9, 7] },
      { tile1: 9, symbol: "multiply", tile2: 6, remainingTiles: [7, 54] },
      { tile1: 7, symbol: "add", tile2: 54, remainingTiles: [61] },
    ],
  },
  89: {
    bigNumber: 20,
    tiles: [7, 7, 3, 3],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 7, remainingTiles: [7, 3, 10] },
      { tile1: 7, symbol: "add", tile2: 10, remainingTiles: [3, 17] },
      { tile1: 3, symbol: "add", tile2: 17, remainingTiles: [20] },
    ],
  },
  90: {
    bigNumber: 13,
    tiles: [9, 7, 5, 2],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 5, remainingTiles: [2, 9, 2] },
      { tile1: 2, symbol: "multiply", tile2: 2, remainingTiles: [9, 4] },
      { tile1: 9, symbol: "add", tile2: 4, remainingTiles: [13] },
    ],
  },
  91: {
    bigNumber: 12,
    tiles: [2, 6, 7, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 6, symbol: "divide", tile2: 2, remainingTiles: [7, 8, 3] },
      { tile1: 8, symbol: "subtract", tile2: 3, remainingTiles: [7, 5] },
      { tile1: 5, symbol: "add", tile2: 7, remainingTiles: [12] },
    ],
  },
  92: {
    bigNumber: 1,
    tiles: [2, 3, 1, 6],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [2, 6, 3] },
      { tile1: 2, symbol: "multiply", tile2: 3, remainingTiles: [6, 6] },
      { tile1: 6, symbol: "divide", tile2: 6, remainingTiles: [1] },
    ],
  },
  93: {
    bigNumber: 33,
    tiles: [3, 9, 6, 4],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 4, remainingTiles: [6, 3, 36] },
      { tile1: 3, symbol: "add", tile2: 36, remainingTiles: [6, 39] },
      { tile1: 39, symbol: "subtract", tile2: 6, remainingTiles: [33] },
    ],
  },
  94: {
    bigNumber: 10,
    tiles: [3, 1, 4, 3],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 3, remainingTiles: [4, 1, 6] },
      { tile1: 6, symbol: "multiply", tile2: 1, remainingTiles: [4, 6] },
      { tile1: 6, symbol: "add", tile2: 4, remainingTiles: [10] },
    ],
  },
  95: {
    bigNumber: 10,
    tiles: [2, 9, 4, 3],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 4, symbol: "divide", tile2: 2, remainingTiles: [3, 9, 2] },
      { tile1: 3, symbol: "subtract", tile2: 2, remainingTiles: [9, 1] },
      { tile1: 9, symbol: "add", tile2: 1, remainingTiles: [10] },
    ],
  },
  96: {
    bigNumber: 3,
    tiles: [6, 3, 6, 6],
    symbols: { add: 0, subtract: 1, multiply: 0, divide: 2 },
    solution: [
      { tile1: 6, symbol: "subtract", tile2: 3, remainingTiles: [6, 6, 3] },
      { tile1: 6, symbol: "divide", tile2: 6, remainingTiles: [3, 1] },
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [3] },
    ],
  },
  97: {
    bigNumber: 53,
    tiles: [9, 8, 9, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 9, remainingTiles: [9, 8, 36] },
      { tile1: 8, symbol: "add", tile2: 9, remainingTiles: [36, 17] },
      { tile1: 17, symbol: "add", tile2: 36, remainingTiles: [53] },
    ],
  },
  98: {
    bigNumber: 26,
    tiles: [4, 9, 7, 1],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 4, remainingTiles: [9, 7, 5] },
      { tile1: 7, symbol: "multiply", tile2: 5, remainingTiles: [9, 35] },
      { tile1: 35, symbol: "subtract", tile2: 9, remainingTiles: [26] },
    ],
  },
  99: {
    bigNumber: 31,
    tiles: [4, 7, 8, 8],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 8, remainingTiles: [7, 8, 32] },
      { tile1: 8, symbol: "subtract", tile2: 7, remainingTiles: [32, 1] },
      { tile1: 32, symbol: "subtract", tile2: 1, remainingTiles: [31] },
    ],
  },
  100: {
    bigNumber: 35,
    tiles: [9, 4, 8, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 8, remainingTiles: [4, 9, 40] },
      { tile1: 40, symbol: "subtract", tile2: 9, remainingTiles: [4, 31] },
      { tile1: 31, symbol: "add", tile2: 4, remainingTiles: [35] },
    ],
  },
  101: {
    bigNumber: 1,
    tiles: [8, 8, 4, 4],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [4, 8, 12] },
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [12, 12] },
      { tile1: 12, symbol: "divide", tile2: 12, remainingTiles: [1] },
    ],
  },
  102: {
    bigNumber: 63,
    tiles: [4, 4, 7, 9],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 9, remainingTiles: [4, 7, 13] },
      { tile1: 13, symbol: "subtract", tile2: 4, remainingTiles: [7, 9] },
      { tile1: 7, symbol: "multiply", tile2: 9, remainingTiles: [63] },
    ],
  },
  103: {
    bigNumber: 15,
    tiles: [1, 1, 2, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 2, remainingTiles: [1, 5, 2] },
      { tile1: 2, symbol: "add", tile2: 1, remainingTiles: [5, 3] },
      { tile1: 5, symbol: "multiply", tile2: 3, remainingTiles: [15] },
    ],
  },
  104: {
    bigNumber: 46,
    tiles: [1, 8, 7, 9],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 8, remainingTiles: [9, 1, 56] },
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [56, 10] },
      { tile1: 56, symbol: "subtract", tile2: 10, remainingTiles: [46] },
    ],
  },
  105: {
    bigNumber: 45,
    tiles: [3, 6, 7, 6],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 6, remainingTiles: [6, 3, 42] },
      { tile1: 42, symbol: "subtract", tile2: 3, remainingTiles: [6, 39] },
      { tile1: 39, symbol: "add", tile2: 6, remainingTiles: [45] },
    ],
  },
  106: {
    bigNumber: 58,
    tiles: [7, 4, 5, 6],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 6, remainingTiles: [7, 4, 30] },
      { tile1: 7, symbol: "multiply", tile2: 4, remainingTiles: [30, 28] },
      { tile1: 30, symbol: "add", tile2: 28, remainingTiles: [58] },
    ],
  },
  107: {
    bigNumber: 15,
    tiles: [7, 8, 3, 2],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 3, remainingTiles: [8, 2, 21] },
      { tile1: 21, symbol: "subtract", tile2: 8, remainingTiles: [2, 13] },
      { tile1: 2, symbol: "add", tile2: 13, remainingTiles: [15] },
    ],
  },
  108: {
    bigNumber: 6,
    tiles: [5, 4, 6, 2],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 2, remainingTiles: [5, 6, 6] },
      { tile1: 6, symbol: "subtract", tile2: 5, remainingTiles: [6, 1] },
      { tile1: 6, symbol: "divide", tile2: 1, remainingTiles: [6] },
    ],
  },
  109: {
    bigNumber: 3,
    tiles: [7, 2, 4, 8],
    symbols: { add: 0, subtract: 3, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7, remainingTiles: [4, 2, 1] },
      { tile1: 2, symbol: "subtract", tile2: 1, remainingTiles: [4, 1] },
      { tile1: 4, symbol: "subtract", tile2: 1, remainingTiles: [3] },
    ],
  },
  110: {
    bigNumber: 23,
    tiles: [8, 1, 7, 3],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "subtract", tile2: 1, remainingTiles: [7, 8, 2] },
      { tile1: 8, symbol: "multiply", tile2: 2, remainingTiles: [7, 16] },
      { tile1: 7, symbol: "add", tile2: 16, remainingTiles: [23] },
    ],
  },
  111: {
    bigNumber: 15,
    tiles: [3, 4, 8, 8],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 8, remainingTiles: [4, 8, 11] },
      { tile1: 11, symbol: "subtract", tile2: 4, remainingTiles: [8, 7] },
      { tile1: 7, symbol: "add", tile2: 8, remainingTiles: [15] },
    ],
  },
  112: {
    bigNumber: 7,
    tiles: [8, 6, 4, 5],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 4, remainingTiles: [5, 6, 12] },
      { tile1: 12, symbol: "divide", tile2: 6, remainingTiles: [5, 2] },
      { tile1: 5, symbol: "add", tile2: 2, remainingTiles: [7] },
    ],
  },
  113: {
    bigNumber: 2,
    tiles: [9, 4, 2, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 2, remainingTiles: [9, 4, 10] },
      { tile1: 9, symbol: "subtract", tile2: 4, remainingTiles: [10, 5] },
      { tile1: 10, symbol: "divide", tile2: 5, remainingTiles: [2] },
    ],
  },
  114: {
    bigNumber: 47,
    tiles: [8, 1, 9, 7],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "multiply", tile2: 8, remainingTiles: [1, 9, 56] },
      { tile1: 56, symbol: "subtract", tile2: 9, remainingTiles: [1, 47] },
      { tile1: 47, symbol: "divide", tile2: 1, remainingTiles: [47] },
    ],
  },
  115: {
    bigNumber: 6,
    tiles: [1, 6, 8, 4],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 1, remainingTiles: [6, 8, 4] },
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [6, 12] },
      { tile1: 12, symbol: "subtract", tile2: 6, remainingTiles: [6] },
    ],
  },
  116: {
    bigNumber: 30,
    tiles: [2, 4, 7, 6],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 4, remainingTiles: [2, 6, 3] },
      { tile1: 2, symbol: "add", tile2: 3, remainingTiles: [6, 5] },
      { tile1: 5, symbol: "multiply", tile2: 6, remainingTiles: [30] },
    ],
  },
  117: {
    bigNumber: 2,
    tiles: [1, 2, 4, 4],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 4, remainingTiles: [4, 2, 4] },
      { tile1: 4, symbol: "multiply", tile2: 2, remainingTiles: [4, 8] },
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [2] },
    ],
  },
  118: {
    bigNumber: 20,
    tiles: [4, 2, 7, 1],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 4, symbol: "subtract", tile2: 1, remainingTiles: [7, 2, 3] },
      { tile1: 7, symbol: "add", tile2: 3, remainingTiles: [2, 10] },
      { tile1: 2, symbol: "multiply", tile2: 10, remainingTiles: [20] },
    ],
  },
  119: {
    bigNumber: 25,
    tiles: [6, 3, 4, 4],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 4, remainingTiles: [4, 3, 24] },
      { tile1: 4, symbol: "subtract", tile2: 3, remainingTiles: [24, 1] },
      { tile1: 1, symbol: "add", tile2: 24, remainingTiles: [25] },
    ],
  },
  120: {
    bigNumber: 52,
    tiles: [4, 8, 5, 9],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 8, symbol: "multiply", tile2: 9, remainingTiles: [4, 5, 72] },
      { tile1: 4, symbol: "multiply", tile2: 5, remainingTiles: [72, 20] },
      { tile1: 72, symbol: "subtract", tile2: 20, remainingTiles: [52] },
    ],
  },
  121: {
    bigNumber: 52,
    tiles: [3, 3, 7, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 3, remainingTiles: [7, 3, 15] },
      { tile1: 15, symbol: "multiply", tile2: 3, remainingTiles: [7, 45] },
      { tile1: 45, symbol: "add", tile2: 7, remainingTiles: [52] },
    ],
  },
  122: {
    bigNumber: 8,
    tiles: [2, 3, 3, 8],
    symbols: { add: 0, subtract: 1, multiply: 0, divide: 2 },
    solution: [
      { tile1: 3, symbol: "divide", tile2: 3, remainingTiles: [8, 2, 1] },
      { tile1: 2, symbol: "subtract", tile2: 1, remainingTiles: [8, 1] },
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [8] },
    ],
  },
  123: {
    bigNumber: 3,
    tiles: [3, 4, 8, 5],
    symbols: { add: 0, subtract: 2, multiply: 0, divide: 1 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 4, remainingTiles: [5, 3, 4] },
      { tile1: 5, symbol: "subtract", tile2: 4, remainingTiles: [3, 1] },
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [3] },
    ],
  },
  124: {
    bigNumber: 9,
    tiles: [5, 1, 8, 4],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 8, remainingTiles: [4, 5, 8] },
      { tile1: 8, symbol: "add", tile2: 5, remainingTiles: [4, 13] },
      { tile1: 13, symbol: "subtract", tile2: 4, remainingTiles: [9] },
    ],
  },
  125: {
    bigNumber: 9,
    tiles: [7, 1, 6, 9],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [6, 7, 10] },
      { tile1: 10, symbol: "subtract", tile2: 7, remainingTiles: [6, 3] },
      { tile1: 6, symbol: "add", tile2: 3, remainingTiles: [9] },
    ],
  },
  126: {
    bigNumber: 17,
    tiles: [7, 2, 2, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 6, remainingTiles: [2, 2, 13] },
      { tile1: 2, symbol: "add", tile2: 13, remainingTiles: [2, 15] },
      { tile1: 2, symbol: "add", tile2: 15, remainingTiles: [17] },
    ],
  },
  127: {
    bigNumber: 30,
    tiles: [3, 5, 9, 1],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 3, remainingTiles: [5, 1, 6] },
      { tile1: 5, symbol: "multiply", tile2: 1, remainingTiles: [6, 5] },
      { tile1: 6, symbol: "multiply", tile2: 5, remainingTiles: [30] },
    ],
  },
  128: {
    bigNumber: 10,
    tiles: [3, 5, 7, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 7, symbol: "subtract", tile2: 3, remainingTiles: [8, 5, 4] },
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [5, 2] },
      { tile1: 2, symbol: "multiply", tile2: 5, remainingTiles: [10] },
    ],
  },
  129: {
    bigNumber: 17,
    tiles: [5, 8, 9, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "divide", tile2: 5, remainingTiles: [8, 9, 1] },
      { tile1: 8, symbol: "add", tile2: 9, remainingTiles: [1, 17] },
      { tile1: 1, symbol: "multiply", tile2: 17, remainingTiles: [17] },
    ],
  },
  130: {
    bigNumber: 45,
    tiles: [9, 5, 5, 2],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 5, remainingTiles: [2, 9, 10] },
      { tile1: 10, symbol: "divide", tile2: 2, remainingTiles: [9, 5] },
      { tile1: 5, symbol: "multiply", tile2: 9, remainingTiles: [45] },
    ],
  },
  131: {
    bigNumber: 21,
    tiles: [6, 6, 9, 7],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 6, remainingTiles: [6, 7, 3] },
      { tile1: 6, symbol: "subtract", tile2: 3, remainingTiles: [7, 3] },
      { tile1: 3, symbol: "multiply", tile2: 7, remainingTiles: [21] },
    ],
  },
  132: {
    bigNumber: 10,
    tiles: [4, 3, 3, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 6, symbol: "multiply", tile2: 3, remainingTiles: [3, 4, 18] },
      { tile1: 18, symbol: "divide", tile2: 3, remainingTiles: [4, 6] },
      { tile1: 6, symbol: "add", tile2: 4, remainingTiles: [10] },
    ],
  },
  133: {
    bigNumber: 25,
    tiles: [9, 6, 4, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 5, symbol: "multiply", tile2: 6, remainingTiles: [4, 9, 30] },
      { tile1: 30, symbol: "subtract", tile2: 9, remainingTiles: [4, 21] },
      { tile1: 21, symbol: "add", tile2: 4, remainingTiles: [25] },
    ],
  },
  134: {
    bigNumber: 8,
    tiles: [1, 2, 1, 7],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 1, remainingTiles: [2, 7, 2] },
      { tile1: 2, symbol: "divide", tile2: 2, remainingTiles: [7, 1] },
      { tile1: 1, symbol: "add", tile2: 7, remainingTiles: [8] },
    ],
  },
  135: {
    bigNumber: 32,
    tiles: [8, 6, 4, 4],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 4, symbol: "multiply", tile2: 4, remainingTiles: [6, 8, 16] },
      { tile1: 8, symbol: "multiply", tile2: 6, remainingTiles: [16, 48] },
      { tile1: 48, symbol: "subtract", tile2: 16, remainingTiles: [32] },
    ],
  },
  136: {
    bigNumber: 9,
    tiles: [8, 1, 9, 7],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 8, symbol: "subtract", tile2: 7, remainingTiles: [1, 9, 1] },
      { tile1: 9, symbol: "divide", tile2: 1, remainingTiles: [1, 9] },
      { tile1: 1, symbol: "multiply", tile2: 9, remainingTiles: [9] },
    ],
  },
  137: {
    bigNumber: 15,
    tiles: [7, 9, 8, 9],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 9, symbol: "divide", tile2: 9, remainingTiles: [8, 7, 1] },
      { tile1: 8, symbol: "multiply", tile2: 1, remainingTiles: [7, 8] },
      { tile1: 8, symbol: "add", tile2: 7, remainingTiles: [15] },
    ],
  },
  138: {
    bigNumber: 26,
    tiles: [6, 7, 5, 3],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 3, remainingTiles: [5, 7, 9] },
      { tile1: 7, symbol: "multiply", tile2: 5, remainingTiles: [9, 35] },
      { tile1: 35, symbol: "subtract", tile2: 9, remainingTiles: [26] },
    ],
  },
  139: {
    bigNumber: 2,
    tiles: [6, 5, 7, 9],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 9, remainingTiles: [5, 6, 16] },
      { tile1: 16, symbol: "subtract", tile2: 6, remainingTiles: [5, 10] },
      { tile1: 10, symbol: "divide", tile2: 5, remainingTiles: [2] },
    ],
  },
  140: {
    bigNumber: 16,
    tiles: [8, 8, 7, 7],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 7, remainingTiles: [8, 8, 1] },
      { tile1: 8, symbol: "add", tile2: 8, remainingTiles: [1, 16] },
      { tile1: 16, symbol: "divide", tile2: 1, remainingTiles: [16] },
    ],
  },
  141: {
    bigNumber: 68,
    tiles: [9, 6, 9, 5],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "multiply", tile2: 6, remainingTiles: [5, 9, 54] },
      { tile1: 5, symbol: "add", tile2: 54, remainingTiles: [9, 59] },
      { tile1: 9, symbol: "add", tile2: 59, remainingTiles: [68] },
    ],
  },
  142: {
    bigNumber: 1,
    tiles: [3, 5, 1, 2],
    symbols: { add: 0, subtract: 1, multiply: 0, divide: 2 },
    solution: [
      { tile1: 5, symbol: "subtract", tile2: 2, remainingTiles: [1, 3, 3] },
      { tile1: 3, symbol: "divide", tile2: 1, remainingTiles: [3, 3] },
      { tile1: 3, symbol: "divide", tile2: 3, remainingTiles: [1] },
    ],
  },
  143: {
    bigNumber: 19,
    tiles: [1, 5, 4, 6],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "multiply", tile2: 4, remainingTiles: [6, 5, 4] },
      { tile1: 4, symbol: "multiply", tile2: 6, remainingTiles: [5, 24] },
      { tile1: 24, symbol: "subtract", tile2: 5, remainingTiles: [19] },
    ],
  },
  144: {
    bigNumber: 12,
    tiles: [4, 3, 9, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      { tile1: 9, symbol: "subtract", tile2: 3, remainingTiles: [8, 4, 6] },
      { tile1: 8, symbol: "multiply", tile2: 6, remainingTiles: [4, 48] },
      { tile1: 48, symbol: "divide", tile2: 4, remainingTiles: [12] },
    ],
  },
  145: {
    bigNumber: 7,
    tiles: [1, 3, 3, 7],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      { tile1: 7, symbol: "divide", tile2: 1, remainingTiles: [3, 3, 7] },
      { tile1: 3, symbol: "divide", tile2: 3, remainingTiles: [7, 1] },
      { tile1: 7, symbol: "multiply", tile2: 1, remainingTiles: [7] },
    ],
  },
  146: {
    bigNumber: 19,
    tiles: [8, 5, 1, 6],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 5, remainingTiles: [8, 1, 11] },
      { tile1: 11, symbol: "multiply", tile2: 1, remainingTiles: [8, 11] },
      { tile1: 8, symbol: "add", tile2: 11, remainingTiles: [19] },
    ],
  },
  147: {
    bigNumber: 16,
    tiles: [3, 1, 7, 6],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 3, remainingTiles: [1, 6, 10] },
      { tile1: 10, symbol: "divide", tile2: 1, remainingTiles: [6, 10] },
      { tile1: 6, symbol: "add", tile2: 10, remainingTiles: [16] },
    ],
  },
  148: {
    bigNumber: 6,
    tiles: [3, 7, 3, 3],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      { tile1: 3, symbol: "multiply", tile2: 3, remainingTiles: [3, 7, 9] },
      { tile1: 9, symbol: "subtract", tile2: 7, remainingTiles: [3, 2] },
      { tile1: 3, symbol: "multiply", tile2: 2, remainingTiles: [6] },
    ],
  },
  149: {
    bigNumber: 15,
    tiles: [3, 3, 9, 1],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 3, remainingTiles: [9, 1, 6] },
      { tile1: 9, symbol: "multiply", tile2: 1, remainingTiles: [6, 9] },
      { tile1: 9, symbol: "add", tile2: 6, remainingTiles: [15] },
    ],
  },
  150: {
    bigNumber: 15,
    tiles: [9, 4, 1, 9],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [4, 9, 10] },
      { tile1: 9, symbol: "add", tile2: 10, remainingTiles: [4, 19] },
      { tile1: 19, symbol: "subtract", tile2: 4, remainingTiles: [15] },
    ],
  },
};
