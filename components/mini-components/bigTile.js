import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { bigNumberSelector } from "../selectors/stateSelectors";
export const BigTile = () => {
  const bigNumber = useSelector(bigNumberSelector);
  return (
    <View style={[styles.bigTile, styles.unselectedTile]}>
      <Text style={[styles.titleTextXXXL, styles.center]}>{bigNumber}</Text>
    </View>
  );
};
