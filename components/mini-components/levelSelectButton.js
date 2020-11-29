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
  LEVEL_SCREEN,
} from "../../constants/constants";
export default function LevelSelectButton() {
  const dispatch = useDispatch();
  return (
    <View style={[styles.bigButton, { backgroundColor: "red" }]}>
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: SWITCH_SCREEN, payload: LEVEL_SCREEN })}
      >
        <View>
          <Text style={styles.mediumWhiteText}>LEVEL SELECT</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
