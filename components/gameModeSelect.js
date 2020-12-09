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
  BLITZ_EASY,
  BLITZ_MEDIUM,
  BLITZ_HARD,
  TIMETRIAL_EASY,
  TIMETRIAL_MEDIUM,
  TIMETRIAL_HARD,
  LOCAL_TIMETRIAL_GAMEMODE,
  LOCAL_BLITZ_GAMEMODE,
  SELECT_SUBGAMEMODE,
} from "../constants/constants";
import {
  gameModeSelector,
  blitzGameModeSelector,
  timeTrialGameModeSelector,
} from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import GameModeButton from "./mini-components/gameModeButton";
import PlayButton from "./mini-components/playButton";
import LevelSelectButton from "./mini-components/levelSelectButton";
import { BackButton } from "./mini-components/backbutton";
export const GameModeSelect = () => {
  const dispatch = useDispatch();
  const currentGameMode = useSelector(gameModeSelector);
  const currentBlitzGameMode = useSelector(blitzGameModeSelector);
  const currentTimeTrialGameMode = useSelector(timeTrialGameModeSelector);
  const gameModeOptions = [CLASSIC, LIMITED, BLITZ, TIMETRIAL];
  const blitzGameModes = [BLITZ_EASY, BLITZ_MEDIUM, BLITZ_HARD];
  const timeTrialGameModes = [TIMETRIAL_EASY, TIMETRIAL_MEDIUM, TIMETRIAL_HARD];
  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });

    const timeTrialGameMode = await _retrieveData(LOCAL_TIMETRIAL_GAMEMODE);
    timeTrialGameMode !== null
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: timeTrialGameMode, gameMode: TIMETRIAL },
        })
      : dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: TIMETRIAL_MEDIUM, gameMode: TIMETRIAL },
        });
    const blitzGameMode = await _retrieveData(LOCAL_BLITZ_GAMEMODE);
    blitzGameMode !== null
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: blitzGameMode, gameMode: BLITZ },
        })
      : dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: { subGameMode: BLITZ_MEDIUM, gameMode: BLITZ },
        });
  };

  useEffect(() => {
    setSettings();
  }, []);

  const handleGameModeChange = (gameMode) => {
    if (gameMode !== currentGameMode) {
      dispatch({ type: SELECT_GAMEMODE, payload: gameMode });
    }
  };

  const handleSubGameModeChange = (subGameMode, gameMode) => {
    if (
      (gameMode === BLITZ && subGameMode !== currentBlitzGameMode) ||
      (gameMode === TIMETRIAL && subGameMode !== currentTimeTrialGameMode)
    ) {
      dispatch({
        type: SELECT_SUBGAMEMODE,
        payload: { subGameMode: subGameMode, gameMode: gameMode },
      });
    }
  };
  console.log(currentBlitzGameMode);
  console.log(currentTimeTrialGameMode);
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
                {"\n"}
              </Text>
              <View>
                {gameMode === BLITZ
                  ? blitzGameModes.map((subGameMode) => (
                      <View key={subGameMode}>
                        <TouchableWithoutFeedback
                          onPress={() =>
                            handleSubGameModeChange(subGameMode, gameMode)
                          }
                        >
                          <View>
                            <Text
                              style={[
                                styles.subGameModeDifficulty,
                                styles.smallWhiteText,
                                subGameMode === currentBlitzGameMode &&
                                gameMode === currentGameMode
                                  ? styles.difficultyOption
                                  : null,
                              ]}
                            >
                              {subGameMode}s
                            </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      </View>
                    ))
                  : gameMode === TIMETRIAL
                  ? timeTrialGameModes.map((subGameMode) => (
                      <View key={subGameMode}>
                        <TouchableWithoutFeedback
                          onPress={() =>
                            handleSubGameModeChange(subGameMode, gameMode)
                          }
                        >
                          <View>
                            <Text
                              style={[
                                styles.subGameModeDifficulty,
                                styles.smallWhiteText,
                                subGameMode === currentTimeTrialGameMode &&
                                gameMode === currentGameMode
                                  ? styles.difficultyOption
                                  : null,
                              ]}
                            >
                              {subGameMode}s
                            </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      </View>
                    ))
                  : null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </SafeAreaView>
  );
};
