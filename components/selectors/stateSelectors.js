export const bigNumberSelector = (state) => {
  return state.gameStore.bigNumber;
};

export const tilesSelector = (state) => {
  return state.gameStore.tiles;
};

export const tile1Selector = (state) => {
  return state.gameStore.selectedTile1;
};

export const tile2Selector = (state) => {
  return state.gameStore.selectedTile2;
};

export const selectedSymbolSelector = (state) => {
  return state.gameStore.selectedSymbol;
};

export const symbolSelector = (state) => {
  return state.gameStore.symbols;
};
export const wonSelector = (state) => {
  return state.gameStore.won;
};

export const levelSelector = (state) => {
  return state.gameStore.currentLevel;
};

export const screenSelector = (state) => {
  return state.userSettingsStore.currentScreen;
};
