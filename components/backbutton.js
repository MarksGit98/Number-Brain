import React from "react";
import { TouchableWithoutFeedback, Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { PREVIOUS_SCREEN } from "../constants/constants";
export const BackButton = () => {
  const dispatch = useDispatch();

  return (
    <View styles={styles.backButtonPosition}>
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: PREVIOUS_SCREEN })}
      >
        <View>
          <Image
            style={[styles.backButton]}
            source={require("../assets/back-arrow.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
