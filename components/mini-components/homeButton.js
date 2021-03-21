import React from "react";
import {
    TouchableWithoutFeedback,
    Image,
    View
} from "react-native";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    styles
} from "../styles/styles";
import {
    ERROR_CLICK,
    PREVIOUS_SCREEN,
    BUTTON_CLICK,
    SWITCH_SCREEN,
    TOGGLE_MUSIC,
    MAIN_MENU
} from "../../constants/constants";
import {
    playSound
} from "../../constants/buttonClick";
import {
    volumeSelector,
} from "../selectors/stateSelectors";

export const HomeButton = () => {
    const dispatch = useDispatch();
    const volume = useSelector(volumeSelector);
    const handleButtonClick = () => {
        if (volume) playSound(BUTTON_CLICK);
        dispatch({
            type: SWITCH_SCREEN,
            payload: MAIN_MENU
        });
        if (volume) playSound(ERROR_CLICK);
    };
    return ( <
        View >
        <
        TouchableWithoutFeedback onPress = {
            () => handleButtonClick()
        } >
        <
        View style = {
            [styles.buttonWheel, styles.backButtonPosition]
        } >
        <
        Image style = {
            [styles.backButton]
        }
        source = {
            require("../../assets/back-arrow.png")
        }
        /> < /
        View > <
        /TouchableWithoutFeedback> < /
        View >
    );
};