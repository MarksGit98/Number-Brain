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
    borderRadius: "50%",
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
  backButton: {
    top: 120,
    height: 50,
    width: 50,
  },
});
