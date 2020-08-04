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
  selectedTile1={value: null, index: null},
  selectedTile2={value: null, index: null},
  won=false
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
        newTiles = [];
        for (let i = 0; i < tiles.length; i++){
          if (i !== selectedTile1.index && i !== selectedTile2.index) {
              newTiles.push(tiles[i])
            }
        }
        return {
          ...state, 
          tiles: [...newTiles, action.paylod],
          turnHistory: [...turnHistory, {
            tile1: selectedTile1.value,
            symbol: selectedSymbol,
            tile2: selectedTile2.value
          }],
          symbols: {
            ...symbols,
            add: selectedSymbol = "+" ? add-- : add,
            minus: selectedSymbol = "+" ? minus-- : minus,
            multiply: selectedSymbol = "+" ? multiply-- : multiply,
            divide: selectedSymbol = "+" ? divide-- : divide
          },
          selectedSymbol: null,
          selectedTile1: {value: null, index: null},
          selectedTile2: {value: null, index: null}
          }
      }
      
    default:
      return state;
  }
};
