import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_DEFAULT = {
  email: 'Abc',
  password: '123',
  firstName: 'DUC',
  LastName: 'VU',
};
const KEY = {
  user: '@user',
};

export const save = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('AsyncStorage save error');
  }
};

export const get = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('AsyncStorage get data error');
  }
};

export const saveUserData = async user => {
  try {
    await save(KEY.user, user);
  } catch (e) {
    console.log('AsyncStorage save user data error');
  }
};

export const getUserData = () => {
  try {
    return get(KEY.user);
  } catch (e) {
    console.log('AsyncStorage getUserData error', e);
  }
};
