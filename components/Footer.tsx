import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Footer = () => {
  return (
    <View style={{
      paddingVertical: '60%'
  }}>
      <Text style = {{
          fontFamily: 'poppins-regular',
          fontSize: 18,
          color: '#000000'
      }}>
        Create new account?
      </Text>
  </View>
)
}

export default Footer