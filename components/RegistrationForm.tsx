import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';

const RegistrationForm = () => {
    const [Name, changeYourName] = React.useState("")
    const [Email, changeEmail] = React.useState("")
    const [Password, changePassword] = React.useState("")
  return (
    <View style = {styles.regform}>

    <Text style = {styles.header}> Registration </Text>

    <TextInput onChangeText={(val) => changeYourName(val)} placeholder='Your Name' style={styles.textinput}/>

    <TextInput onChangeText={(val) => changeEmail(val)} placeholder='Email' style={styles.textinput}/>

    <TextInput onChangeText={(val) => changePassword(val)} placeholder='Password' style={styles.textinput} secureTextEntry={true}/>

    <View style = {styles.button}>
    <Button
        title="Sign up"
        color= '#000000'
        onPress={() => {
            Name && Email && Password?
            Alert.alert('Registered'):
            Alert.alert('Please fill up the form')
        }}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#00FFEF',
        borderBottomWidth: 1,
    },
    textinput: {
        padding: 10,
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 10,
        color: '#000000',
        borderColor: '#00FFEF',
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#000000',
        marginTop: 30,
        borderRadius: 10,
    },
});

export default RegistrationForm