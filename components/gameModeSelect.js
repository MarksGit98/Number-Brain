import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import {
  GAME_SCREEN,
  LEVEL_SCREEN,
  SELECT_DIFFICULTY,
  SWITCH_SCREEN,
  INITIALIZE_ROUND,
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_LEVEL,
  EASY,
  MEDIUM,
  HARD,
  CLASSIC,
  LIMITED,
  BLITZ,
  TIMETRIAL,
  LOCAL_GAMEMODE,
  SELECT_GAMEMODE,
} from "../constants/constants";
import { gameModeSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import GameModeButton from "./mini-components/gameModeButton";
import PlayButton from "./mini-components/playButton";
import LevelSelectButton from "./mini-components/levelSelectButton";
import { BackButton } from "./mini-components/backbutton";
export const GameModeSelect = () => {
  const dispatch = useDispatch();
  const currentGameMode = useSelector(gameModeSelector);

  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });
  };

  useEffect(() => {
    setSettings();
  }, [currentGameMode]);

  const handleGameModeChange = (gameMode) => {
    if (gameMode !== currentGameMode) {
      dispatch({ type: SELECT_GAMEMODE, payload: gameMode });
    }
  };

  const gameModeOptions = [CLASSIC, LIMITED, BLITZ, TIMETRIAL];
  return (
    <SafeAreaView style={styles.mainView}>
      <BackButton />
      <View style={styles.difficultyOptionsView}>
        {gameModeOptions.map((gameMode) => (
          <TouchableWithoutFeedback
            key={gameMode}
            onPress={() => handleGameModeChange(gameMode)}
          >
            <View>
              <Text
                style={[
                  styles.smallWhiteText,
                  gameMode === currentGameMode ? styles.difficultyOption : null,
                ]}
              >
                {gameMode}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </SafeAreaView>
  );
};
