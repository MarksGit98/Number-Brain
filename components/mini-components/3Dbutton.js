import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  interpolate,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from "react-native-reanimated";

export const DepthButton = ({ sign, buttonColor, handleSelection }) => {
  const { width, height } = Dimensions.get("window");
  const [selected, setSelected] = useState(false);
  const imageHeight = useSharedValue(0.09 * height);
  const imageWidth = useSharedValue(0.09 * height);
  const borderRadius = useSharedValue(12);
  const marginTop = useSharedValue(-12);
  const paddingTop = useSharedValue(0);
  const paddingRight = useSharedValue(0);
  const paddingLeft = useSharedValue(0);
  const paddingBottom = useSharedValue(12);

  const innerStyle = useAnimatedStyle(() => {
    return {
      borderRadius: borderRadius.value,
    };
  });

  const heightStyle = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
      paddingBottom: paddingBottom.value,
      paddingTop: paddingTop.value,
      paddingRight: paddingRight.value,
      paddingLeft: paddingLeft.value,
    };
  });

  const symbolStyle = useAnimatedStyle(() => {
    return {
      height: imageHeight.value,
      width: imageWidth.value,
    };
  });

  const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    button3D: {
      height: 120,
      width: 140,
    },
    button3DOuter: {
      flex: 1,
      padding: 10,
      borderRadius: 14,
      backgroundColor: "rgba(0,0,0,.65)",
    },
    height: {
      borderRadius: 16,
      backgroundColor: "rgba(255,0,0,.5)",
    },
    inner: {
      backgroundColor: buttonColor,
      alignItems: "center",
      justifyContent: "center",
      height: 100,
    },
    white: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 20,
    },
  });

  const handlePressOut = () => {
    const initialEffectDuration = 40;
    const delayedEffectDuration = 80;
    const initialImageScaleConstant = 0.086;
    const delayedImageScaleConstant = 0.09;
    marginTop.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    paddingTop.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    paddingRight.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    paddingLeft.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    paddingBottom.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    borderRadius.value = withTiming(16, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    imageHeight.value = withTiming(height * initialImageScaleConstant, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    imageWidth.value = withTiming(height * initialImageScaleConstant, {
      duration: initialEffectDuration,
      easing: Easing.bounce,
    });
    if (!selected) {
      borderRadius.value = withDelay(
        initialEffectDuration - 5,
        withTiming(12, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      paddingBottom.value = withDelay(
        initialEffectDuration - 5,
        withTiming(12, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      marginTop.value = withDelay(
        initialEffectDuration - 5,
        withTiming(-12, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      paddingTop.value = withDelay(
        initialEffectDuration - 5,
        withTiming(0, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      paddingRight.value = withDelay(
        initialEffectDuration - 5,
        withTiming(0, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      paddingLeft.value = withDelay(
        initialEffectDuration - 5,
        withTiming(0, {
          duration: delayedEffectDuration,
          easing: Easing.bounce,
        })
      );
      imageHeight.value = withDelay(
        initialEffectDuration - 5,
        withTiming(height * delayedImageScaleConstant, {
          duration: initialEffectDuration,
          easing: Easing.bounce,
        })
      );
      imageWidth.value = withDelay(
        initialEffectDuration - 5,
        withTiming(height * delayedImageScaleConstant, {
          duration: initialEffectDuration,
          easing: Easing.bounce,
        })
      );
    }
  };
  const handlePressIn = () => {
    setSelected((value) => !value);
    if (selected) {
      handleSelection(sign);
    }
    const initialEffectDuration = 60;
    const delayedEffectDuration = 30;
    const initialImageScaleConstant = 0.086;
    const delayedImageScaleConstant = 0.084;
    borderRadius.value = withTiming(16, {
      duration: initialEffectDuration,
      easing: Easing.linear,
    });
    paddingBottom.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.linear,
    });
    marginTop.value = withTiming(0, {
      duration: initialEffectDuration,
      easing: Easing.linear,
    });
    imageHeight.value = withTiming(height * initialImageScaleConstant, {
      duration: initialEffectDuration,
      easing: Easing.linear,
    });
    imageWidth.value = withTiming(height * initialImageScaleConstant, {
      duration: initialEffectDuration,
      easing: Easing.linear,
    });
    paddingTop.value = withDelay(
      initialEffectDuration - 2,
      withTiming(6, {
        duration: delayedEffectDuration,
        easing: Easing.linear,
      })
    );
    paddingRight.value = withDelay(
      initialEffectDuration - 2,
      withTiming(6, {
        duration: delayedEffectDuration,
        easing: Easing.linear,
      })
    );
    paddingLeft.value = withDelay(
      initialEffectDuration - 2,
      withTiming(6, {
        duration: delayedEffectDuration,
        easing: Easing.linear,
      })
    );
    paddingBottom.value = withDelay(
      initialEffectDuration - 2,
      withTiming(0, {
        duration: delayedEffectDuration,
        easing: Easing.linear,
      })
    );
    marginTop.value = withDelay(
      initialEffectDuration - 2,
      withTiming(0, {
        duration: delayedEffectDuration,
        easing: Easing.linear,
      })
    );
    imageHeight.value = withDelay(
      initialEffectDuration - 2,
      withTiming(height * delayedImageScaleConstant, {
        duration: initialEffectDuration,
        easing: Easing.linear,
      })
    );
    imageWidth.value = withDelay(
      initialEffectDuration - 2,
      withTiming(height * delayedImageScaleConstant, {
        duration: initialEffectDuration,
        easing: Easing.linear,
      })
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
      >
        <View style={styles.button3D}>
          <View style={styles.button3DOuter}>
            <Animated.View style={[styles.height, heightStyle]}>
              <Animated.View style={[styles.inner, innerStyle]}>
                <Animated.Image
                  resizeMode="contain"
                  style={symbolStyle}
                  source={
                    sign === "add"
                      ? require(`../../assets/add-sign.png`)
                      : sign === "subtract"
                      ? require(`../../assets/subtract-sign.png`)
                      : sign === "multiply"
                      ? require(`../../assets/multiply-sign.png`)
                      : sign === "divide"
                      ? require(`../../assets/divide-sign.png`)
                      : null
                  }
                />
              </Animated.View>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
