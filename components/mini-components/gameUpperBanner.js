import React from "react";
import { Text, View } from "react-native";
import {
  screenSelector,
  levelSelector,
  scoreSelector,
  gameModeSelector,
} from "../selectors/stateSelectors";
import { styles } from "../styles/styles";
import { useSelector } from "react-redux";
import {
  GAME_SCREEN,
  CLASSIC,
  LIMITED,
  BLITZ,
  TIMETRIAL,
  INFINITE,
} from "../../constants/constants";
export const GameUpperBanner = () => {
  const screen = useSelector(screenSelector);
  const currentLevel = useSelector(levelSelector);
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  return (
    <View style={styles.upperText}>
      <Text style={[styles.titleTextSmall, styles.centerText]}>
        {currentGameMode}
      </Text>
      {currentGameMode !== CLASSIC && currentGameMode !== LIMITED ? (
        <Text style={styles.titleTextXS}> Score:{score} </Text>
      ) : null}
      {currentGameMode !== INFINITE &&
      currentGameMode !== BLITZ &&
      currentGameMode !== TIMETRIAL ? (
        <Text style={[styles.titleTextXS, styles.centerText]}>
          Level {currentLevel}
        </Text>
      ) : null}
    </View>
  );
};
