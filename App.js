import React, { useEffect } from "react";
import { GameScreen } from "./components/gameScreen";
import { gameMiddleware } from "./reducers/gameMiddleware";
import { gameReducer } from "./reducers/gameReducer";
import { CURRENT_ROUND } from "./settings/userSettings";
import { createStore } from "redux";
import { Provider } from "react-redux";

const gameStore = gameMiddleware(
  createStore(
    gameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default function App() {
  useEffect(() => {
    gameStore.dispatch({ type: "initializeRound", payload: CURRENT_ROUND });
  }, []);

  useEffect(() => {}, []);

  return (
    <Provider store={gameStore}>
      <GameScreen />
    </Provider>
  );
}
