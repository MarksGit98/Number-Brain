import { StyleSheet } from "react-native";
import { tileColor, backgroundColor } from "../../constants/constants";
export const styles = StyleSheet.create({
  bigNumber: {
    fontSize: 90,
    justifyContent: "center",
  },
  smallNumber: {
    fontSize: 28,
  },
  smallWhiteText: {
    fontSize: 28,
    color: "white",
  },
  mediumWhiteText: {
    fontSize: 42,
    color: "white",
  },
  largeWhiteText: {
    fontSize: 85,
    color: "white",
  },
  mainView: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: "center",
    marginBottom: 0,
  },
  unselectedTile: {
    backgroundColor: tileColor,
  },
  disabledTile: {
    backgroundColor: "gray",
  },
  symbolTile: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  tile: {
    marginLeft: 10,
    marginRight: 10,
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
    height: 150,
    width: 150,
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
    top: 100,
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
  centerText: {
    textAlign: "center",
  },
  difficultyOption: {
    backgroundColor: "blue",
  },
  backButtonPosition: {
    position: "absolute",
    top: "5%",
    left: "5%",
    alignSelf: "flex-end",
    zIndex: 2,
  },
  levelBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 100,
    width: 100,
    margin: 10,
  },
  levelContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 40,
  },

  buttonWheel: {
    position: "relative",
    backgroundColor: "#C8C8C8",
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "auto",
  },

  volumeButton: {
    zIndex: 2,
    width: 30,
  },

  volumeButtonPosition: {
    position: "relative",
    marginLeft: 200,
    marginTop: 10,
  },

  gameScreenCenteredContent: {
    alignContent: "center",
    alignItems: "center",
  },
});
