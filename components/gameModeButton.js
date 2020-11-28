import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
  } from "react-native";
  import {styles} from './styles/styles'
  import { useSelector, useDispatch } from "react-redux";
  import {SELECT_GAMEMODE, GAME_SCREEN, SWITCH_SCREEN, GAMEMODE_SCREEN} from "../constants/constants"
export default function GameModeButton() {
    const dispatch = useDispatch();
    return (
        <View style={[styles.bigButton, {backgroundColor: "green"}]}>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({ type: SWITCH_SCREEN, payload: GAMEMODE_SCREEN })
          }
        >
        <View>
          <Text style={styles.mediumWhiteText}>GAMEMODE</Text>
          </View>
        </TouchableWithoutFeedback>
      </View> 
    )
}
