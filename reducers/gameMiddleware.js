const producerMiddleWare = (rawStore) => {
  const dispatch = (action) => {
    //Trigger dispatches here
    switch (action.type) {
      case "selectTile": {
        if (rawStore.selectedTile1 === null) {
          rawStore.dispatch({
            type: "selectTile1",
            payload: action.payload,
          });
        } else if (rawStore.selectedTile2 === null) {
          rawStore.dispatch({
            type: "selectTile2",
            payload: action.payload,
          });
          if (rawStore.selectedSymbol !== null) {
            // Check for validity of the operation here and either approve or deny it
            //Add paylod of new number formed by operation

            rawStore.dispatch({
              type: "performOperation",
            });
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
