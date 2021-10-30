import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { StyleSheet } from "react-native";
import {
  tileColor,
  backgroundColor,
  buttonWheelColor,
  levelButtonColor,
} from "../../constants/constants";

export const styles = StyleSheet.create({
  extraSmallWhiteText: {
    fontSize: 20,
    color: "white",
    fontFamily: "digital",
  },
  smallWhiteText: {
    fontSize: 40,
    color: "white",
    fontFamily: "digital",
  },

  mediumWhiteText: {
    fontSize: 50,
    color: "white",
    fontFamily: "digital",
  },

  largeWhiteText: {
    fontSize: 90,
    color: "white",
    fontFamily: "digital",
  },

  extraLargeWhiteText: {
    fontSize: 130,
    color: "white",
    fontFamily: "digital",
  },

  center: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  mainView: {
    backgroundColor: backgroundColor,
    height: height,
  },

  unselectedTile: {
    backgroundColor: tileColor,
  },

  disabledTile: {
    backgroundColor: "gray",
  },

  symbolTile: {
    margin: 0.03 * width,
  },

  removeAdsButton: {
    width: 0.6 * width,
    height: 0.06 * height,
    borderRadius: 0.015 * height,
    backgroundColor: "orange",
  },

  tile: {
    margin: 0.025 * width,
    height: 0.075 * height,
    width: 0.075 * height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  tileBox: {
    display: "flex",
    height: 0.14 * height,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityTile: {
    display: "flex",
    height: 0.03 * height,
    width: 0.03 * height,
    marginBottom: 0.043 * height,
    marginLeft: 0.06 * height,
    borderRadius: 0.02 * height,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },

  centerText: {
    textAlign: "center",
  },

  bigTile: {
    width: 0.21 * height,
    height: 0.21 * height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0.03 * height,
  },

  selectedTile1: {
    backgroundColor: "red",
  },

  selectedTile2: {
    backgroundColor: "blue",
  },

  selectedSymbol: {
    backgroundColor: "green",
  },

  row: {
    width: 0.95 * width,
    flexDirection: "row",
    justifyContent: "center",
  },

  symbolRow: {
    width: 0.95 * width,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonRow: {
    display: "flex",
    flexDirection: "row",
  },

  reverseTurnButton: {
    height: 0.07 * height,
    width: 0.07 * height,
    zIndex: 2,
  },

  playButtonText: {
    fontSize: 70,
    color: "white",
    justifyContent: "center",
  },

  bottomAdBanner: {
    position: "absolute",
    width: width,
    bottom: 0.01 * height,
  },

  subGameModeDifficulty: {
    marginLeft: 0.01 * height,
    marginRight: 0.01 * height,
  },

  difficultyOptionsView: {
    justifyContent: "center",
    alignItems: "center",
  },

  difficultyOptionsPosition: {
    marginTop: 0.01 * height,
  },

  centerText: {
    textAlign: "center",
  },

  difficultyOption: {
    backgroundColor: "blue",
  },

  titleTextXS: {
    fontFamily: "digital",
    fontSize: 25,
    // textShadow: "2px 2px #000",
    color: "white",
  },
  titleTextSmall: {
    fontFamily: "digital",
    fontSize: 32,
    // textShadow: "2px 2px #000",
    color: "white",
  },

  titleTextMedium: {
    fontFamily: "digital",
    fontSize: 45,
    // textShadow: "2px 2px #000",
    color: "white",
  },

  titleTextLarge: {
    fontFamily: "digital",
    fontSize: 50,
    // textShadow: "3px 3px #000",
    color: "white",
  },

  titleTextXL: {
    fontFamily: "digital",
    fontSize: 60,
    // textShadow: "3px 3px #000",
    color: "white",
    marginBottom: 0.02 * height,
  },

  titleTextXXL: {
    fontFamily: "digital",
    fontSize: 70,
    // textShadow: "4px 4px #000",
    color: "white",
    marginBottom: 0.02 * height,
  },

  titleTextXXXL: {
    fontFamily: "digital",
    fontSize: 90,
    // textShadow: "4px 4px #000",
    color: "white",
    marginBottom: 0.02 * height,
  },

  levelBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: levelButtonColor,
    height: 0.25 * width,
    width: 0.25 * width,
    borderRadius: 0.13 * width,
    margin: 0.03 * width,
  },

  levelContainer: {
    marginLeft: 0.03 * width,
    marginRight: 0.03 * width,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "space-evenly",
  },

  wheelIconReverseTurn: {
    width: 0.08 * width,
    height: 0.042 * height,
  },

  wheelIconBackButton: {
    width: 0.08 * width,
    height: 0.025 * height,
  },

  wheelIconHintButton: {
    width: 0.08 * width,
    height: 0.043 * height,
  },

  wheelIconHomeButton: {
    width: 0.075 * width,
    height: 0.035 * height,
  },

  wheelIconMusicButton: {
    width: 0.08 * width,
    height: 0.035 * height,
  },

  wheelIconResetButton: {
    width: 0.08 * width,
    height: 0.045 * height,
  },

  wheelIconVolumeButton: {
    width: 0.08 * width,
    height: 0.032 * height,
  },

  buttonWheel: {
    backgroundColor: buttonWheelColor,
    opacity: 60,
    height: 0.07 * height,
    width: 0.07 * height,
    borderRadius: 0.04 * height,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0.01 * height,
  },

  volumeButton: {
    opacity: 100,
    width: 0.05 * width,
    height: "auto",
  },

  musicButton: {
    opacity: 100,
    width: 0.05 * width,
    height: "auto",
  },

  buttonWheelColumnContainer: {
    margin: 0.03 * width,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  upperScreen: {
    display: "flex",
    flexDirection: "row",
  },

  upperText: {
    marginTop: 0.02 * height,
  },

  buttonWheelContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width,
    marginTop: 0.03 * width,
    justifyContent: "space-between",
  },

  margin: {
    margin: 0.04 * height,
  },

  topMargin: {
    marginTop: 0.04 * height,
  },

  halfMargin: {
    margin: 0.02 * height,
  },

  tilesRow: {
    marginBottom: height * 0.015,
  },

  symbolsRow: {
    marginTop: height * 0.02,
    marginBottom: height * 0.04,
  },

  gameScreenButtonWheels: {
    justifyContent: "space-evenly",
    marginTop: height * 0.05,
  },

  gameScreenTextAndBigTile: {
    display: "flex",
    flex: 4,
    textAlign: "center",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },

  leftRightMargin: {
    marginLeft: 0.03 * width,
    marginRight: 0.03 * width,
    marginTop: 0,
    marginBottom: 0,
  },

  depressedButton: {
    transform: [{ translateY: 50 }],
  },
  symbolContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});
