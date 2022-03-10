import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ImageBackgroundBase, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        overflow: 'hidden',
        padding: 50,
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        // flexDirection: 'column'
        }}>
        
        {/* <View style={{ flex: 2, borderRadius: 10, overflow: 'hidden' }}> */}
          {/* <ImageBackgroundBase
            source={{ uri: 'https://i.pinimg.com/originals/26/b8/10/26b8105660cc206311ba9b719a85e944.jpg' }}
          /> */}
        {/* </View> */}

        <View style={{ marginVertical: 10, backgroundColor: '' }}>
          <Text style={{
            padding: 75,
            fontSize: 40,
            textAlign: 'center',
            color: '#00FFEF',
            fontFamily: 'poppins-bold',
          }}>
            Login</Text>
        </View>

        <View style={{ padding: 10, borderRadius: 10, marginVertical: 10 }}>
          <Text style={{
            fontSize: 18,
            color: '#999B9B',
            fontFamily: 'poppins-regular',
          }}>
            Email or phone number
          </Text>
        </View>

        <View style={{ padding: 10, borderRadius: 10 }}>
          <Text style={{
            fontSize: 18,
            color: '#999B9B',
            fontFamily: 'poppins-regular',
            }}>
            Password
          </Text>
        </View>

        <View style={{ padding: 10, backgroundColor: ''}}>
          <Text style={{
            textAlign: 'right',
            fontSize: 10,
            color: '#00FFEF',
            fontFamily: 'poppins-regular',
            }}>
            Forgot password?
          </Text>
        </View>

        <View style={{ padding: 10, borderRadius: 10, marginVertical: 30, backgroundColor: '#00FFEF' }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#000000',
            fontFamily: 'poppins-regular',
            }}>
            Login
          </Text>
        </View>

        <View style={{ padding: 10, borderRadius: 10, backgroundColor: '#00FFEF' }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#000000',
            fontFamily: 'poppins-regular',
            }}>
            Create new account
          </Text>
        </View>

      </View>
    </View>
  );
}