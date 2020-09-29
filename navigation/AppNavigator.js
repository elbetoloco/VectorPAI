import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Perfiliamiento from '../screens/Perfiliamiento';
import Servicios from '../screens/Servicios';

const AppStack = createStackNavigator();

export default function App({ signOut, userName }) {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home">
        {({ navigation }) => <Home signOut={signOut} userName={userName} navigation={navigation}/>}
      </AppStack.Screen>
      <AppStack.Screen name="Servicios" component={Servicios} />
      <AppStack.Screen name="Perfiliamiento" component={Perfiliamiento} />
    </AppStack.Navigator>
  );
}
