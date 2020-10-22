export default {
  "1-1-1-6-8": {
    bigNumber: 8,
    tiles: [1, 6, 1, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 1, remainingTiles: [6, 1, 2] },
      { tile1: 2, symbol: "add", tile2: 6, remainingTiles: [1, 8] },
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [8] },
    ],
  },
  "2-5-5-8-43": {
    bigNumber: 43,
    tiles: [2, 8, 5, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 5,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [8, 5, 3],
      },
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [3, 40],
      },
      { tile1: 3, symbol: "add", tile2: 40, remainingTiles: [43] },
    ],
  },
  "2-6-8-8-11": {
    bigNumber: 11,
    tiles: [8, 6, 2, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 2,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [8, 8, 12],
      },
      { tile1: 8, symbol: "divide", tile2: 8, remainingTiles: [12, 1] },
      { tile1: 12, symbol: "subtract", tile2: 1, remainingTiles: [11] },
    ],
  },
  "4-5-6-8-40": {
    bigNumber: 40,
    tiles: [4, 5, 6, 8],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 4, remainingTiles: [5, 8, 10] },
      {
        tile1: 10,
        symbol: "subtract",
        tile2: 5,
        remainingTiles: [8, 5],
      },
      { tile1: 8, symbol: "multiply", tile2: 5, remainingTiles: [40] },
    ],
  },
  "3-7-8-9-27": {
    bigNumber: 27,
    tiles: [8, 9, 3, 7],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 9, remainingTiles: [3, 8, 16] },
      { tile1: 16, symbol: "add", tile2: 3, remainingTiles: [8, 19] },
      { tile1: 8, symbol: "add", tile2: 19, remainingTiles: [27] },
    ],
  },
  "3-6-8-9-26": {
    bigNumber: 26,
    tiles: [9, 6, 8, 3],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 9, remainingTiles: [6, 8, 12] },
      { tile1: 8, symbol: "add", tile2: 6, remainingTiles: [12, 14] },
      { tile1: 14, symbol: "add", tile2: 12, remainingTiles: [26] },
    ],
  },
  "1-1-5-6-25": {
    bigNumber: 25,
    tiles: [5, 6, 1, 1],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 6,
        symbol: "subtract",
        tile2: 1,
        remainingTiles: [1, 5, 5],
      },
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [5, 5],
      },
      { tile1: 5, symbol: "multiply", tile2: 5, remainingTiles: [25] },
    ],
  },
  "2-4-5-6-13": {
    bigNumber: 13,
    tiles: [6, 5, 2, 4],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "divide",
        tile2: 2,
        remainingTiles: [6, 5, 2],
      },
      { tile1: 5, symbol: "add", tile2: 6, remainingTiles: [2, 11] },
      { tile1: 11, symbol: "add", tile2: 2, remainingTiles: [13] },
    ],
  },
  "2-4-8-8-8": {
    bigNumber: 8,
    tiles: [8, 4, 8, 2],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      {
        tile1: 8,
        symbol: "divide",
        tile2: 4,
        remainingTiles: [2, 8, 2],
      },
      { tile1: 2, symbol: "divide", tile2: 2, remainingTiles: [8, 1] },
      { tile1: 8, symbol: "multiply", tile2: 1, remainingTiles: [8] },
    ],
  },
  "1-4-6-9-34": {
    bigNumber: 34,
    tiles: [6, 9, 1, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [1, 9, 24],
      },
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [24, 10] },
      { tile1: 24, symbol: "add", tile2: 10, remainingTiles: [34] },
    ],
  },
  "2-2-3-6-13": {
    bigNumber: 13,
    tiles: [3, 2, 2, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 3, remainingTiles: [6, 2, 5] },
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [6, 7] },
      { tile1: 7, symbol: "add", tile2: 6, remainingTiles: [13] },
    ],
  },
  "1-2-2-3-6": {
    bigNumber: 6,
    tiles: [2, 1, 3, 2],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 2,
        symbol: "subtract",
        tile2: 1,
        remainingTiles: [2, 3, 1],
      },
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 2,
        remainingTiles: [3, 2],
      },
      { tile1: 2, symbol: "multiply", tile2: 3, remainingTiles: [6] },
    ],
  },
  "1-3-8-9-69": {
    bigNumber: 69,
    tiles: [3, 9, 1, 8],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 3,
        remainingTiles: [8, 9, 3],
      },
      {
        tile1: 9,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [3, 72],
      },
      { tile1: 72, symbol: "subtract", tile2: 3, remainingTiles: [69] },
    ],
  },
  "1-4-6-8-3": {
    bigNumber: 3,
    tiles: [1, 4, 6, 8],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [1, 8, 24],
      },
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 1,
        remainingTiles: [24, 8],
      },
      { tile1: 24, symbol: "divide", tile2: 8, remainingTiles: [3] },
    ],
  },
  "1-3-8-9-45": {
    bigNumber: 45,
    tiles: [8, 9, 1, 3],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [9, 3, 8],
      },
      {
        tile1: 8,
        symbol: "subtract",
        tile2: 3,
        remainingTiles: [9, 5],
      },
      { tile1: 9, symbol: "multiply", tile2: 5, remainingTiles: [45] },
    ],
  },
  "2-3-4-7-17": {
    bigNumber: 17,
    tiles: [2, 7, 3, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 3,
        symbol: "multiply",
        tile2: 2,
        remainingTiles: [4, 7, 6],
      },
      { tile1: 4, symbol: "add", tile2: 7, remainingTiles: [6, 11] },
      { tile1: 6, symbol: "add", tile2: 11, remainingTiles: [17] },
    ],
  },
  "1-6-7-8-50": {
    bigNumber: 50,
    tiles: [6, 1, 7, 8],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [8, 7, 6],
      },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [6, 56],
      },
      { tile1: 56, symbol: "subtract", tile2: 6, remainingTiles: [50] },
    ],
  },
  "2-5-5-9-55": {
    bigNumber: 55,
    tiles: [5, 2, 9, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 9,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [5, 2, 45],
      },
      {
        tile1: 2,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [45, 10],
      },
      { tile1: 10, symbol: "add", tile2: 45, remainingTiles: [55] },
    ],
  },
  "2-3-7-8-51": {
    bigNumber: 51,
    tiles: [3, 2, 7, 8],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 2, remainingTiles: [7, 8, 5] },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [5, 56],
      },
      { tile1: 56, symbol: "subtract", tile2: 5, remainingTiles: [51] },
    ],
  },
  "1-5-5-6-60": {
    bigNumber: 60,
    tiles: [6, 5, 5, 1],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 5, remainingTiles: [1, 6, 10] },
      {
        tile1: 10,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [6, 10],
      },
      { tile1: 10, symbol: "multiply", tile2: 6, remainingTiles: [60] },
    ],
  },
  "1-4-5-9-19": {
    bigNumber: 19,
    tiles: [4, 1, 9, 5],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 5, remainingTiles: [4, 1, 14] },
      { tile1: 1, symbol: "add", tile2: 4, remainingTiles: [14, 5] },
      { tile1: 14, symbol: "add", tile2: 5, remainingTiles: [19] },
    ],
  },
  "2-5-5-5-10": {
    bigNumber: 10,
    tiles: [2, 5, 5, 5],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 5,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [5, 5, 3],
      },
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 3,
        remainingTiles: [5, 15],
      },
      { tile1: 15, symbol: "subtract", tile2: 5, remainingTiles: [10] },
    ],
  },
  "1-2-2-7-42": {
    bigNumber: 42,
    tiles: [2, 7, 2, 1],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 2, remainingTiles: [7, 2, 3] },
      {
        tile1: 3,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [2, 21],
      },
      { tile1: 21, symbol: "multiply", tile2: 2, remainingTiles: [42] },
    ],
  },
  "4-6-6-9-4": {
    bigNumber: 4,
    tiles: [4, 6, 9, 6],
    symbols: { add: 0, subtract: 2, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 4,
        remainingTiles: [6, 6, 5],
      },
      { tile1: 6, symbol: "divide", tile2: 6, remainingTiles: [5, 1] },
      { tile1: 5, symbol: "subtract", tile2: 1, remainingTiles: [4] },
    ],
  },
  "1-5-8-9-23": {
    bigNumber: 23,
    tiles: [9, 8, 5, 1],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 8, remainingTiles: [1, 9, 13] },
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [13, 10] },
      { tile1: 13, symbol: "add", tile2: 10, remainingTiles: [23] },
    ],
  },
  "2-4-5-9-3": {
    bigNumber: 3,
    tiles: [9, 4, 5, 2],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [4, 9, 7] },
      {
        tile1: 7,
        symbol: "subtract",
        tile2: 4,
        remainingTiles: [9, 3],
      },
      { tile1: 9, symbol: "divide", tile2: 3, remainingTiles: [3] },
    ],
  },
  "1-1-7-7-49": {
    bigNumber: 49,
    tiles: [7, 1, 1, 7],
    symbols: { add: 0, subtract: 0, multiply: 2, divide: 1 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [7, 1, 7],
      },
      { tile1: 7, symbol: "divide", tile2: 1, remainingTiles: [7, 7] },
      { tile1: 7, symbol: "multiply", tile2: 7, remainingTiles: [49] },
    ],
  },
  "1-2-2-5-4": {
    bigNumber: 4,
    tiles: [2, 5, 2, 1],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 1, remainingTiles: [5, 2, 3] },
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [3, 7] },
      { tile1: 7, symbol: "subtract", tile2: 3, remainingTiles: [4] },
    ],
  },
  "4-5-5-6-1": {
    bigNumber: 1,
    tiles: [5, 6, 5, 4],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 5,
        symbol: "divide",
        tile2: 5,
        remainingTiles: [4, 6, 1],
      },
      { tile1: 4, symbol: "add", tile2: 1, remainingTiles: [6, 5] },
      { tile1: 6, symbol: "subtract", tile2: 5, remainingTiles: [1] },
    ],
  },
  "2-2-3-6-12": {
    bigNumber: 12,
    tiles: [2, 3, 2, 6],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 3,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [2, 6, 1],
      },
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [2, 6],
      },
      { tile1: 2, symbol: "multiply", tile2: 6, remainingTiles: [12] },
    ],
  },
  "4-5-5-6-31": {
    bigNumber: 31,
    tiles: [6, 5, 5, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [5, 6, 20],
      },
      { tile1: 5, symbol: "add", tile2: 6, remainingTiles: [20, 11] },
      { tile1: 20, symbol: "add", tile2: 11, remainingTiles: [31] },
    ],
  },
  "1-2-9-9-63": {
    bigNumber: 63,
    tiles: [1, 2, 9, 9],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 2,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [9, 9, 2],
      },
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [9, 7],
      },
      { tile1: 9, symbol: "multiply", tile2: 7, remainingTiles: [63] },
    ],
  },
  "3-4-8-9-39": {
    bigNumber: 39,
    tiles: [4, 9, 8, 3],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 3,
        symbol: "multiply",
        tile2: 9,
        remainingTiles: [4, 8, 27],
      },
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [27, 12] },
      { tile1: 27, symbol: "add", tile2: 12, remainingTiles: [39] },
    ],
  },
  "3-6-7-7-23": {
    bigNumber: 23,
    tiles: [7, 3, 7, 6],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 3, remainingTiles: [7, 6, 10] },
      { tile1: 10, symbol: "add", tile2: 7, remainingTiles: [6, 17] },
      { tile1: 17, symbol: "add", tile2: 6, remainingTiles: [23] },
    ],
  },
  "1-3-4-5-2": {
    bigNumber: 2,
    tiles: [4, 3, 5, 1],
    symbols: { add: 0, subtract: 1, multiply: 0, divide: 2 },
    solution: [
      {
        tile1: 5,
        symbol: "subtract",
        tile2: 3,
        remainingTiles: [1, 4, 2],
      },
      { tile1: 4, symbol: "divide", tile2: 2, remainingTiles: [1, 2] },
      { tile1: 2, symbol: "divide", tile2: 1, remainingTiles: [2] },
    ],
  },
  "1-7-8-8-64": {
    bigNumber: 64,
    tiles: [1, 8, 7, 8],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [8, 7, 8],
      },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [8, 56],
      },
      { tile1: 8, symbol: "add", tile2: 56, remainingTiles: [64] },
    ],
  },
  "3-4-5-7-53": {
    bigNumber: 53,
    tiles: [5, 4, 7, 3],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 3,
        remainingTiles: [7, 5, 12],
      },
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 12,
        remainingTiles: [7, 60],
      },
      { tile1: 60, symbol: "subtract", tile2: 7, remainingTiles: [53] },
    ],
  },
  "4-7-8-8-67": {
    bigNumber: 67,
    tiles: [4, 8, 8, 7],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [4, 7, 64],
      },
      {
        tile1: 64,
        symbol: "subtract",
        tile2: 4,
        remainingTiles: [7, 60],
      },
      { tile1: 60, symbol: "add", tile2: 7, remainingTiles: [67] },
    ],
  },
  "3-6-6-7-24": {
    bigNumber: 24,
    tiles: [7, 6, 3, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 6,
        remainingTiles: [7, 3, 1],
      },
      { tile1: 7, symbol: "add", tile2: 1, remainingTiles: [3, 8] },
      { tile1: 3, symbol: "multiply", tile2: 8, remainingTiles: [24] },
    ],
  },
  "7-8-8-9-32": {
    bigNumber: 32,
    tiles: [8, 7, 9, 8],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 8, symbol: "add", tile2: 8, remainingTiles: [7, 9, 16] },
      { tile1: 16, symbol: "add", tile2: 9, remainingTiles: [7, 25] },
      { tile1: 25, symbol: "add", tile2: 7, remainingTiles: [32] },
    ],
  },
  "3-6-7-7-10": {
    bigNumber: 10,
    tiles: [7, 7, 6, 3],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 7,
        symbol: "divide",
        tile2: 7,
        remainingTiles: [6, 3, 1],
      },
      { tile1: 1, symbol: "add", tile2: 6, remainingTiles: [3, 7] },
      { tile1: 7, symbol: "add", tile2: 3, remainingTiles: [10] },
    ],
  },
  "2-6-6-7-55": {
    bigNumber: 55,
    tiles: [7, 2, 6, 6],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 6, remainingTiles: [6, 7, 8] },
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [7, 48],
      },
      { tile1: 7, symbol: "add", tile2: 48, remainingTiles: [55] },
    ],
  },
  "3-4-6-9-11": {
    bigNumber: 11,
    tiles: [3, 4, 9, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [9, 3, 24],
      },
      { tile1: 24, symbol: "add", tile2: 9, remainingTiles: [3, 33] },
      { tile1: 33, symbol: "divide", tile2: 3, remainingTiles: [11] },
    ],
  },
  "1-2-4-5-11": {
    bigNumber: 11,
    tiles: [4, 5, 2, 1],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [4, 2, 5],
      },
      { tile1: 5, symbol: "add", tile2: 2, remainingTiles: [4, 7] },
      { tile1: 7, symbol: "add", tile2: 4, remainingTiles: [11] },
    ],
  },
  "2-3-5-6-18": {
    bigNumber: 18,
    tiles: [3, 6, 2, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [2, 3, 30],
      },
      {
        tile1: 30,
        symbol: "divide",
        tile2: 2,
        remainingTiles: [3, 15],
      },
      { tile1: 15, symbol: "add", tile2: 3, remainingTiles: [18] },
    ],
  },
  "1-4-9-9-76": {
    bigNumber: 76,
    tiles: [9, 4, 1, 9],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 1, symbol: "add", tile2: 9, remainingTiles: [4, 9, 10] },
      { tile1: 10, symbol: "add", tile2: 9, remainingTiles: [4, 19] },
      { tile1: 19, symbol: "multiply", tile2: 4, remainingTiles: [76] },
    ],
  },
  "1-1-7-8-56": {
    bigNumber: 56,
    tiles: [8, 7, 1, 1],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [1, 1, 56],
      },
      {
        tile1: 56,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [1, 56],
      },
      { tile1: 56, symbol: "divide", tile2: 1, remainingTiles: [56] },
    ],
  },
  "1-4-4-9-18": {
    bigNumber: 18,
    tiles: [9, 4, 1, 4],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 9, remainingTiles: [1, 4, 13] },
      { tile1: 4, symbol: "add", tile2: 13, remainingTiles: [1, 17] },
      { tile1: 1, symbol: "add", tile2: 17, remainingTiles: [18] },
    ],
  },
  "1-2-2-6-5": {
    bigNumber: 5,
    tiles: [2, 1, 6, 2],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [2, 2, 6],
      },
      { tile1: 6, symbol: "divide", tile2: 2, remainingTiles: [2, 3] },
      { tile1: 2, symbol: "add", tile2: 3, remainingTiles: [5] },
    ],
  },
  "4-5-8-9-16": {
    bigNumber: 16,
    tiles: [4, 8, 5, 9],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 8, remainingTiles: [5, 9, 12] },
      {
        tile1: 12,
        symbol: "subtract",
        tile2: 5,
        remainingTiles: [9, 7],
      },
      { tile1: 7, symbol: "add", tile2: 9, remainingTiles: [16] },
    ],
  },
  "1-5-7-8-43": {
    bigNumber: 43,
    tiles: [1, 5, 7, 8],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [8, 5, 7],
      },
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [8, 35],
      },
      { tile1: 8, symbol: "add", tile2: 35, remainingTiles: [43] },
    ],
  },
  "5-7-7-7-61": {
    bigNumber: 61,
    tiles: [7, 7, 7, 5],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [5, 7, 49],
      },
      { tile1: 7, symbol: "add", tile2: 5, remainingTiles: [49, 12] },
      { tile1: 49, symbol: "add", tile2: 12, remainingTiles: [61] },
    ],
  },
  "3-4-4-6-24": {
    bigNumber: 24,
    tiles: [4, 3, 4, 6],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "subtract",
        tile2: 3,
        remainingTiles: [4, 6, 1],
      },
      { tile1: 6, symbol: "divide", tile2: 1, remainingTiles: [4, 6] },
      { tile1: 4, symbol: "multiply", tile2: 6, remainingTiles: [24] },
    ],
  },
  "2-3-5-7-7": {
    bigNumber: 7,
    tiles: [5, 3, 2, 7],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 3, remainingTiles: [7, 5, 5] },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [5, 35],
      },
      { tile1: 35, symbol: "divide", tile2: 5, remainingTiles: [7] },
    ],
  },
  "1-6-6-8-54": {
    bigNumber: 54,
    tiles: [8, 6, 6, 1],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [1, 6, 48],
      },
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 48,
        remainingTiles: [6, 48],
      },
      { tile1: 48, symbol: "add", tile2: 6, remainingTiles: [54] },
    ],
  },
  "3-3-6-6-2": {
    bigNumber: 2,
    tiles: [3, 6, 6, 3],
    symbols: { add: 1, subtract: 0, multiply: 0, divide: 2 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 3, remainingTiles: [6, 3, 9] },
      { tile1: 9, symbol: "divide", tile2: 3, remainingTiles: [6, 3] },
      { tile1: 6, symbol: "divide", tile2: 3, remainingTiles: [2] },
    ],
  },
  "3-6-7-8-58": {
    bigNumber: 58,
    tiles: [8, 7, 6, 3],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [7, 3, 48],
      },
      { tile1: 48, symbol: "add", tile2: 3, remainingTiles: [7, 51] },
      { tile1: 51, symbol: "add", tile2: 7, remainingTiles: [58] },
    ],
  },
  "4-5-6-8-8": {
    bigNumber: 8,
    tiles: [6, 8, 5, 4],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [5, 8, 24],
      },
      { tile1: 24, symbol: "divide", tile2: 8, remainingTiles: [5, 3] },
      { tile1: 3, symbol: "add", tile2: 5, remainingTiles: [8] },
    ],
  },
  "2-3-7-7-55": {
    bigNumber: 55,
    tiles: [7, 7, 3, 2],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 3,
        symbol: "multiply",
        tile2: 2,
        remainingTiles: [7, 7, 6],
      },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [6, 49],
      },
      { tile1: 49, symbol: "add", tile2: 6, remainingTiles: [55] },
    ],
  },
  "1-1-2-8-8": {
    bigNumber: 8,
    tiles: [2, 8, 1, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 1,
        remainingTiles: [8, 2, 1],
      },
      {
        tile1: 2,
        symbol: "subtract",
        tile2: 1,
        remainingTiles: [8, 1],
      },
      { tile1: 8, symbol: "divide", tile2: 1, remainingTiles: [8] },
    ],
  },
  "1-8-8-9-25": {
    bigNumber: 25,
    tiles: [1, 9, 8, 8],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 8, remainingTiles: [1, 8, 17] },
      {
        tile1: 17,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [8, 17],
      },
      { tile1: 8, symbol: "add", tile2: 17, remainingTiles: [25] },
    ],
  },
  "2-3-8-9-12": {
    bigNumber: 12,
    tiles: [3, 9, 8, 2],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 8, remainingTiles: [2, 3, 17] },
      { tile1: 3, symbol: "add", tile2: 2, remainingTiles: [17, 5] },
      { tile1: 17, symbol: "subtract", tile2: 5, remainingTiles: [12] },
    ],
  },
  "1-3-5-8-10": {
    bigNumber: 10,
    tiles: [8, 3, 1, 5],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 8,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [5, 3, 8],
      },
      { tile1: 8, symbol: "add", tile2: 5, remainingTiles: [3, 13] },
      { tile1: 13, symbol: "subtract", tile2: 3, remainingTiles: [10] },
    ],
  },
  "3-6-7-7-51": {
    bigNumber: 51,
    tiles: [7, 6, 3, 7],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 3,
        remainingTiles: [7, 7, 2],
      },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [2, 49],
      },
      { tile1: 49, symbol: "add", tile2: 2, remainingTiles: [51] },
    ],
  },
  "2-4-6-7-34": {
    bigNumber: 34,
    tiles: [4, 2, 6, 7],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 6, remainingTiles: [4, 2, 13] },
      { tile1: 13, symbol: "add", tile2: 4, remainingTiles: [2, 17] },
      { tile1: 2, symbol: "multiply", tile2: 17, remainingTiles: [34] },
    ],
  },
  "2-6-8-9-24": {
    bigNumber: 24,
    tiles: [6, 8, 2, 9],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 2,
        remainingTiles: [9, 8, 3],
      },
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 9,
        remainingTiles: [3, 72],
      },
      { tile1: 72, symbol: "divide", tile2: 3, remainingTiles: [24] },
    ],
  },
  "1-5-8-8-11": {
    bigNumber: 11,
    tiles: [5, 1, 8, 8],
    symbols: { add: 1, subtract: 1, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 5,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [8, 8, 5],
      },
      {
        tile1: 8,
        symbol: "subtract",
        tile2: 5,
        remainingTiles: [8, 3],
      },
      { tile1: 8, symbol: "add", tile2: 3, remainingTiles: [11] },
    ],
  },
  "1-1-2-2-5": {
    bigNumber: 5,
    tiles: [2, 2, 1, 1],
    symbols: { add: 2, subtract: 0, multiply: 0, divide: 1 },
    solution: [
      {
        tile1: 2,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [2, 1, 2],
      },
      { tile1: 1, symbol: "add", tile2: 2, remainingTiles: [2, 3] },
      { tile1: 2, symbol: "add", tile2: 3, remainingTiles: [5] },
    ],
  },
  "4-5-6-9-35": {
    bigNumber: 35,
    tiles: [6, 5, 9, 4],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [6, 9, 20],
      },
      { tile1: 20, symbol: "add", tile2: 6, remainingTiles: [9, 26] },
      { tile1: 26, symbol: "add", tile2: 9, remainingTiles: [35] },
    ],
  },
  "3-8-8-9-97": {
    bigNumber: 97,
    tiles: [8, 3, 8, 9],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 8, remainingTiles: [9, 8, 11] },
      {
        tile1: 11,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [9, 88],
      },
      { tile1: 88, symbol: "add", tile2: 9, remainingTiles: [97] },
    ],
  },
  "1-6-8-8-58": {
    bigNumber: 58,
    tiles: [6, 8, 8, 1],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [8, 8, 6],
      },
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [6, 64],
      },
      { tile1: 64, symbol: "subtract", tile2: 6, remainingTiles: [58] },
    ],
  },
  "5-6-7-9-14": {
    bigNumber: 14,
    tiles: [9, 7, 6, 5],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 5,
        remainingTiles: [7, 6, 4],
      },
      {
        tile1: 6,
        symbol: "subtract",
        tile2: 4,
        remainingTiles: [7, 2],
      },
      { tile1: 2, symbol: "multiply", tile2: 7, remainingTiles: [14] },
    ],
  },
  "3-4-4-5-20": {
    bigNumber: 20,
    tiles: [4, 3, 4, 5],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 4,
        symbol: "subtract",
        tile2: 3,
        remainingTiles: [4, 5, 1],
      },
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [1, 20],
      },
      { tile1: 1, symbol: "multiply", tile2: 20, remainingTiles: [20] },
    ],
  },
  "3-6-6-7-22": {
    bigNumber: 22,
    tiles: [3, 6, 7, 6],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 3,
        remainingTiles: [6, 6, 21],
      },
      { tile1: 6, symbol: "divide", tile2: 6, remainingTiles: [21, 1] },
      { tile1: 21, symbol: "add", tile2: 1, remainingTiles: [22] },
    ],
  },
  "5-5-7-9-63": {
    bigNumber: 63,
    tiles: [9, 5, 7, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 9,
        remainingTiles: [5, 5, 63],
      },
      { tile1: 63, symbol: "add", tile2: 5, remainingTiles: [5, 68] },
      { tile1: 68, symbol: "subtract", tile2: 5, remainingTiles: [63] },
    ],
  },
  "1-4-5-5-40": {
    bigNumber: 40,
    tiles: [1, 5, 4, 5],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 5,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [4, 5, 5],
      },
      { tile1: 5, symbol: "add", tile2: 5, remainingTiles: [4, 10] },
      { tile1: 10, symbol: "multiply", tile2: 4, remainingTiles: [40] },
    ],
  },
  "4-6-7-8-76": {
    bigNumber: 76,
    tiles: [7, 4, 6, 8],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [7, 4, 48],
      },
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [48, 28],
      },
      { tile1: 48, symbol: "add", tile2: 28, remainingTiles: [76] },
    ],
  },
  "1-3-4-5-5": {
    bigNumber: 5,
    tiles: [4, 3, 1, 5],
    symbols: { add: 1, subtract: 2, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 5, remainingTiles: [1, 3, 9] },
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 3,
        remainingTiles: [1, 6],
      },
      { tile1: 6, symbol: "subtract", tile2: 1, remainingTiles: [5] },
    ],
  },
  "4-6-6-9-39": {
    bigNumber: 39,
    tiles: [9, 6, 4, 6],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      { tile1: 6, symbol: "add", tile2: 6, remainingTiles: [4, 9, 12] },
      {
        tile1: 12,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [9, 48],
      },
      { tile1: 48, symbol: "subtract", tile2: 9, remainingTiles: [39] },
    ],
  },
  "1-2-3-9-36": {
    bigNumber: 36,
    tiles: [3, 2, 1, 9],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 9, symbol: "add", tile2: 1, remainingTiles: [3, 2, 10] },
      { tile1: 2, symbol: "add", tile2: 10, remainingTiles: [3, 12] },
      { tile1: 12, symbol: "multiply", tile2: 3, remainingTiles: [36] },
    ],
  },
  "4-4-5-8-28": {
    bigNumber: 28,
    tiles: [5, 8, 4, 4],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 8,
        symbol: "divide",
        tile2: 4,
        remainingTiles: [5, 4, 2],
      },
      { tile1: 2, symbol: "add", tile2: 5, remainingTiles: [4, 7] },
      { tile1: 4, symbol: "multiply", tile2: 7, remainingTiles: [28] },
    ],
  },
  "4-6-7-8-25": {
    bigNumber: 25,
    tiles: [6, 8, 7, 4],
    symbols: { add: 3, subtract: 0, multiply: 0, divide: 0 },
    solution: [
      { tile1: 7, symbol: "add", tile2: 8, remainingTiles: [4, 6, 15] },
      { tile1: 6, symbol: "add", tile2: 4, remainingTiles: [15, 10] },
      { tile1: 15, symbol: "add", tile2: 10, remainingTiles: [25] },
    ],
  },
  "5-7-7-9-8": {
    bigNumber: 8,
    tiles: [7, 5, 9, 7],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 7,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [9, 5, 49],
      },
      {
        tile1: 49,
        symbol: "subtract",
        tile2: 9,
        remainingTiles: [5, 40],
      },
      { tile1: 40, symbol: "divide", tile2: 5, remainingTiles: [8] },
    ],
  },
  "2-6-6-9-18": {
    bigNumber: 18,
    tiles: [6, 9, 2, 6],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 6,
        remainingTiles: [2, 9, 1],
      },
      { tile1: 9, symbol: "divide", tile2: 1, remainingTiles: [2, 9] },
      { tile1: 2, symbol: "multiply", tile2: 9, remainingTiles: [18] },
    ],
  },
  "2-5-8-9-14": {
    bigNumber: 14,
    tiles: [5, 9, 8, 2],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 2, symbol: "add", tile2: 8, remainingTiles: [5, 9, 10] },
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 5,
        remainingTiles: [10, 4],
      },
      { tile1: 10, symbol: "add", tile2: 4, remainingTiles: [14] },
    ],
  },
  "2-5-7-8-66": {
    bigNumber: 66,
    tiles: [7, 8, 2, 5],
    symbols: { add: 1, subtract: 0, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [2, 5, 56],
      },
      {
        tile1: 2,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [56, 10],
      },
      { tile1: 10, symbol: "add", tile2: 56, remainingTiles: [66] },
    ],
  },
  "3-4-4-6-2": {
    bigNumber: 2,
    tiles: [3, 4, 6, 4],
    symbols: { add: 0, subtract: 0, multiply: 1, divide: 2 },
    solution: [
      {
        tile1: 6,
        symbol: "divide",
        tile2: 3,
        remainingTiles: [4, 4, 2],
      },
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 2,
        remainingTiles: [4, 8],
      },
      { tile1: 8, symbol: "divide", tile2: 4, remainingTiles: [2] },
    ],
  },
  "1-7-8-9-79": {
    bigNumber: 79,
    tiles: [1, 9, 7, 8],
    symbols: { add: 1, subtract: 0, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 7,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [9, 8, 7],
      },
      {
        tile1: 9,
        symbol: "multiply",
        tile2: 8,
        remainingTiles: [7, 72],
      },
      { tile1: 7, symbol: "add", tile2: 72, remainingTiles: [79] },
    ],
  },
  "3-6-8-8-13": {
    bigNumber: 13,
    tiles: [8, 3, 8, 6],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      {
        tile1: 8,
        symbol: "subtract",
        tile2: 6,
        remainingTiles: [3, 8, 2],
      },
      { tile1: 3, symbol: "add", tile2: 2, remainingTiles: [8, 5] },
      { tile1: 5, symbol: "add", tile2: 8, remainingTiles: [13] },
    ],
  },
  "2-2-8-9-5": {
    bigNumber: 5,
    tiles: [9, 8, 2, 2],
    symbols: { add: 0, subtract: 2, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 8,
        symbol: "multiply",
        tile2: 2,
        remainingTiles: [2, 9, 16],
      },
      {
        tile1: 16,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [9, 14],
      },
      { tile1: 14, symbol: "subtract", tile2: 9, remainingTiles: [5] },
    ],
  },
  "1-4-5-7-31": {
    bigNumber: 31,
    tiles: [1, 4, 5, 7],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "divide",
        tile2: 1,
        remainingTiles: [5, 7, 4],
      },
      {
        tile1: 5,
        symbol: "multiply",
        tile2: 7,
        remainingTiles: [4, 35],
      },
      { tile1: 35, symbol: "subtract", tile2: 4, remainingTiles: [31] },
    ],
  },
  "2-5-7-9-9": {
    bigNumber: 9,
    tiles: [5, 7, 9, 2],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 5, symbol: "add", tile2: 2, remainingTiles: [7, 9, 7] },
      { tile1: 9, symbol: "add", tile2: 7, remainingTiles: [7, 16] },
      { tile1: 16, symbol: "subtract", tile2: 7, remainingTiles: [9] },
    ],
  },
  "2-3-4-8-12": {
    bigNumber: 12,
    tiles: [2, 8, 3, 4],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [8, 3, 2],
      },
      { tile1: 8, symbol: "divide", tile2: 2, remainingTiles: [3, 4] },
      { tile1: 4, symbol: "multiply", tile2: 3, remainingTiles: [12] },
    ],
  },
  "3-4-7-9-5": {
    bigNumber: 5,
    tiles: [4, 9, 7, 3],
    symbols: { add: 2, subtract: 1, multiply: 0, divide: 0 },
    solution: [
      { tile1: 4, symbol: "add", tile2: 3, remainingTiles: [9, 7, 7] },
      { tile1: 7, symbol: "add", tile2: 7, remainingTiles: [9, 14] },
      { tile1: 14, symbol: "subtract", tile2: 9, remainingTiles: [5] },
    ],
  },
  "4-6-7-9-1": {
    bigNumber: 1,
    tiles: [6, 7, 4, 9],
    symbols: { add: 0, subtract: 1, multiply: 1, divide: 1 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 9,
        remainingTiles: [6, 7, 36],
      },
      { tile1: 36, symbol: "divide", tile2: 6, remainingTiles: [7, 6] },
      { tile1: 7, symbol: "subtract", tile2: 6, remainingTiles: [1] },
    ],
  },
  "4-5-6-7-21": {
    bigNumber: 21,
    tiles: [6, 4, 7, 5],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 4,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [6, 7, 20],
      },
      { tile1: 20, symbol: "add", tile2: 7, remainingTiles: [6, 27] },
      { tile1: 27, symbol: "subtract", tile2: 6, remainingTiles: [21] },
    ],
  },
  "1-2-4-6-25": {
    bigNumber: 25,
    tiles: [4, 2, 1, 6],
    symbols: { add: 1, subtract: 1, multiply: 1, divide: 0 },
    solution: [
      {
        tile1: 6,
        symbol: "multiply",
        tile2: 4,
        remainingTiles: [1, 2, 24],
      },
      {
        tile1: 2,
        symbol: "subtract",
        tile2: 1,
        remainingTiles: [24, 1],
      },
      { tile1: 1, symbol: "add", tile2: 24, remainingTiles: [25] },
    ],
  },
  "1-2-5-9-35": {
    bigNumber: 35,
    tiles: [2, 5, 1, 9],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 1,
        symbol: "multiply",
        tile2: 5,
        remainingTiles: [2, 9, 5],
      },
      {
        tile1: 9,
        symbol: "subtract",
        tile2: 2,
        remainingTiles: [5, 7],
      },
      { tile1: 5, symbol: "multiply", tile2: 7, remainingTiles: [35] },
    ],
  },
  "1-1-3-4-20": {
    bigNumber: 20,
    tiles: [4, 1, 1, 3],
    symbols: { add: 2, subtract: 0, multiply: 1, divide: 0 },
    solution: [
      { tile1: 3, symbol: "add", tile2: 1, remainingTiles: [1, 4, 4] },
      { tile1: 4, symbol: "add", tile2: 1, remainingTiles: [4, 5] },
      { tile1: 5, symbol: "multiply", tile2: 4, remainingTiles: [20] },
    ],
  },
  "2-6-6-9-54": {
    bigNumber: 54,
    tiles: [2, 9, 6, 6],
    symbols: { add: 0, subtract: 1, multiply: 2, divide: 0 },
    solution: [
      {
        tile1: 2,
        symbol: "multiply",
        tile2: 6,
        remainingTiles: [6, 9, 12],
      },
      {
        tile1: 12,
        symbol: "subtract",
        tile2: 6,
        remainingTiles: [9, 6],
      },
      { tile1: 6, symbol: "multiply", tile2: 9, remainingTiles: [54] },
    ],
  },
};
