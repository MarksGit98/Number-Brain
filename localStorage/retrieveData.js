import {AsyncStorage} from 'react-native'
export const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // Our data is fetched successfully
            return value
        }
    } catch (error) {
        console.log(error)
    }
}