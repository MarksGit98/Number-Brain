import React, { useState, useEffect } from "react";
import "./styles.css";
import { ViewSelector } from "./components/viewSelector";
import { reducerMiddleware } from "./reducers/reducerMiddleware";
import { gameReducer } from "./reducers/gameReducer";
import { userSettingsReducer } from "./reducers/userSettingsReducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { _retrieveData } from "./localStorage/retrieveData";
import { _storeData } from "./localStorage/storeData";
const rootReducer = combineReducers({
  gameStore: gameReducer,
  userSettingsStore: userSettingsReducer,
});

export const store = reducerMiddleware(createStore(rootReducer));

export default function App() {
  return (
    <Provider store={store}>
      <ViewSelector />
    </Provider>
  );
}
