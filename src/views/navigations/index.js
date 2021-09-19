import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/auth/signIn';
import SignUp from '../pages/auth/signUp';
import Welcome from '../pages/welcome';
import CreateNewPassword from '../pages/auth/createNewPassword';

const Stack = createStackNavigator();
const Screens = () => {
  const transitionConfig = {
    animation: 'timing',
    config: {
      duration: 200,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
        gestureDirection: 'vertical',
        transitionSpec: {
          open: transitionConfig,
          close: transitionConfig,
        },
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{presentation: 'transparentModal'}}
      />
      {/* <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{presentation: 'transparentModal'}}
      /> */}
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};
export default AppNavigation;
