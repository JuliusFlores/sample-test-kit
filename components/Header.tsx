import React from 'react'
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <LottieView source={
          require('../assets/lottie/38435-login-register.json')}
        autoPlay={true}
        loop={true}
        style={styles.Image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Image: {
        alignItems: 'center',
        width: '100%',
        height: 250,
    },
});

export default Header