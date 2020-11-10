import { StyleSheet } from "react-native";
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
  mainView: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  UnselectedTile: {
    backgroundColor: "yellow",
  },
  DisabledTile: {
    backgroundColor: "gray",
  },
  tile: {
    marginLeft: 10,
    marginRight: 10,
    height: 47,
    width: 47,
    justifyContent: "center",
    alignItems: "center",
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
  },
  SelectedTile1: {
    backgroundColor: "red",
  },
  SelectedTile2: {
    backgroundColor: "blue",
  },
  SelectedSymbol: {
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
    height: 30,
    width: 30,
  },
  playButtonText: {
    fontSize: 70,
    color: "white",
    justifyContent: "center",
  },
  playButton: {
    borderRadius: 50,
    margin: 20,
    height: 75,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  gameModeButton: {
    borderRadius: 40,
    margin: 20,
    height: 75,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  difficultyOptionsView: {
    justifyContent: "center",
    alignItems: "center",
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
    margin: 10
  },
  levelContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40
  },
});
