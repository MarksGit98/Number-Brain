import React from "react";
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
import { useSelectTile } from "./dispatches/dispatchOperations";
import { REVERSE_TURN } from "../constants/constants";
export const BackButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => dispatch({ type: REVERSE_TURN })}>
      <Image
        style={styles.backButton}
        source={require("../assets/back-arrow.png")}
      />
    </TouchableWithoutFeedback>
  );
};
