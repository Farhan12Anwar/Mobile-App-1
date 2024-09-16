import { View, Text,StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/context/authContext'
import FooterMenu from '../components/Menus/FooterMenu'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const Account = () => {
     //global state
     const [state, setState] = useContext(AuthContext)
     const {user} = state

     //local state
     const [name, setName] = useState(user?.name)
     const [password, setPassword] = useState(user?.password)
     const [email] = useState(user?.email)
     const [loading, setLoading] = useState(false)

     //handle update user data
     const handleUpdate = async() => {
        try {
            setLoading(true)
            const { data } = await axios.put('/auth/update-user',{
                name, password, email
            })
            setLoading(false)
            let UD = JSON.stringify(data)
            setState({...state, user:UD?.updatedUser})
            alert(data && data.message)
        } catch (error) {
            alert(error.response.data.message)
            setLoading(false);
            console.log(error);
        }
     }
     return (
       <View style={styles.container}>
        <ScrollView>

        <View style={{alignItems:'center'}}>

            <Image source={{
                uri:'https://th.bing.com/th/id/OIP.jQvFuRlmVesA7K6ArjfyrAHaH9?w=185&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            }}
            style={{ height:200, width:200, borderRadius:100}}
            />

        </View>

        <Text style={styles.warningText}>Currently you can only update your name and password*</Text>
        
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput 
            style={styles.inputBox} 
            value={name}
            onChangeText={(text) => setName(text)}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput 
            style={styles.inputBox} 
            value={email}
            editable={false}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput 
            style={styles.inputBox} 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Role</Text>
            <TextInput 
            style={styles.inputBox} 
            value={state?.user.role}
            editable={false}
            />
        </View>

        <View style={{ alignItems:'center'}}>
            <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                <Text style={styles.updateBtnText}>{loading? 'Please Wait' : 'Update Profile'}</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
        <View style={{flex:1, justifyContent:"flex-end"}}>

        <FooterMenu />
        </View>
       </View>
     )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        marginTop:40
    },
    warningText:{
        color:'red',
        fontSize:13,
        textAlign:'center'
    },
    inputContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    inputText:{
        fontWeight:'bold',
        width:70,
        color:'gray'
    },
    inputBox:{
        width:250,
        backgroundColor:'#ffffff',
        marginLeft:10,
        fontSize:16,
        paddingLeft:20,
        borderRadius:5,
    },
    updateBtn:{
        backgroundColor:'black',
        color:'white',
        height:40,
        width:250,
        borderRadius:10,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    updateBtnText:{
        color:'#ffffff',
        fontSize:16,
    }
})


export default Account