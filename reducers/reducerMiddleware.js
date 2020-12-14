import {
  SELECT_TILE,
  SELECT_TILE_1,
  SELECT_TILE_2,
  PERFORM_OPERATION,
  SELECT_SYMBOL,
  REVERSE_TURN,
  RESET_ON_INVALID_OPERATION,
  CHECK_FOR_WIN,
  CHECK_FOR_NEXT_ROUND,
  WON_ROUND,
  SELECT_LEVEL,
  INITIALIZE_ROUND,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_DIFFICULTY,
  CLASSIC,
  LIMITED,
  BLITZ,
  TIMETRIAL,
  INFINITE,
  EASY,
  MEDIUM,
  HARD,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  SET_SCORE,
  PREVIOUS_SCREEN,
  GAMEOVER_SCREEN,
  SWITCH_SCREEN,
  MAIN_MENU,
} from "../constants/constants";
import { _storeData } from "../localStorage/storeData";

import { puzzles } from "../puzzles/puzzles";
export const reducerMiddleware = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case SELECT_TILE: {
        if (
          rawStore.getState().gameStore.selectedTile1.index === action.payload
        ) {
          rawStore.dispatch({
            type: SELECT_TILE_1,
            payload: null,
          });
        } else if (rawStore.getState().gameStore.selectedTile1.index === null) {
          rawStore.dispatch({
            type: SELECT_TILE_1,
            payload: action.payload,
          });
          dispatch({
            type: PERFORM_OPERATION,
          });
        } else if (
          rawStore.getState().gameStore.selectedTile2.index === action.payload
        ) {
          rawStore.dispatch({
            type: SELECT_TILE_2,
            payload: null,
          });
        } else if (
          rawStore.getState().gameStore.selectedTile2.index === null &&
          action.payload !== rawStore.getState().gameStore.selectedTile1.index
        ) {
          rawStore.dispatch({
            type: SELECT_TILE_2,
            payload: action.payload,
          });
          dispatch({
            type: PERFORM_OPERATION,
          });
        } else {
          rawStore.dispatch({
            type: SELECT_TILE_1,
            payload: action.payload,
          });
        }
        break;
      }
      case SELECT_SYMBOL: {
        if (
          rawStore.getState().gameStore.selectedSymbol.symbol === action.payload
        ) {
          rawStore.dispatch({
            type: SELECT_SYMBOL,
            payload: null,
          });
        } else if (rawStore.getState().gameStore.gameMode !== LIMITED) {
          rawStore.dispatch({
            type: SELECT_SYMBOL,
            payload: action.payload,
          });
          dispatch({
            type: PERFORM_OPERATION,
          });
        } else if (
          rawStore.getState().gameStore.symbols[`${action.payload}`] > 0
        ) {
          rawStore.dispatch({
            type: SELECT_SYMBOL,
            payload: action.payload,
          });
          dispatch({
            type: PERFORM_OPERATION,
          });
        }
        break;
      }
      case PERFORM_OPERATION: {
        if (
          rawStore.getState().gameStore.selectedSymbol.symbol !== null &&
          rawStore.getState().gameStore.selectedTile1.index !== null &&
          rawStore.getState().gameStore.selectedTile2.index !== null
        ) {
          // Check for validity of the operation here and either approve or deny it
          //Add paylod of new number formed by operation
          if (rawStore.getState().gameStore.selectedSymbol.symbol === ADD) {
            rawStore.dispatch({
              type: PERFORM_OPERATION,
              payload:
                rawStore.getState().gameStore.selectedTile1.value +
                rawStore.getState().gameStore.selectedTile2.value,
            });
          } else if (
            rawStore.getState().gameStore.selectedSymbol.symbol === SUBTRACT
          ) {
            if (
              rawStore.getState().gameStore.selectedTile1.value -
                rawStore.getState().gameStore.selectedTile2.value >=
              0
            ) {
              rawStore.dispatch({
                type: PERFORM_OPERATION,
                payload:
                  rawStore.getState().gameStore.selectedTile1.value -
                  rawStore.getState().gameStore.selectedTile2.value,
              });
            } else {
              rawStore.dispatch({
                type: RESET_ON_INVALID_OPERATION,
              });
            }
          } else if (
            rawStore.getState().gameStore.selectedSymbol.symbol === MULTIPLY
          ) {
            rawStore.dispatch({
              type: PERFORM_OPERATION,
              payload:
                rawStore.getState().gameStore.selectedTile1.value *
                rawStore.getState().gameStore.selectedTile2.value,
            });
          } else if (
            rawStore.getState().gameStore.selectedSymbol.symbol === DIVIDE
          ) {
            if (
              rawStore.getState().gameStore.selectedTile1.value %
                rawStore.getState().gameStore.selectedTile2.value ===
              0
            ) {
              rawStore.dispatch({
                type: PERFORM_OPERATION,
                payload:
                  rawStore.getState().gameStore.selectedTile1.value /
                  rawStore.getState().gameStore.selectedTile2.value,
              });
            } else {
              rawStore.dispatch({
                type: RESET_ON_INVALID_OPERATION,
              });
            }
          }
          if (rawStore.getState().gameStore.tiles.length === 1) {
            dispatch({ type: CHECK_FOR_WIN });
          }
        }
        break;
      }
      case REVERSE_TURN: {
        if (rawStore.getState().gameStore.turnHistory.length > 0) {
          rawStore.dispatch({
            type: REVERSE_TURN,
          });
        }
        break;
      }
      case CHECK_FOR_WIN: {
        const tilesRemaining = rawStore.getState().gameStore.tiles;
        if (
          tilesRemaining[0] === rawStore.getState().gameStore.bigNumber &&
          tilesRemaining.length === 1
        ) {
          dispatch({
            type: CHECK_FOR_NEXT_ROUND,
          });
        }
        break;
      }

      case CHECK_FOR_NEXT_ROUND: {
        const difficulty = rawStore.getState().gameStore.difficulty;
        const gameMode = rawStore.getState().gameStore.gameMode;
        const nextLevel = String(
          Number(rawStore.getState().gameStore.currentLevel) + 1
        );
        const nextDifficulty = difficulty === EASY ? MEDIUM : HARD;
        if (
          gameMode === BLITZ ||
          gameMode === TIMETRIAL ||
          gameMode === INFINITE
        ) {
          rawStore.dispatch({
            type: SET_SCORE,
          });
        }
        if (puzzles[difficulty][nextLevel] !== undefined) {
          rawStore.dispatch({
            type: SELECT_LEVEL,
            payload: nextLevel,
          });
        } else {
          rawStore.dispatch({
            type: SELECT_DIFFICULTY,
            payload: nextDifficulty,
          });
          rawStore.dispatch({
            type: SELECT_LEVEL,
            payload: "1",
          });
        }
        break;
      }
      case PREVIOUS_SCREEN: {
        const previousScreen = rawStore.getState().userSettingsStore
          .previousScreen;
        const newPreviousScreen =
          previousScreen === GAMEOVER_SCREEN ? MAIN_MENU : previousScreen;

        rawStore.dispatch({
          type: SWITCH_SCREEN,
          payload: newPreviousScreen,
        });
        break;
      }
      default:
        rawStore.dispatch(action);
    }
  };
  return {
    ...rawStore,
    dispatch,
  };
};
