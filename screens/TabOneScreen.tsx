import React from "react";
// import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Dimensions, Image, Text, View, StyleSheet, Alert } from 'react-native';
// import {Input, Button} from 'react-native-elements';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';
// import LottieView from 'lottie-react-native';
// import { color } from "react-native-elements/dist/helpers";
// import LoginForm from "../components/LoginForm";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <RegistrationForm/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: 60,
    paddingRight: 60,
  },
});