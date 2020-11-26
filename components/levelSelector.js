import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { puzzles } from "../puzzles/puzzles";
import { difficultySelector, levelSelector } from "./selectors/stateSelectors";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles/styles";
import {
  LOCAL_DIFFICULTY,
  LOCAL_LEVEL,
  SELECT_LEVEL,
  SELECT_DIFFICULTY,
} from "../constants/constants";
import { _storeData } from "../localStorage/storeData";
import { _retrieveData } from "../localStorage/retrieveData";
import { BackButton } from "./backbutton";
export const LevelSelector = () => {
  const dispatch = useDispatch();
  const [levels, setLevels] = useState([]);
  const currentLevel = useSelector(levelSelector);
  const currentDifficulty = useSelector(difficultySelector);
  const setSettings = async () => {
    const difficulty = await _retrieveData(LOCAL_DIFFICULTY);
    difficulty !== null
      ? dispatch({ type: SELECT_DIFFICULTY, payload: difficulty })
      : dispatch({ type: SELECT_DIFFICULTY, payload: "easy" });

    const level = await _retrieveData(`${difficulty}${LOCAL_LEVEL}`);
    level !== null
      ? dispatch({ type: SELECT_LEVEL, payload: level })
      : dispatch({ type: SELECT_LEVEL, payload: "1" });
  };
  useEffect(() => {
    setSettings();
  }, [currentLevel]);

  useEffect(() => {
    let selectedPuzzleSize;
    currentDifficulty === "easy"
      ? (selectedPuzzleSize = Object.keys(puzzles.easy).length)
      : currentDifficulty === "medium"
      ? (selectedPuzzleSize = Object.keys(puzzles.medium).length)
      : currentDifficulty === "hard"
      ? (selectedPuzzleSize = Object.keys(puzzles.hard).length)
      : null;
    const levels = [];
    for (let i = 1; i <= selectedPuzzleSize; i++) {
      levels.push(String(i));
    }
    setLevels(levels);
  }, []);

  useEffect(() => {
    handleLevelChange(currentLevel);
  }, [currentLevel]);

  const handleLevelChange = (level) => {
    if (level !== currentLevel) {
      dispatch({ type: SELECT_LEVEL, payload: level });
    }
  };

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <BackButton />
        <View style={styles.levelContainer}>
          {levels.map((level) => (
            <TouchableWithoutFeedback
              key={level}
              onPress={() => handleLevelChange(level)}
            >
              <View
                style={[
                  styles.levelBox,
                  currentLevel === level ? { backgroundColor: "blue" } : null,
                ]}
              >
                <Text
                  style={[
                    styles.smallWhiteText,
                    currentLevel === level ? styles.difficultyOption : null,
                  ]}
                >
                  {level}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
