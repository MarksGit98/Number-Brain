const initialState = {
  tiles=[],
  symbols={
      add: 1,
      subtract: 1,
      multiply: 1,
      divide: 1
  },
  turnHistory=[],
  bigNumber=10,
  selectedSymbol=null,
  selectedTile1=null,
  selectedTile2=null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "selectTile1": {
            return {
              ...state, 
              selectedTile1: action.payload
            }
      }
      case "selectTile2": {
            return {
              ...state, 
              selectedTile2: action.payload
            }
      }
      case "selectSymbol": {
        return {
          ...state,
          selectedSymbol: action.payload
        }
      }
      case "performOperation": {
        return {
          ...state, 
          turnHistory: [...turnHistory, {
            tile1: selectedTile1,
            symbol: selectedSymbol,
            tile2: selectedTile2
          }],
          symbols: {
            add: selectedSymbol = "+" ? add-- : add,
            minus: selectedSymbol = "+" ? minus-- : minus,
            multiply: selectedSymbol = "+" ? multiply-- : multiply,
            divide: selectedSymbol = "+" ? divide-- : divide
          }
          }
        }
    default:
      return state;
  }
};
