import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles/styles";
import {
  tilesSelector,
  bigNumberSelector,
  tile1Selector,
  tile2Selector,
  symbolSelector,
  wonSelector,
} from "./selectors/stateSelectors";
import {
  SELECT_TILE,
  SELECT_TILE_1,
  SELECT_TILE_2,
  PERFORM_OPERATION,
  SELECT_SYMBOL,
  REVERSE_TURN,
  RESET_ON_INVALID_OPERATION,
  CHECK_FOR_WIN,
  WON_ROUND,
  INITIALIZE_ROUND,
} from "../constants/constants";
import { useSelectTile } from "./dispatches/dispatchOperations";
import { Symbols } from "./symbols";
import { Tiles } from "./tiles";
import { BackButton } from "./backbutton";
export const GameScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("triggered");
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
