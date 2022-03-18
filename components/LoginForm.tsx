import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'

const correctUsername = 'Julius Flores'
const correctPassword= '12345'

const LoginForm = () => {
    const [Username, changeusername] = React.useState("")
    const [Password, changepassword] = React.useState("")
  return (
    <View>
        <Text style = {{
            fontFamily: 'poppins-regular',
            fontSize: 18,
            color: '#000000'
        }}>
            Email
        </Text>
        <TextInput onChangeText={(val) => changeusername(val)} placeholder='Email or phone number' style={styles.input}/>

        <Text style = {{
            fontFamily: 'poppins-regular',
            fontSize: 18,
            color: '#000000'
        }}>
            Password
        </Text>
        
        <TextInput onChangeText={(val) => changepassword(val)} placeholder='Password' style={styles.input} secureTextEntry={true}/>
        
        <Text style = {{
            textAlign: 'right',
            fontFamily: 'poppins-regular',
            fontSize: 12,
            color: '#000000'
        }}>
            Forgot password?
        </Text>

        <Button
        title="Login"
        color= '#000000'
        onPress={() => {
            correctUsername === Username && correctPassword === Password?
            Alert.alert('Succesfully logged in'):
            Alert.alert('Wrong username or password')
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        color: '#000000',
        borderColor: '#00FFEF',
        borderWidth: 1,
        padding: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 10
    },
});

export default LoginForm