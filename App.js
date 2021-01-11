import React, { useState, useEffect } from "react";
import { ViewSelector } from "./components/viewSelector";
import { reducerMiddleware } from "./reducers/reducerMiddleware";
import { gameReducer } from "./reducers/gameReducer";
import { userSettingsReducer } from "./reducers/userSettingsReducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Audio } from "expo-av";
import { BACKGROUND_MUSIC } from "./constants/constants";
const rootReducer = combineReducers({
  gameStore: gameReducer,
  userSettingsStore: userSettingsReducer,
});

export const store = reducerMiddleware(createStore(rootReducer));

export default function App() {
  const [backgroundMusic, setBackgroundMusic] = useState();

  const playBackgroundMusic = async () => {
    const bgMusic = new Audio.Sound();
    await bgMusic.loadAsync(require("./assets/bgmusic.mp3"));
    await bgMusic.setStatusAsync({ isLooping: true });
    await bgMusic.playAsync();
    setBackgroundMusic(bgMusic);
  };

  useEffect(() => {
    // playBackgroundMusic();
  }, []);

  useEffect(() => {
    return backgroundMusic
      ? () => {
          backgroundMusic.unloadAsync();
        }
      : undefined;
  }, [backgroundMusic]);

  return (
    <Provider store={store}>
      <ViewSelector />
    </Provider>
  );
}
