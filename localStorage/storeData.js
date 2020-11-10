import {AsyncStorage} from 'react-native'
export const _storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error)
    }
}