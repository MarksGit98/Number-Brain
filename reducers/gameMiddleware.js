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
} from "../constants/constants";

import { puzzles } from "../puzzles/puzzles";
export const gameMiddleware = (rawStore) => {
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
        } else if (
          rawStore.getState().gameStore.symbols[`${action.payload}`] > 0
        ) {
          {
            rawStore.dispatch({
              type: SELECT_SYMBOL,
              payload: action.payload,
            });
            dispatch({
              type: PERFORM_OPERATION,
            });
          }
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
          if (rawStore.getState().gameStore.selectedSymbol.symbol === "add") {
            rawStore.dispatch({
              type: PERFORM_OPERATION,
              payload:
                rawStore.getState().gameStore.selectedTile1.value +
                rawStore.getState().gameStore.selectedTile2.value,
            });
          } else if (
            rawStore.getState().gameStore.selectedSymbol.symbol === "subtract"
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
            rawStore.getState().gameStore.selectedSymbol.symbol === "multiply"
          ) {
            rawStore.dispatch({
              type: PERFORM_OPERATION,
              payload:
                rawStore.getState().gameStore.selectedTile1.value *
                rawStore.getState().gameStore.selectedTile2.value,
            });
          } else if (
            rawStore.getState().gameStore.selectedSymbol.symbol === "divide"
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
        if (
          rawStore.getState().gameStore.tiles[0] ===
          rawStore.getState().gameStore.bigNumber
        ) {
          dispatch({
            type: CHECK_FOR_NEXT_ROUND,
          });
        }
        break;
      }

      case CHECK_FOR_NEXT_ROUND: {
        const nextLevel = String(
          Number(rawStore.getState().gameStore.currentLevel) + 1
        );
        if (
          puzzles[rawStore.getState().gameStore.difficulty][nextLevel] !==
          undefined
        ) {
          rawStore.dispatch({
            type: INITIALIZE_ROUND,
            payload: nextLevel,
          });
          rawStore.dispatch({
            type: SELECT_LEVEL,
            payload: nextLevel,
          });
        } else {
          rawStore.dispatch({
            type: INITIALIZE_ROUND,
            payload: "1",
          });
          rawStore.dispatch({
            type: SELECT_LEVEL,
            payload: "1",
          });
        }
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
