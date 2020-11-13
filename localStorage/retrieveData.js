import { AsyncStorage } from "react-native";
export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return value;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
