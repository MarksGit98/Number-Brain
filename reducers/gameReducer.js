const initialState = {
  tiles: [1, 2, 3, 4, 8, 2],
  symbols: {
    add: 1,
    subtract: 1,
    multiply: 1,
    divide: 1,
  },
  turnHistory: [],
  bigNumber: 62,
  selectedSymbol: null,
  selectedTile1: { value: null, index: null },
  selectedTile2: { value: null, index: null },
  won: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectTile1": {
      return {
        ...state,
        selectedTile1: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }
    case "selectTile2": {
      return {
        ...state,
        selectedTile2: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }
    case "selectSymbol": {
      return {
        ...state,
        selectedSymbol: action.payload,
      };
    }
    case "performOperation": {
      console.log(state.turnHistory.pop());
      const index1 = state.selectedTile1.index;
      const index2 = state.selectedTile2.index;
      const newTiles = [];
      for (let i = 0; i < state.tiles.length; i++) {
        if (i !== index1 && i !== index2) {
          newTiles.push(state.tiles[i]);
        }
      }
      return {
        ...state,
        turnHistory: [
          ...state.turnHistory,
          {
            tile1: state.selectedTile1.value,
            symbol: state.selectedSymbol,
            tile2: state.selectedTile2.value,
            tiles: state.tiles,
          },
        ],
        tiles:
          index2 > 1
            ? [
                ...newTiles.slice(0, index2 - 1),
                action.payload,
                ...newTiles.slice(index2 - 1),
              ]
            : [
                ...newTiles.slice(0, index2),
                action.payload,
                ...newTiles.slice(index2),
              ],
        symbols: {
          ...state.symbols,
          add: (state.selectedSymbol = "+"
            ? state.symbols.add--
            : state.symbols.add),
          minus: (state.selectedSymbol = "+"
            ? state.symbols.minus--
            : state.symbols.minus),
          multiply: (state.selectedSymbol = "+"
            ? state.symbols.multiply--
            : state.symbols.multiply),
          divide: (state.selectedSymbol = "+"
            ? state.symbols.divide--
            : state.symbols.divide),
        },
        selectedSymbol: null,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
      };
    }
    case "resetOnInvalidOperation": {
      return {
        ...state,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: null,
      };
    }
    case "wonRound": {
      return {
        ...state,
        won: true,
      };
    }
    case "initalizeRound": {
      return state;
    }

    default:
      return state;
  }
};
