import React from "react";
import { AdMobBanner } from "expo-ads-admob";
import { iOSBannerID, AndroidBannerID } from "./adIds";
import { Platform } from "react-native";

export const BannerAd = () => {
  const bannerID = Platform.OS === "ios" ? iOSBannerID : AndroidBannerID;
  return (
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID={bannerID}
      servePersonalizedAds={true}
      onDidFailToReceiveAdWithError={(e) => bannerError(e)}
    />
  );
};
