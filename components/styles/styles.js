import { StyleSheet } from "react-native";
import "../../styles.css";
import {
  tileColor,
  backgroundColor,
  buttonWheelColor,
  levelButtonColor,
} from "../../constants/constants";
export const styles = StyleSheet.create({
  bigNumber: {
    fontSize: 90,
    justifyContent: "center",
  },

  smallWhiteText: {
    fontSize: 40,
    color: "white",
    fontFamily: "Digital",
  },

  mediumWhiteText: {
    fontSize: 50,
    color: "white",
    fontFamily: "Digital",
  },

  largeWhiteText: {
    fontSize: 90,
    color: "white",
    fontFamily: "Digital",
  },

  extraLargeWhiteText: {
    fontSize: 130,
    color: "white",
    fontFamily: "Digital",
  },

  center: {
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "center",
  },

  mainView: {
    backgroundColor: backgroundColor,
    flex: 1,
  },

  unselectedTile: {
    backgroundColor: tileColor,
  },

  disabledTile: {
    backgroundColor: "gray",
  },

  symbolTile: {
    margin: 10,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },

  tile: {
    margin: 10,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  quantityTile: {
    height: 12,
    width: 12,
    borderRadius: 50,
    color: "white",
    backgroundColor: "#000",
  },

  bigTile: {
    width: 200,
    height: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
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
    flexDirection: "row",
    justifyContent: "center",
  },

  reverseTurnButton: {
    height: 50,
    width: 50,
    zIndex: 2,
  },

  playButtonText: {
    fontSize: 70,
    color: "white",
    justifyContent: "center",
  },

  bigButton: {
    borderRadius: 40,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    marginTop: 20,
    height: 75,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  subGameModeDifficulty: {
    marginLeft: 5,
    marginRight: 5,
  },

  difficultyOptionsView: {
    justifyContent: "center",
    alignItems: "center",
  },

  difficultyOptionsPosition: {
    marginTop: "10%",
  },

  centerText: {
    textAlign: "center",
  },

  difficultyOption: {
    backgroundColor: "blue",
  },

  titleTextXS: {
    fontFamily: "Digital",
    fontSize: 25,
    textShadow: "2px 2px #000",
    color: "white",
  },
  titleTextSmall: {
    fontFamily: "Digital",
    fontSize: 35,
    textShadow: "2px 2px #000",
    color: "white",
  },

  titleTextMedium: {
    fontFamily: "Digital",
    fontSize: 45,
    textShadow: "2px 2px #000",
    color: "white",
  },

  titleTextLarge: {
    fontFamily: "Digital",
    fontSize: 50,
    textShadow: "3px 3px #000",
    color: "white",
  },

  titleTextXL: {
    fontFamily: "Digital",
    fontSize: 60,
    textShadow: "3px 3px #000",
    color: "white",
    marginBottom: 10,
  },

  titleTextXXL: {
    fontFamily: "Digital",
    fontSize: 70,
    textShadow: "4px 4px #000",
    color: "white",
    marginBottom: 10,
  },

  titleTextXXXL: {
    fontFamily: "Digital",
    fontSize: 90,
    textShadow: "4px 4px #000",
    color: "white",
    marginBottom: 10,
  },

  levelBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: levelButtonColor,
    height: 90,
    width: 90,
    borderRadius: 50,
    marginBottom: 12,
  },

  levelContainer: {
    marginLeft: "3%",
    marginRight: "3%",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "space-evenly",
  },

  wheelIcon: {
    position: "relative",
    margin: "25%",
    height: 32,
    width: 32,
  },

  buttonWheel: {
    backgroundColor: buttonWheelColor,
    opacity: 60,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
  },

  volumeButton: {
    opacity: 100,
    width: 30,
    height: "auto",
  },

  musicButton: {
    opacity: 100,
    width: 30,
    height: "auto",
  },

  buttonWheelViewRow: {
    flexDirection: "row",
    marginBottom: "2%",
    display: "flex",
    justifyContent: "space-between",
  },

  gameScreenCenteredContent: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonWheelContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "3%",
    justifyContent: "space-between",
  },

  tilesAndSymbolsRows: {
    marginTop: "10%",
  },

  gameScreenText: {
    margin: "5%",
    alignContent: "center",
    textAlign: "center",
  },
});
