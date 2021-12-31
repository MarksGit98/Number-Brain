import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { VolumeButton } from "./volumeButton";
import { MusicButton } from "./musicButton";
import { PremiumButton } from "./premiumButton";
export const TopRightButtonWheels = () => {
  return (
    <View style={styles.buttonWheelColumnContainer}>
      <MusicButton floatRight={true} />
      <VolumeButton floatRight={true} />
      <PremiumButton floatRight={true} />
    </View>
  );
};
