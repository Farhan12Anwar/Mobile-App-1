import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "@/screens/Home";
import Register from "@/screens/auth/Register";
import Login from "@/screens/auth/Login";
import Post from '../../screens/Post'
import About from '../../screens/About'
import Myposts from '../../screens/MyPosts'
import Account from '../../screens/Account'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "@/context/authContext";
import HeaderMenu from './HeaderMenu'

const ScreenMenu = () => {
  //global state
  const [state] = useContext(AuthContext);
  //auth condition true false
  const authenticatedUser = state?.user && state?.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ 
                title:'Full Stack App',
                headerRight:() => <HeaderMenu />
             }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{ 
                headerBackTitle:'Black',
                headerRight:() => <HeaderMenu />
             }}
          />
          <Stack.Screen
            name="Myposts"
            component={Myposts}
            options={{ 
                headerBackTitle:'Black',
                headerRight:() => <HeaderMenu />
             }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ 
                headerBackTitle:'Black',
                headerRight:() => <HeaderMenu />
             }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ 
                headerBackTitle:'Black',
                headerRight:() => <HeaderMenu />
             }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
