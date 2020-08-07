export const gameMiddleware = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case "selectTile": {
        if (rawStore.getState().selectedTile1.index === action.payload) {
          console.log("1");
          rawStore.dispatch({
            type: "selectTile1",
            payload: null,
          });
        } else if (rawStore.getState().selectedTile1.index === null) {
          console.log("2");
          rawStore.dispatch({
            type: "selectTile1",
            payload: action.payload,
          });
          dispatch({
            type: "performOperation",
          });
        } else if (rawStore.getState().selectedTile2.index === action.payload) {
          console.log("3");
          rawStore.dispatch({
            type: "selectTile2",
            payload: null,
          });
        } else if (
          rawStore.getState().selectedTile2.index === null &&
          action.payload !== rawStore.getState().selectedTile1.index
        ) {
          console.log("4");
          rawStore.dispatch({
            type: "selectTile2",
            payload: action.payload,
          });
          dispatch({
            type: "performOperation",
          });
        }
        break;
      }
      case "selectSymbol": {
        if (rawStore.getState().selectedSymbol === action.payload) {
          rawStore.dispatch({
            type: "selectSymbol",
            payload: null,
          });
        } else {
          {
            rawStore.dispatch({
              type: "selectSymbol",
              payload: action.payload,
            });
            dispatch({
              type: "performOperation",
            });
          }
        }
        break;
      }
      case "performOperation": {
        if (
          rawStore.getState().selectedSymbol !== null &&
          rawStore.getState().selectedTile1.index !== null &&
          rawStore.getState().selectedTile2.index !== null
        ) {
          // Check for validity of the operation here and either approve or deny it
          //Add paylod of new number formed by operation
          if (rawStore.getState().selectedSymbol === "+") {
            rawStore.dispatch({
              type: "performOperation",
              payload:
                rawStore.getState().selectedTile1.value +
                rawStore.getState().selectedTile2.value,
            });
          } else if (rawStore.getState().selectedSymbol === "-") {
            if (
              rawStore.getState().selectedTile1.value -
                rawStore.getState().selectedTile2.value >=
              0
            ) {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.getState().selectedTile1.value -
                  rawStore.getState().selectedTile2.value,
              });
            } else {
              rawStore.dispatch({
                type: "resetOnInvalidOperation",
              });
            }
          } else if (rawStore.getState().selectedSymbol === "*") {
            rawStore.dispatch({
              type: "performOperation",
              payload:
                rawStore.getState().selectedTile1.value *
                rawStore.getState().selectedTile2.value,
            });
          } else if (rawStore.getState().selectedSymbol === "/") {
            if (
              rawStore.getState().selectedTile1.value %
                rawStore.getState().selectedTile2.value ===
              0
            ) {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.getState().selectedTile1.value /
                  rawStore.getState().selectedTile2.value,
              });
            } else {
              rawStore.dispatch({
                type: "resetOnInvalidOperation",
              });
            }
          }
          if (rawStore.getState().tiles.length === 1) {
            dispatch({ type: "checkForWin" });
          }
        }
        break;
      }
      case "checkForWin": {
        if (rawStore.getState().tiles[0] === rawStore.getState().bigNumber) {
          rawStore.dispatch({
            type: "wonRound",
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
