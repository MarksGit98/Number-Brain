import {
  EASY,
  MEDIUM,
  HARD,
  CLASSIC,
  TIMETRIAL,
  BLITZ,
  LIMITED,
} from "./constants/constants";
export const initialState = {
  // User Settings
  difficulty: EASY,
  currentLevel: "1",
  gameMode: CLASSIC,
  // In Game
  tiles: [0, 0, 0, 0],
  symbols: {
    add: null,
    subtract: null,
    multiply: null,
    divide: null,
  },
  turnHistory: [],
  bigNumber: null,
  selectedSymbol: { symbol: null, quantity: null },
  selectedTile1: { value: null, index: null },
  selectedTile2: { value: null, index: null },
  hintTile1: { value: null, index: null },
  hintTile2: { value: null, index: null },
  hintSymbol: { symbol: null, quantity: null },
  won: false,
};
