import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { HomeButton } from "./homeButton";
import { BackButton } from "./backButton";

export const TopLeftButtonWheels = () => {
  return (
    <View style={styles.buttonWheelColumnContainer}>
      <BackButton />
      <HomeButton />
    </View>
  );
};
