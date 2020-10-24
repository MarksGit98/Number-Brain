export const initialState = {
  // User Settings
  difficulty: "easy",
  currentLevel: "1",
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
  won: false,
};
