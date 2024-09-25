import React from 'react';
import Women from './components/main';
import styles from './components/styles';
import {View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const App =()=>{
  return(

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='HomePage' options={{headerShown:false}} component={Women} />
 
    </Stack.Navigator>
    </NavigationContainer>
    
);
};

export default App;