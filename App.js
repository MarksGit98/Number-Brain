import React, { useEffect } from "react";
import { GameScreen } from "./components/gameScreen";
import { gameMiddleware } from "./reducers/gameMiddleware";
import { gameReducer } from "./reducers/gameReducer";
import { userSettingsReducer } from "./reducers/userSettingsReducer";
import { CURRENT_ROUND } from "./settings/userSettings";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const gameStore = gameMiddleware(
  createStore(
    gameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const userSettingsStore = createStore(
  userSettingsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers(
  { gameStore: gameReducer },
  { userSettingsStore: userSettingsReducer }
);

const store = gameMiddleware(createStore(rootReducer));

export default function App() {
  useEffect(() => {
    console.log(store.getState());
    store.dispatch({
      type: "initializeRound",
      payload: CURRENT_ROUND,
    });
  }, []);

  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
}
