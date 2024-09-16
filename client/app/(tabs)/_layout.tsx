import { Image, StyleSheet, Platform } from 'react-native';
import Home from '../../screens/Home';
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Alert } from 'react-native'
import {AuthProvider} from '../../context/authContext'

export default function TabLayout() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer independent={true}>
    <AuthProvider>
      <Stack.Navigator initialRouteName='Login'>

      <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{headerShown:false}} 
        />

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
        </AuthProvider>
    </NavigationContainer>
  );
}
