import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screenhome from './screens/Screenhome';
import Screenone from './screens/Screenone';
import Screentwo from './screens/Screentwo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screenhome" component={Screenhome} />

        <Stack.Screen name="Screenone" component={Screenone} />
        <Stack.Screen name="Screentwo" component={Screentwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
