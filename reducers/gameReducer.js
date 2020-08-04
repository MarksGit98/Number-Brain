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
          value: state.tiles[action.payload],
          index: action.payload,
        },
      };
    }
    case "selectTile2": {
      return {
        ...state,
        selectedTile2: {
          value: state.tiles[action.payload],
          index: action.payload,
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
      const newTiles = [];
      for (let i = 0; i < state.tiles.length; i++) {
        if (
          i !== state.selectedTile1.index &&
          i !== state.selectedTile2.index
        ) {
          newTiles.push(state.tiles[i]);
        }
      }
      return {
        ...state,
        tiles: [...newTiles, action.payload],
        turnHistory: [
          ...state.turnHistory,
          {
            tile1: state.selectedTile1.value,
            symbol: state.selectedSymbol,
            tile2: state.selectedTile2.value,
          },
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
    case "initalizeRound": {
      return state;
    }

    default:
      return state;
  }
};
