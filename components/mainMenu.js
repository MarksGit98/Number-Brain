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
} from "../constants/constants";
import { difficultySelector, levelSelector } from "./selectors/stateSelectors";
import { _retrieveData } from "../localStorage/retrieveData";
import { _storeData } from "../localStorage/storeData";
export const MainMenu = () => {
  const dispatch = useDispatch();

  const [currentLevel, setCurrentLevel] = useState(undefined);
  const [currentDifficulty, setCurrentDifficulty] = useState(undefined);
  const gameDifficulty = useSelector(difficultySelector);
  const gameLevel = useSelector(levelSelector);
  const setSettings = async () => {
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? setCurrentDifficulty(difficulty)
      : setCurrentDifficulty("easy");

    const level = await _retrieveData(`${difficulty}${LOCAL_LEVEL}`);
    level !== null ? setCurrentLevel(level) : setCurrentLevel("1");
  };
  useEffect(() => {
    setSettings();
  }, []);

  useEffect(() => {
    dispatch({
      type: INITIALIZE_ROUND,
      payload: { difficulty: currentDifficulty, level: currentLevel },
    });
  }, [currentDifficulty, currentLevel]);

  useEffect(() => {
    currentDifficulty !== gameDifficulty
      ? setCurrentDifficulty((current) => gameDifficulty)
      : null;
    currentLevel !== gameLevel ? setCurrentLevel((current) => gameLevel) : null;
  }, [gameDifficulty, gameLevel]);

  const difficultyOptions = ["easy", "medium", "hard"];
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.difficultyOptionsView}>
        {difficultyOptions.map((difficulty) => (
          <TouchableWithoutFeedback
            key={difficulty}
            onPress={() =>
              dispatch({ type: SELECT_DIFFICULTY, payload: difficulty })
            }
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
      {/* <View style={styles.gameModeButton}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({ type: SELECT_GAMEMODE, payload: GAME_SCREEN })
          }
        >
          <Text style={styles.playButtonText}>GAMEMODE</Text>
        </TouchableWithoutFeedback>
      </View> */}
      <View style={styles.gameModeButton}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({ type: SWITCH_SCREEN, payload: LEVEL_SCREEN })
          }
        >
          <Text style={styles.mediumWhiteText}>LEVEL SELECT</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.playButton}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({ type: SWITCH_SCREEN, payload: GAME_SCREEN })
          }
        >
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
