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
import { HomeButton } from "./homeButton";
import { VolumeButton } from "./volumeButton";
import { BackButton } from "./backButton";
import { MusicButton } from "./musicButton";
import {
  GAME_SCREEN,
  CLASSIC,
  LIMITED,
  BLITZ,
  TIMETRIAL,
  INFINITE,
} from "../../constants/constants";
export const TopButtonWheelComponent = () => {
  const screen = useSelector(screenSelector);
  const currentLevel = useSelector(levelSelector);
  const score = useSelector(scoreSelector);
  const currentGameMode = useSelector(gameModeSelector);
  return (
    <View style={styles.buttonWheelContainer}>
      <View>
        <BackButton />
        <HomeButton />
      </View>
      {screen === GAME_SCREEN ? (
        <View style={styles.gameScreenText}>
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
      ) : null}
      <View style={[styles.rightColumn]}>
        <MusicButton floatRight={true} />
        <VolumeButton floatRight={true} />
      </View>
    </View>
  );
};
