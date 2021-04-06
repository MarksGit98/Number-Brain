import React, { useEffect } from "react";
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
  INFINITE,
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
  BUTTON_CLICK,
  ERROR_CLICK,
} from "../constants/constants";
import {
  gameModeSelector,
  blitzGameModeSelector,
  timeTrialGameModeSelector,
  volumeSelector,
} from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import { BackButton } from "./mini-components/backButton";
import { MusicButton } from "./mini-components/musicButton";
import { HomeButton } from "./mini-components/homeButton";
import { VolumeButton } from "./mini-components/volumeButton";
import { playSound } from "../constants/buttonClick";
export const GameModeSelect = () => {
  const dispatch = useDispatch();
  const currentGameMode = useSelector(gameModeSelector);
  const currentBlitzGameMode = useSelector(blitzGameModeSelector);
  const currentTimeTrialGameMode = useSelector(timeTrialGameModeSelector);
  const gameModeOptions = [CLASSIC, LIMITED, BLITZ, TIMETRIAL, INFINITE];
  const blitzGameModes = [BLITZ_EASY, BLITZ_MEDIUM, BLITZ_HARD];
  const timeTrialGameModes = [TIMETRIAL_EASY, TIMETRIAL_MEDIUM, TIMETRIAL_HARD];
  const volume = useSelector(volumeSelector);
  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({ type: SELECT_GAMEMODE, payload: gameMode })
      : dispatch({ type: SELECT_GAMEMODE, payload: CLASSIC });

    const timeTrialGameMode = await _retrieveData(LOCAL_TIMETRIAL_GAMEMODE);
    timeTrialGameMode !== null
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: {
            subGameMode: timeTrialGameMode,
            gameMode: TIMETRIAL,
          },
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
      if (volume) playSound(BUTTON_CLICK);
      dispatch({ type: SELECT_GAMEMODE, payload: gameMode });
    } else {
      if (volume) playSound(ERROR_CLICK);
    }
  };

  const handleSubGameModeChange = (subGameMode, gameMode) => {
    if (
      (gameMode === BLITZ && subGameMode !== currentBlitzGameMode) ||
      (gameMode === TIMETRIAL && subGameMode !== currentTimeTrialGameMode)
    ) {
      if (volume) playSound(BUTTON_CLICK);
      dispatch({
        type: SELECT_SUBGAMEMODE,
        payload: { subGameMode: subGameMode, gameMode: gameMode },
      });
    } else {
      if (volume) playSound(ERROR_CLICK);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.buttonWheelContainer}>
        <View style={styles.buttonWheelViewRow}>
          <BackButton />
          <MusicButton />
        </View>
        <View style={styles.buttonWheelViewRow}>
          <HomeButton />
          <VolumeButton />
        </View>
      </View>
      <View style={styles.difficultyOptionsView}>
        <Text style={styles.titleTextMedium}>GAMEMODES</Text>
        {gameModeOptions.map((gameMode) => (
          <TouchableWithoutFeedback
            key={gameMode}
            onPress={() => handleGameModeChange(gameMode)}
          >
            <View>
              <Text
                style={[
                  styles.titleTextSmall,
                  styles.centerText,
                  gameMode === currentGameMode ? styles.difficultyOption : null,
                ]}
              >
                {gameMode}
                {"\n"}
              </Text>
              <View>
                {currentGameMode === BLITZ && gameMode === BLITZ
                  ? blitzGameModes.map((subGameMode) => (
                      <View key={subGameMode}>
                        {gameMode === currentGameMode ? (
                          <TouchableWithoutFeedback
                            onPress={() =>
                              handleSubGameModeChange(subGameMode, gameMode)
                            }
                          >
                            <View>
                              <Text
                                style={[
                                  styles.centerText,
                                  styles.subGameModeDifficulty,
                                  styles.titleTextXS,
                                  subGameMode === currentBlitzGameMode
                                    ? styles.difficultyOption
                                    : null,
                                ]}
                              >
                                {subGameMode}s
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        ) : (
                          <TouchableWithoutFeedback>
                            <View>
                              <Text
                                style={[
                                  styles.centerText,
                                  styles.subGameModeDifficulty,
                                  styles.titleTextXS,
                                ]}
                              >
                                {subGameMode}s
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        )}
                      </View>
                    ))
                  : currentGameMode === TIMETRIAL && gameMode === TIMETRIAL
                  ? timeTrialGameModes.map((subGameMode) => (
                      <View key={subGameMode}>
                        {gameMode === currentGameMode ? (
                          <TouchableWithoutFeedback
                            onPress={() =>
                              handleSubGameModeChange(subGameMode, gameMode)
                            }
                          >
                            <View>
                              <Text
                                style={[
                                  styles.subGameModeDifficulty,
                                  styles.titleTextXS,
                                  styles.centerText,
                                  subGameMode === currentTimeTrialGameMode
                                    ? styles.difficultyOption
                                    : null,
                                ]}
                              >
                                {subGameMode}s
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        ) : (
                          <TouchableWithoutFeedback>
                            <View>
                              <Text
                                style={[
                                  styles.subGameModeDifficulty,
                                  styles.titleTextXS,
                                  styles.centerText,
                                ]}
                              >
                                {subGameMode}s
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        )}
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
