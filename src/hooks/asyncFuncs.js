import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }

export const getData = async (key,callback) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        callback(jsonValue)
    } catch(e) {
        // error reading value
        console.log(e)
        callback(null)
    }
}