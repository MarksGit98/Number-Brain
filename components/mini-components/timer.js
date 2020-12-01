import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
export const Timer = ({ startingTime }) => {
  const [seconds, setSeconds] = useState(startingTime);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View>
      <Text style={styles.smallWhiteText}>
        {seconds > 0 ? seconds : "TIME'S UP"}
      </Text>
    </View>
  );
};
