import AsyncStorage from '@react-native-async-storage/async-storage';

export const SaveUserName = async (name: any) => {
    try {
        const valueString = JSON.stringify(name);
        console.log(valueString)
        await AsyncStorage.setItem('@name_user', valueString);

        return true;
    } catch (e) {
        return false;
    }
}

export const GetUserName = async () => {
    try {
        const UserName: string | null = await AsyncStorage.getItem('@name_user');
        return UserName;
    } catch (e) {
        return false;
    }
}