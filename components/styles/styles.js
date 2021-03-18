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
    height: "60%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  tile: {
    margin: 10,
    height: 50,
    width: 50,
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
    height: "40%",
    width: "50%",
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
    justifyContent: "space-between",
  },

  reverseTurnButton: {
    height: 50,
    width: 50,
    zIndex: 2,
  },

  backButton: {
    position: "relative",
    marginTop: "25%",
    height: 30,
    width: 30,
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
    marginTop: "20%",
  },

  centerText: {
    textAlign: "center",
  },

  difficultyOption: {
    backgroundColor: "blue",
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
    paddingTop: 40,
    alignContent: "space-between",
    justifyContent: "space-evenly",
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
  },

  gameScreenCenteredContent: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  gameScreenButtonContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "5%",
    justifyContent: "space-between",
  },

  tilesAndSymbolsRows: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  gameScreenText: {
    margin: "5%",
    alignContent: "center",
    textAlign: "center",
  },
});
