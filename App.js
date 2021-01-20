import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StarterPage from './src/screens/starter-page/StarterPage';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Home from './src/screens/home/Home';

import { ThemeProvider } from 'styled-components';
import { SafeAreaView } from './AppStyle';

const Stack = createStackNavigator();

const baseColors = {
  primary: '#1B1724',
  secondary: '#ffffff'
}

const App = () => {
  return (
    <SafeAreaView>
    <ThemeProvider theme={baseColors}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StarterPage">
            <Stack.Screen name="StarterPage" component={StarterPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>      
    </SafeAreaView>
  );
};

export default App;
