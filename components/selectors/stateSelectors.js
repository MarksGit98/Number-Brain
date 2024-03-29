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

export const previousScreensSelector = (state) => {
  return state.userSettingsStore.previousScreens;
};

export const difficultySelector = (state) => {
  return state.gameStore.difficulty;
};

export const gameModeSelector = (state) => {
  return state.gameStore.gameMode;
};

export const blitzGameModeSelector = (state) => {
  return state.gameStore.subGameModes.blitz;
};

export const timeTrialGameModeSelector = (state) => {
  return state.gameStore.subGameModes.timeTrial;
};

export const scoreSelector = (state) => {
  return state.gameStore.score;
};

export const volumeSelector = (state) => {
  return state.userSettingsStore.volume;
};

export const musicSelector = (state) => {
  return state.userSettingsStore.music;
};

export const solutionSelector = (state) => {
  return state.gameStore.solution;
};

export const errorOccurredSelector = (state) => {
  return state.gameStore.error;
};

export const premiumStatusSelector = (state) => {
  return state.userSettingsStore.premium;
};
