import { View, Text,SafeAreaView,TouchableOpacity,FlatList,TextInput,Image,ImageBackground,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CourseCard = ({course}) => {
    const navigation = useNavigation();
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const {image,name,totalCourse} = course;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Course',{data:course})}>
<ImageBackground source={image} style={{
    marginVertical:10,
    marginHorizontal:5,
    borderRadius:50,
    width:width / 2 -30,
    height:height /3,
    overflow:"hidden",
    paddingTop:25,
    paddingLeft:20,
    borderRadius:15

}}>
    <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:5}}>{name}</Text>
    <Text style={{fontWeight:"600",color:"#8f95b2"}}>{totalCourse+" Courses"}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default CourseCard