import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useSelector } from "react-redux";
import { GAME_SCREEN, BLITZ, TIMETRIAL } from "../../constants/constants";
import { TopLeftButtonWheels } from "./topLeftButtonWheels";
import { TopRightButtonWheels } from "./topRightButtonWheels";
import { BigTile } from "./bigTile";
import { GameUpperBanner } from "./gameUpperBanner";
import { screenSelector } from "../selectors/stateSelectors";
import { gameModeSelector } from "../selectors/stateSelectors";
export const UpperScreen = () => {
  const screen = useSelector(screenSelector);
  const currentGameMode = useSelector(gameModeSelector);
  return (
    <View style={styles.upperScreen}>
      <TopLeftButtonWheels />
      {screen === GAME_SCREEN ? (
        <View style={styles.gameScreenTextAndBigTile}>
          <GameUpperBanner />
          <View style={[styles.topMargin, styles.center]}>
            {currentGameMode === BLITZ || currentGameMode === TIMETRIAL ? (
              <Text style={styles.titleTextXS}>
                {seconds > 0 ? seconds : "TIME'S UP"}
              </Text>
            ) : null}
            <BigTile />
          </View>
        </View>
      ) : (
        <View style={{ display: "flex", flex: 4 }} />
      )}
      <TopRightButtonWheels />
    </View>
  );
};
