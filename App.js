import React, { useEffect } from "react";
import { GameScreen } from "./components/gameScreen";
import { gameMiddleware } from "./reducers/gameMiddleware";
import { gameReducer } from "./reducers/gameReducer";
import { userSettingsReducer } from "./reducers/userSettingsReducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers(
  { gameStore: gameReducer },
  { userSettingsStore: userSettingsReducer }
);

export const store = gameMiddleware(createStore(rootReducer));

export default function App() {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
}
