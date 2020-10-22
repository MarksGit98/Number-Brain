import { hardPuzzles } from "./generatedPuzzles/hardPuzzles";

export const puzzles = {
  easy: {
    level1: {
      bigNumber: 10,
      tiles: [4, 5, 3, 2],
      symbols: {
        add: 2,
        subtract: 0,
        multiply: 0,
        divide: 1,
      },
    },
  },
  medium: {
    level1: {
      bigNumber: 59,
      tiles: [6, 2, 3, 7, 3],
      symbols: {
        add: 1,
        subtract: 0,
        multiply: 2,
        divide: 1,
      },
    },
  },
  hard: hardPuzzles,
};
