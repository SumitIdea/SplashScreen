import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

fun HomeScreen(){
  return {
    <View>
    <Text style={{flex:1, justifyContent:'center' alignItems: 'center',}}>Home</Text>
  </View>
  }
}

function SplashScreen({navigation}){
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  return (
    <ImageBackground style={{flex:1}} source={require('/splash.jpg')}>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();
export default App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

