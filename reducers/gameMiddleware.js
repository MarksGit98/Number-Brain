export const gameMiddleware = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case "selectTile": {
        if (rawStore.getState().selectedTile1.value === null) {
          rawStore.dispatch({
            type: "selectTile1",
            payload: action.payload,
          });
          break;
        } else if (rawStore.getState().selectedTile1.index === action.payload) {
          rawStore.dispatch({
            type: "selectTile1",
            payload: null,
          });
          break;
        } else if (
          rawStore.getState().selectedTile2.value === null &&
          action.payload !== rawStore.getState().selectedTile1.index
        ) {
          rawStore.dispatch({
            type: "selectTile2",
            payload: action.payload,
          });
        } else {
          break;
        }
      }
      case "performOperation": {
        if (rawStore.getState().selectedSymbol !== null) {
          // Check for validity of the operation here and either approve or deny it
          //Add paylod of new number formed by operation
          if (rawStore.getState().selectedSymbol === "+") {
            rawStore.dispatch({
              type: "performOperation",
              payload:
                rawStore.getState().selectedTile1.value +
                rawStore.getState().selectedTile2.value,
            });
          } else if (
            rawStore.getState().selectedSymbol === "-" &&
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
          } else if (rawStore.getState().selectedSymbol === "*") {
            rawStore.dispatch({
              type: "performOperation",
              payload:
                rawStore.getState().selectedTile1.value *
                rawStore.getState().selectedTile2.value,
            });
          } else if (
            rawStore.getState().selectedSymbol === "/" &&
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
          }
        }
        break;
      }
      case "test": {
        console.log(3);
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
