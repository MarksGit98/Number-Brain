import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { puzzles } from "../puzzles/puzzles";
import { difficultySelector, levelSelector } from "./selectors/stateSelectors";
import { Grid } from "@material-ui/core"
import {
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles/styles";
import { SELECT_LEVEL, PREVIOUS_SCREEN } from "../constants/constants";
export const LevelSelector = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(difficultySelector);
  const currentLevel = useSelector(levelSelector);
  let selectedPuzzleSize;
  difficulty === "easy"
    ? (selectedPuzzleSize = Object.keys(puzzles.easy).length)
    : difficulty === "medium"
    ? (selectedPuzzleSize = Object.keys(puzzles.medium).length)
    : difficulty === "hard"
    ? (selectedPuzzleSize = Object.keys(puzzles.hard).length)
    : null;
  const levels = [];
  for (let i = 1; i <= selectedPuzzleSize; i++) {
    levels.push(i);
  }
  return (
    <View style={styles.mainView}>
    <ScrollView>
      <View style={styles.backButtonPosition}>
        <TouchableWithoutFeedback
          onPress={() => dispatch({ type: PREVIOUS_SCREEN })}
        >
          <Image
            style={styles.backButton}
            source={require("../assets/back-arrow.png")}
          />
        </TouchableWithoutFeedback>
      </View>
      <View>
      <View style={styles.levelContainer}>
        {levels.map((level) => ( 
            <TouchableWithoutFeedback
              key={level}
              
              onPress={() => dispatch({ type: SELECT_LEVEL, payload: level })}
            >
            <View style={[styles.levelBox, currentLevel === level ? {backgroundColor: "blue"}: null]}>
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
      </View>
    </ScrollView>
    </View>
  );
};
