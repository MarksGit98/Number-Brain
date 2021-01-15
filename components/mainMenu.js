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
  BUTTON_CLICK,
  ERROR_CLICK,
} from "../constants/constants";
import { difficultySelector, levelSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import GameModeButton from "./mini-components/gameModeButton";
import { PlayButton } from "./mini-components/playButton";
import { LevelSelectButton } from "./mini-components/levelSelectButton";
import { playSound } from "../constants/buttonClick";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const currentDifficulty = useSelector(difficultySelector);

  const setSettings = async () => {
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? dispatch({ type: SELECT_DIFFICULTY, payload: difficulty })
      : dispatch({ type: SELECT_DIFFICULTY, payload: "easy" });
  };

  useEffect(() => {
    setSettings();
  }, [currentDifficulty]);

  const handleDifficultyChange = (difficulty) => {
    if (difficulty !== currentDifficulty) {
      playSound(BUTTON_CLICK);
      dispatch({ type: SELECT_DIFFICULTY, payload: difficulty });
    } else {
      playSound(ERROR_CLICK);
    }
  };

  const difficultyOptions = ["easy", "medium", "hard"];
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.difficultyOptionsView}>
        {difficultyOptions.map((difficulty) => (
          <TouchableWithoutFeedback
            key={difficulty}
            onPress={() => handleDifficultyChange(difficulty)}
          >
            <View>
              <Text
                style={[
                  styles.smallWhiteText,
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
    </SafeAreaView>
  );
};
