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
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_LEVEL,
  SELECT_DIFFICULTY,
  CLASSIC,
  LIMITED,
  TIMETRIAL,
  BLITZ,
  LOCAL_GAMEMODE,
  EASY,
  SELECT_GAMEMODE,
  BLITZ_MEDIUM,
  LOCAL_BLITZ_GAMEMODE,
  SELECT_SUBGAMEMODE,
  LOCAL_TIMETRIAL_GAMEMODE,
  TIMETRIAL_MEDIUM,
  BUTTON_CLICK,
  ERROR_CLICK,
} from "../constants/constants";
import { difficultySelector, volumeSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import GameModeButton from "./mini-components/gameModeButton";
import { PlayButton } from "./mini-components/playButton";
import { LevelSelectButton } from "./mini-components/levelSelectButton";
import { playSound } from "../constants/buttonClick";
import { TopButtonWheelComponent } from "./mini-components/topButtonWheelComponent";
import { BannerAd } from "./ads/bannerAd";
import { Button } from "./mini-components/3Dbutton";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const currentDifficulty = useSelector(difficultySelector);
  const volume = useSelector(volumeSelector);

  const setSettings = async () => {
    const gameMode = await _retrieveData(LOCAL_GAMEMODE);
    gameMode !== null
      ? dispatch({
          type: SELECT_GAMEMODE,
          payload: gameMode,
        })
      : dispatch({
          type: SELECT_GAMEMODE,
          payload: CLASSIC,
        });
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);

    if (gameMode === CLASSIC || gameMode === LIMITED) {
      if (difficulty === null || difficulty === "undefined") {
        difficulty = EASY;
      }
      const level = await _retrieveData(`${difficulty}${LOCAL_LEVEL}`);
      level !== null && level !== "undefined"
        ? loadLevel(level)
        : loadLevel("1");
    }
    const subGameMode =
      gameMode === BLITZ
        ? await _retrieveData(LOCAL_BLITZ_GAMEMODE)
        : gameMode === TIMETRIAL
        ? await _retrieveData(LOCAL_TIMETRIAL_GAMEMODE)
        : null;
    subGameMode !== null && subGameMode !== "undefined"
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: {
            subGameMode: subGameMode,
            gameMode: gameMode,
          },
        })
      : gameMode === BLITZ
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: {
            subGameMode: BLITZ_MEDIUM,
            gameMode: gameMode,
          },
        })
      : gameMode === TIMETRIAL
      ? dispatch({
          type: SELECT_SUBGAMEMODE,
          payload: {
            subGameMode: TIMETRIAL_MEDIUM,
            gameMode: gameMode,
          },
        })
      : null;
    difficulty !== null && difficulty !== "undefined"
      ? loadDifficulty(difficulty)
      : loadDifficulty(EASY);
  };

  const loadLevel = (level) => {
    dispatch({
      type: SELECT_LEVEL,
      payload: level,
    });
  };

  const loadDifficulty = (difficulty) => {
    dispatch({
      type: SELECT_DIFFICULTY,
      payload: difficulty,
    });
  };
  useEffect(() => {
    setSettings();
  }, [currentDifficulty]);

  const handleDifficultyChange = (difficulty) => {
    if (difficulty !== currentDifficulty) {
      dispatch({ type: SELECT_DIFFICULTY, payload: difficulty });
    }
    try {
      if (difficulty !== currentDifficulty) {
        if (volume) playSound(BUTTON_CLICK);
      } else {
        if (volume) playSound(ERROR_CLICK);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const bannerError = () => {
    alert(e);
  };

  const difficultyOptions = ["easy", "medium", "hard"];
  return (
    <SafeAreaView style={styles.mainView}>
      <TopButtonWheelComponent />
      <View
        style={[styles.difficultyOptionsView, styles.difficultyOptionsPosition]}
      >
        {difficultyOptions.map((difficulty) => (
          <TouchableWithoutFeedback
            key={difficulty}
            onPress={() => handleDifficultyChange(difficulty)}
          >
            <View>
              <Text
                style={[
                  styles.titleTextSmall,
                  difficulty === currentDifficulty
                    ? styles.difficultyOption
                    : null,
                ]}
              >
                {difficulty}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <GameModeButton />
      <LevelSelectButton />
      <PlayButton />
      <Button />
      <View style={styles.bottomAdBanner}>
        <BannerAd />
      </View>
    </SafeAreaView>
  );
};
