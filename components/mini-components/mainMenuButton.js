import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SELECT_GAMEMODE,
  GAME_SCREEN,
  SWITCH_SCREEN,
  MAIN_MENU,
} from "../../constants/constants";
export const MainMenuButton = () => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.bigButton, { backgroundColor: "red" }]}>
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: SWITCH_SCREEN, payload: MAIN_MENU })}
      >
        <View>
          <Text style={styles.mediumWhiteText}>MAIN MENU</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
