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
} from "../../constants/constants";
export default function PlayButton() {
  const dispatch = useDispatch();
  return (
    <View style={[styles.bigButton, { backgroundColor: "blue" }]}>
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: SWITCH_SCREEN, payload: GAME_SCREEN })}
      >
        <View>
          <Text style={styles.mediumWhiteText}>PLAY</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
