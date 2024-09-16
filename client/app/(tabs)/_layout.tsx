import { Image, StyleSheet, Platform } from 'react-native';
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Alert } from 'react-native'

export default function TabLayout() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{headerShown:false}} 
        />
        <Stack.Screen 
        name='Register' 
        component={Register} 
        options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
