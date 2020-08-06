import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  bigNumber: {
    fontSize: 90,
    justifyContent: "center",
  },
  smallNumber: {
    fontSize: 42,
    marginRight: 10,
    marginLeft: 10,
  },
  mainView: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tiles: {
    backgroundColor: "yellow",
    marginLeft: 10,
    marginRight: 10,
  },
  SelectedTile1: {
    backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10,
  },
  SelectedTile2: {
    backgroundColor: "blue",
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
