import { StatusBar } from "expo-status-bar";
import React from "react";
import { GameScreen } from "./components/gameScreen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <GameScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
