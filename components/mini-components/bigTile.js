import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../styles/styles";
import { wonSelector } from "../selectors/stateSelectors";
export const BigTile = () => {
  const bigNumber = useSelector(bigNumberSelector);
  const won = useSelector(wonSelector);
  return (
    <View>
      <View bottom="10%" style={[styles.bigTile, styles.UnselectedTile]}>
        <Text style={styles.bigNumber}>{bigNumber}</Text>
      </View>
      <View>
        <Text style={styles.bigNumber}>{won === true ? "WON" : ""}</Text>
      </View>
    </View>
  );
};
