import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  bigNumber: {
    fontSize: 90,
    justifyContent: "center",
  },
  smallNumber: {
    fontSize: 28,
  },
  mainView: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    zIndex: 2,
  },
  playButtonText: {
    fontSize: 70,
    color: "white",
    justifyContent: "center",
  },
  playButton: {
    height: 75,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
