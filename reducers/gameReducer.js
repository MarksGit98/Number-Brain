import {
  SELECT_TILE_1,
  SELECT_TILE_2,
  SELECT_SYMBOL,
  REVERSE_TURN,
  RESET_ON_INVALID_OPERATION,
  WON_ROUND,
  PERFORM_OPERATION,
  INITIALIZE_ROUND,
} from "../constants/constants";
import { puzzles } from "../puzzles/puzzles";
const initialState = {
  tiles: puzzles.hard.level1.tiles,
  symbols: puzzles.hard.level1.symbols,
  turnHistory: [],
  bigNumber: puzzles.hard.level1.bigNumber,
  selectedSymbol: null,
  selectedTile1: { value: null, index: null },
  selectedTile2: { value: null, index: null },
  won: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TILE_1: {
      return {
        ...state,
        selectedTile1: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }
    case SELECT_TILE_2: {
      return {
        ...state,
        selectedTile2: {
          value: action.payload !== null ? state.tiles[action.payload] : null,
          index: action.payload !== null ? action.payload : null,
        },
      };
    }
    case SELECT_SYMBOL: {
      return {
        ...state,
        selectedSymbol: action.payload,
      };
    }
    case PERFORM_OPERATION: {
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
          index2 > 0
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
    case RESET_ON_INVALID_OPERATION: {
      return {
        ...state,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: null,
      };
    }
    case REVERSE_TURN: {
      const prevTurn = state.turnHistory.pop();
      return {
        ...state,
        tiles: prevTurn.tiles,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: null,
      };
    }
    case WON_ROUND: {
      return {
        ...state,
        won: true,
      };
    }
    case INITIALIZE_ROUND: {
      return state;
    }

    default:
      return state;
  }
};
