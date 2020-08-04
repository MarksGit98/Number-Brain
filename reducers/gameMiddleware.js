const producerMiddleWare = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case "selectTile": {
        if (rawStore.selectedTile1.value === null) {
          rawStore.dispatch({
            type: "selectTile1",
            payload: action.payload,
          });
        } else if (rawStore.selectedTile2.value === null) {
          rawStore.dispatch({
            type: "selectTile2",
            payload: action.payload,
          });
          if (rawStore.selectedSymbol !== null) {
            // Check for validity of the operation here and either approve or deny it
            //Add paylod of new number formed by operation
            if (rawStore.selectedSymbol === "+") {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.selectedTile1.value + rawStore.selectedTile2.value,
              });
            } else if (
              rawStore.selectedSymbol === "-" &&
              rawStore.selectedTile1.value - rawStore.selectedTile2.value >= 0
            ) {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.selectedTile1.value - rawStore.selectedTile2.value,
              });
            } else if (rawStore.selectedSymbol === "*") {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.selectedTile1.value * rawStore.selectedTile2.value,
              });
            } else if (
              rawStore.selectedSymbol === "/" &&
              rawStore.selectedTile1.value % rawStore.selectedTile2.value === 0
            ) {
              rawStore.dispatch({
                type: "performOperation",
                payload:
                  rawStore.selectedTile1.value / rawStore.selectedTile2.value,
              });
            }
          }
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
