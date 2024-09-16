import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';

const FooterMenu = () => {
  //Hooks
  const route = useRoute()
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwsome5 name="home" style={styles.iconStyle} color={route.name === 'Home' && 'orange'} />
      <Text>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Post')}>
    <FontAwsome5 name="plus-square" style={styles.iconStyle} color={route.name === 'Post' && 'orange'} />
      <Text>Post</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('About')}>
    <FontAwsome5 name="info-circle" style={styles.iconStyle} color={route.name === 'About' && 'orange'} />
      <Text>About</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
    <FontAwsome5 name="user" style={styles.iconStyle} color={route.name === 'Account' && 'orange'} />
      <Text>Account</Text>
    </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between'
    },
    iconStyle:{
        marginBottom:3,
        alignSelf:'center',
        fontSize:25
    }
})

export default FooterMenu