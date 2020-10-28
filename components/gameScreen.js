import React, { useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import { bigNumberSelector, wonSelector } from "./selectors/stateSelectors";
import { INITIALIZE_ROUND } from "../constants/constants";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { BackButton } from "./backbutton";
export const GameScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: INITIALIZE_ROUND,
    });
  }, []);
  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <SafeAreaView style={styles.mainView}>
      <View bottom="10%" style={[styles.bigTile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>
      <View>
        <Text style={styles.bigNumber}>{won === true ? "WON" : ""}</Text>
      </View>
      <Tiles />
      <Symbols />
      <BackButton />
    </SafeAreaView>
  );
};
