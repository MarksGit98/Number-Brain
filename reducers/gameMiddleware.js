export const gameMiddleware = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case "selectTile": {
        console.log(rawStore.getState());
        if (rawStore.getState().selectedTile1.value === null) {
          rawStore.dispatch({
            type: "selectTile1",
            payload: action.payload,
          });
        } else if (rawStore.getState().selectedTile2.value === null) {
          rawStore.dispatch({
            type: "selectTile2",
            payload: action.payload,
          });
        }
      }
      case "performOperation": {
        console.log(rawStore.getState().selectedTile1);
        console.log(rawStore.getState().selectedTile2);
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
      }
      default:
        console.log(rawStore.getState());
        rawStore.dispatch(action);
    }
  };
  return {
    ...rawStore,
    dispatch,
  };
};
