const initialState = {
  tiles=[],
    symbols={
        plus: 1,
        minus: 1,
        multiply: 1,
        divide: 1
    },
    bigNumber=10,
    selectedSymbol=null,
    selectedTile1=null,
    selectedTile2=null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "selectTile": {
            return {
                ...state, 
                
            }
      }
    case "newQuoteData": {
      return {
        ...state,
        tickerInfo: {
          ...state.tickerInfo,
          quoteInfo: action.payload,
        },
      };
    }
    case "newTickerData": {
      return {
        ...state,
        ticker: action.payload.symbol,
        tickerInfo: {
          ...state.tickerInfo,
          ...action.payload.data,
        },
      };
    }
    case "newIndexData": {
      return {
        ...state,
        indexes: action.payload,
      };
    }
    case "newHistoryData": {
      return {
        ...state,
        tickerInfo: {
          ...state.tickerInfo,
          historyInfo: action.payload,
        },
      };
    }
    case "newChartRange": {
      return {
        ...state,
        chartRange: action.payload,
      };
    }
    default:
      return state;
  }
};
