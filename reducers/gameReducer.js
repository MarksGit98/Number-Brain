import {
  SELECT_TILE_1,
  SELECT_TILE_2,
  SELECT_SYMBOL,
  REVERSE_TURN,
  RESET_ON_INVALID_OPERATION,
  PERFORM_OPERATION,
  INITIALIZE_ROUND,
  SELECT_DIFFICULTY,
  SELECT_LEVEL,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  EASY,
  MEDIUM,
  HARD,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  LOCAL_GAMEMODE,
  SELECT_GAMEMODE,
  LOAD_PUZZLE,
  SET_SCORE,
  TIMETRIAL,
  INFINITE,
  SELECT_SUBGAMEMODE,
  ERROR_CLICK,
  RESET_TILES,
  INVALID_OPERATION_SOUND_PLAYED,
  RESET_AD_COUNTDOWN,
  INCREMENT_AD_COUNTDOWN,
} from "../constants/constants";
import { puzzles } from "../puzzles/puzzles";
import { initialState } from "./initialGameState";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { playSound } from "../constants/buttonClick";
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
        selectedSymbol: {
          symbol: action.payload,
          quantity: state.symbols[`${action.payload}`],
        },
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
            symbol: state.selectedSymbol.symbol,
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
          add:
            state.selectedSymbol.symbol === ADD
              ? state.symbols.add - 1
              : state.symbols.add,
          subtract:
            state.selectedSymbol.symbol === SUBTRACT
              ? state.symbols.subtract - 1
              : state.symbols.subtract,
          multiply:
            state.selectedSymbol.symbol === MULTIPLY
              ? state.symbols.multiply - 1
              : state.symbols.multiply,
          divide:
            state.selectedSymbol.symbol === DIVIDE
              ? state.symbols.divide - 1
              : state.symbols.divide,
        },
        selectedSymbol: { symbol: null, quantity: null },
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
      };
    }
    case RESET_ON_INVALID_OPERATION: {
      return {
        ...state,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: { symbol: null, quantity: null },
        error: true,
      };
    }
    case INVALID_OPERATION_SOUND_PLAYED: {
      return {
        ...state,
        error: false,
      };
    }
    case REVERSE_TURN: {
      const prevTurn = state.turnHistory.pop();
      return {
        ...state,
        tiles: prevTurn.tiles,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: { symbol: null, quantity: null },
        symbols: {
          add:
            prevTurn.symbol === ADD ? state.symbols.add + 1 : state.symbols.add,
          subtract:
            prevTurn.symbol === SUBTRACT
              ? state.symbols.subtract + 1
              : state.symbols.subtract,
          multiply:
            prevTurn.symbol === MULTIPLY
              ? state.symbols.multiply + 1
              : state.symbols.multiply,
          divide:
            prevTurn.symbol === DIVIDE
              ? state.symbols.divide + 1
              : state.symbols.divide,
        },
      };
    }
    case RESET_TILES: {
      let subtraction = 0;
      let addition = 0;
      let multiplication = 0;
      let division = 0;
      let reset_tiles = state.tiles;
      while (state.turnHistory.length > 0) {
        const prevTurn = state.turnHistory.pop();
        reset_tiles = prevTurn.tiles;
        if (prevTurn.symbol === ADD) {
          addition += 1;
        } else if (prevTurn.symbol === SUBTRACT) {
          subtraction += 1;
        } else if (prevTurn.symbol === MULTIPLY) {
          multiplication += 1;
        } else if (prevTurn.symbol === DIVIDE) {
          division += 1;
        }
      }
      return {
        ...state,
        tiles: reset_tiles,
        selectedTile1: { value: null, index: null },
        selectedTile2: { value: null, index: null },
        selectedSymbol: { symbol: null, quantity: null },
        symbols: {
          add: state.symbols.add + addition,
          subtract: state.symbols.subtract + subtraction,
          multiply: state.symbols.multiply + multiplication,
          divide: state.symbols.divide + division,
        },
      };
    }

    case INITIALIZE_ROUND: {
      const levelToLoad = state.currentLevel;
      const difficultyToLoad = state.difficulty;
      return {
        ...state,
        currentLevel: levelToLoad,
        tiles: puzzles[difficultyToLoad][levelToLoad].tiles,
        symbols: puzzles[difficultyToLoad][levelToLoad].symbols,
        bigNumber: puzzles[difficultyToLoad][levelToLoad].bigNumber,
        turnHistory: [],
        solution: puzzles[difficultyToLoad][levelToLoad].solution,
        won: false,
      };
    }

    case LOAD_PUZZLE: {
      return {
        ...state,
        currentLevel: null,
        tiles: action.payload.tiles,
        symbols: action.payload.symbols,
        bigNumber: action.payload.bigNumber,
        turnHistory: [],
        solution: action.payload.solution,
        won: false,
      };
    }

    case SET_SCORE: {
      return {
        ...state,
        score: action.payload === undefined ? state.score + 1 : action.payload,
      };
    }

    case SELECT_DIFFICULTY: {
      _storeData(`${LOCAL_DIFFICULTY}`, action.payload);
      return {
        ...state,
        difficulty: action.payload,
      };
    }
    case SELECT_LEVEL: {
      _storeData(`${state.difficulty}${LOCAL_LEVEL}`, action.payload);
      return {
        ...state,
        currentLevel: action.payload,
      };
    }
    case SELECT_GAMEMODE: {
      _storeData(`${LOCAL_GAMEMODE}`, action.payload);
      return {
        ...state,
        gameMode: action.payload,
      };
    }
    case SELECT_SUBGAMEMODE: {
      const gameMode = action.payload.gameMode;
      const subGameMode = action.payload.subGameMode;
      _storeData(`local${action.payload.gameMode}GameMode`, subGameMode);
      const newSubGameModes = state.subGameModes;
      newSubGameModes[`${gameMode}`] = subGameMode;
      return {
        ...state,
        subGameModes: newSubGameModes,
      };
    }
    case RESET_AD_COUNTDOWN: {
      return {
        ...state,
        countdownToInterstitial: 0,
      };
    }
    case INCREMENT_AD_COUNTDOWN: {
      return {
        ...state,
        countdownToInterstitial: state.countdownToInterstitial + 1,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
