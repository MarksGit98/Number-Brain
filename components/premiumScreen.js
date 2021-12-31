import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { puzzles } from "../puzzles/puzzles";
// import { TextButton, RaisedTextButton } from "react-native-material-buttons";
import {
  difficultySelector,
  levelSelector,
  volumeSelector,
  premiumStatusSelector,
} from "./selectors/stateSelectors";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { styles } from "./styles/styles";
import { TOGGLE_PREMIUM } from "../constants/constants";
import { BannerAd } from "./ads/bannerAd";
import { _storeData } from "../localStorage/storeData";
import { _retrieveData } from "../localStorage/retrieveData";
import { playSound } from "../constants/buttonClick";
import { UpperScreen } from "./mini-components/upperScreen";

export const PremiumScreen = () => {
  const dispatch = useDispatch();
  const premiumStatus = useSelector(premiumStatusSelector);
  const volume = useSelector(volumeSelector);

  useEffect(() => {}, []);

  const handlePress = () => {
    dispatch({
      type: TOGGLE_PREMIUM,
      payload: true,
    });
  };
  return (
    <SafeAreaView style={[styles.mainView]}>
      <UpperScreen />
      <View style={styles.center}>
        <View style={[styles.removeAdsButton, styles.center]}>
          <TouchableWithoutFeedback onPress={() => handlePress()}>
            <Text style={styles.extraSmallWhiteText}>Remove Ads</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {!premiumStatus ? (
        <View style={styles.bottomAdBanner}>
          <BannerAd />
        </View>
      ) : null}
    </SafeAreaView>
  );
};
