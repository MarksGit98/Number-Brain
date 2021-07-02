import { Platform } from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";
import { iOSInterstitialID, AndroidInterstitialID } from "./adIds";

let interstitialID = "";
export const playInterstitialAds = async () => {
  if (Platform.OS === "ios") {
    interstitialID = iOSInterstitialID;
  } else if (Platform.OS === "android") {
    interstitialID = AndroidInterstitialID;
  }
  AdMobInterstitial.setAdUnitID(interstitialID);
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};
