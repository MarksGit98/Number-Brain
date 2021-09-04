import React, { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { selectedSymbolSelector } from "../selectors/stateSelectors";
import { useSelector, useDispatch } from "react-redux";
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

export const DepthButton = ({
  sign,
  buttonColor,
  depressed,
  propagateSelection,
}) => {
  const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };
  const { width, height } = Dimensions.get("window");
  const selectedSymbol = useSelector(selectedSymbolSelector);
  const [selected, setSelected] = useState(depressed);
  const isMount = useIsMount();
  const pressOutDurationInitial = 40;
  const pressOutDurationDelayed = 80;
  const pressInDurationInitial = 30;
  const pressInDurationDelayed = 60;
  const padding = height * 0.01;
  const buttonHeight = height * 0.08;
  const buttonDepth = height * 0.062;
  const buttonWidth = buttonHeight + padding * 2;
  const button3DOuterBorderRadius = buttonHeight * 0.21;
  const unpressedBorderRadius = buttonHeight * 0.16;
  const depressedBorderRadius = buttonHeight * 0.22;
  const marginTopLifted = -(buttonHeight * 0.14);
  const paddingBottomLifted = buttonHeight * 0.14;
  const paddingDepressed = paddingBottomLifted / 2;
  const liftedImageHeight = 0.05 * height;
  const selectedImageHeight =
    liftedImageHeight *
    (liftedImageHeight / (liftedImageHeight + paddingBottomLifted / 2));
  const depressedImageHeight =
    liftedImageHeight *
    (liftedImageHeight /
      (liftedImageHeight + paddingBottomLifted / 2 + paddingDepressed / 2));
  const imageHeight = useSharedValue(liftedImageHeight);
  const imageWidth = useSharedValue(liftedImageHeight);
  const borderRadius = useSharedValue(unpressedBorderRadius);
  const marginTop = useSharedValue(marginTopLifted);
  const paddingTop = useSharedValue(0);
  const paddingRight = useSharedValue(0);
  const paddingLeft = useSharedValue(0);
  const paddingBottom = useSharedValue(paddingBottomLifted);
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
      height: buttonHeight,
      width: buttonWidth,
    },
    button3DOuter: {
      flex: 1,
      padding: padding,
      borderRadius: button3DOuterBorderRadius,
      backgroundColor: "rgba(0,0,0,.65)",
    },
    height: {
      borderRadius: depressedBorderRadius,
      backgroundColor: "rgba(255,0,0,.5)",
    },
    inner: {
      backgroundColor: buttonColor,
      alignItems: "center",
      justifyContent: "center",
      height: buttonDepth,
    },
    white: {
      color: "#FFF",
    },
    imageColor: {
      tintColor: "white",
    },
  });

  useEffect(() => {
    if (!selected && selectedSymbol.symbol !== sign) {
      pressOutAnimationNotSelected();
    } else if (!isMount) {
      propagateSelection(sign);
    }
  }, [selected]);

  useEffect(() => {
    if (!isMount) {
      if (selectedSymbol.symbol !== sign && selected) {
        setSelected((value) => !value);
      }
    }
  }, [selectedSymbol]);

  const pressOutAnimationNotSelected = () => {
    borderRadius.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(unpressedBorderRadius, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    paddingBottom.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(paddingBottomLifted, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    marginTop.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(marginTopLifted, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    paddingTop.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(0, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    paddingRight.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(0, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    paddingLeft.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(0, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    imageHeight.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(liftedImageHeight, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
    imageWidth.value = withDelay(
      pressOutDurationInitial - 5,
      withTiming(liftedImageHeight, {
        duration: pressOutDurationDelayed,
        easing: Easing.bounce,
      })
    );
  };

  const pressOutAnimationSelected = () => {
    marginTop.value = withTiming(0, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    paddingTop.value = withTiming(0, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    paddingRight.value = withTiming(0, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    paddingLeft.value = withTiming(0, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    paddingBottom.value = withTiming(0, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    borderRadius.value = withTiming(unpressedBorderRadius, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    imageHeight.value = withTiming(selectedImageHeight, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
    imageWidth.value = withTiming(selectedImageHeight, {
      duration: pressOutDurationInitial,
      easing: Easing.bounce,
    });
  };

  const pressInAnimation = () => {
    borderRadius.value = withTiming(depressedBorderRadius, {
      duration: pressInDurationInitial,
      easing: Easing.linear,
    });
    paddingBottom.value = withTiming(0, {
      duration: pressInDurationInitial,
      easing: Easing.linear,
    });
    marginTop.value = withTiming(0, {
      duration: pressInDurationInitial,
      easing: Easing.linear,
    });
    imageHeight.value = withTiming(selectedImageHeight, {
      duration: pressInDurationInitial,
      easing: Easing.linear,
    });
    imageWidth.value = withTiming(selectedImageHeight, {
      duration: pressInDurationInitial,
      easing: Easing.linear,
    });
    paddingTop.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(paddingDepressed, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    paddingRight.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(paddingDepressed, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    paddingLeft.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(paddingDepressed, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    paddingBottom.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(0, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    marginTop.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(0, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    imageHeight.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(depressedImageHeight, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
    imageWidth.value = withDelay(
      pressInDurationInitial - 2,
      withTiming(depressedImageHeight, {
        duration: pressInDurationDelayed,
        easing: Easing.linear,
      })
    );
  };

  const handlePressOut = () => {
    pressOutAnimationSelected();
    if (!selected) {
      pressOutAnimationNotSelected();
    }
  };
  const handlePressIn = () => {
    setSelected((value) => !value);
    pressInAnimation();
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
                  style={[styles.imageColor, symbolStyle]}
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
