// In App.js in a new project

import * as React from 'react';
import { View, Text ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CourserScreen from './src/screens/CourserScreen';



const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title:null,headerStyle:{elevation:0}}} >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTransparent:true,
          headerLeft: () => (
            <Icon name="sort" size={25} style={{marginLeft:20}} />
          ),
          headerRight: () => (
            <Image source={require('./src/assets/can.jpg')} style={{width:40,height:40,borderRadius:40,marginRight:20}}/>
          )
        }}/>
          <Stack.Screen name="Course" component={CourserScreen} options={({navigation})=>{
                  headerLeft: () => (
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=> navigation.goBack()}
                    
                    >
                      <Icon name="arrow-back-ios" size={20} style={{marginLeft:10}} />
                    </TouchableOpacity>
                  )
                  headerRight: () => (
                    <Icon name="more-vert" size={25} style={{marginRight:20}} />
                  )
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;