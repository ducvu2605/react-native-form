import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/views/navigations';
//redux
import {Provider} from 'react-redux';

import {store} from './src/redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
