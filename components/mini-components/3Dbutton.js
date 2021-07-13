import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  interpolate,
  TouchableWithoutFeedback,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export const Button = () => {
  const borderRadius = useSharedValue(12);
  const marginBottom = useSharedValue(0);
  const marginTop = useSharedValue(-12);
  const paddingTop = useSharedValue(0);
  const paddingRight = useSharedValue(0);
  const paddingLeft = useSharedValue(0);
  const paddingBottom = useSharedValue(12);

  const innerStyle = useAnimatedStyle(() => {
    return {
      borderRadius: borderRadius.value,
    };
  }, []);

  const heightStyle = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
      paddingBottom: paddingBottom.value,
      marginBottom: marginBottom.value,
    };
  }, []);

  const depthStyle = useAnimatedStyle(() => {
    return {
      marginBottom: marginBottom.value,
      paddingTop: paddingTop.value,
      paddingRight: paddingRight.value,
      paddingLeft: paddingLeft.value,
    };
  }, []);

  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected((value) => !value);
    if (!selected) {
      marginTop.value = withTiming(0, { duration: 100, easing: Easing.linear });
      paddingBottom.value = withTiming(0, {
        duration: 100,
        easing: Easing.linear,
      });
      borderRadius.value = withTiming(16, {
        duration: 100,
        easing: Easing.linear,
      });
    } else {
      marginTop.value = withTiming(-12, {
        duration: 100,
        easing: Easing.bounce,
      });
      paddingBottom.value = withTiming(12, {
        duration: 100,
        easing: Easing.bounce,
      });
      borderRadius.value = withTiming(12, {
        duration: 100,
        easing: Easing.bounce,
      });
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback onPress={() => handlePress()}>
        <View style={styles.button3D}>
          <View style={styles.button3DOuter}>
            <Animated.View style={[styles.height, heightStyle]}>
              <Animated.View style={[styles.inner, innerStyle]}>
                <Text style={styles.white}>Airhorn</Text>
              </Animated.View>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button3D: {
    height: 80,
    width: 180,
  },
  button3DOuter: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.65)",
  },
  height: {
    borderRadius: 16,
    backgroundColor: "rgba(255,0,0,0.5)",
  },
  inner: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  white: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
