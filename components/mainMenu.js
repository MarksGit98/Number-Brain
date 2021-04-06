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
  BUTTON_CLICK,
  ERROR_CLICK,
} from "../constants/constants";
import {
  difficultySelector,
  levelSelector,
  volumeSelector,
} from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
import GameModeButton from "./mini-components/gameModeButton";
import { PlayButton } from "./mini-components/playButton";
import { LevelSelectButton } from "./mini-components/levelSelectButton";
import { playSound } from "../constants/buttonClick";
import { VolumeButton } from "./mini-components/volumeButton";
import { MusicButton } from "./mini-components/musicButton";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const currentDifficulty = useSelector(difficultySelector);
  const volume = useSelector(volumeSelector);
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

  const difficultyOptions = ["easy", "medium", "hard"];
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.buttonWheelViewRow}>
        <MusicButton />
      </View>
      <View style={styles.buttonWheelViewRow}>
        <VolumeButton />
      </View>

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
    </SafeAreaView>
  );
};
