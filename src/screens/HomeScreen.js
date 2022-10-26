import { View, Text ,SafeAreaView, TextInput, FlatList} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../data/courses';
import CourseCard from '../components/CourseCard';
const HomeScreen = () => {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",paddingHorizontal:20}}>
      <View style={{margin:20}}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>Hey Can,</Text>
        <Text style={{fontSize:22,color:"#61688b",marginTop:15}}>
          Find a course you want to learn
        </Text>
        <View style={{
          height:60,
          marginTop:35,
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:15,
          backgroundColor:"#f0f4f7",
          borderRadius:15,
          flexDirection:"row",
          alignItems:"center"


        }}>
          <Icon name="search" size={25} style={{marginRight:20}} />
          <TextInput placeholder="Search for anything" style={{fontSize:18}} />
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:15}}>
          <Text style={{fontSize:22,fontWeight:'bold',marginTop:35}}>Categories</Text>
          <Text style={{fontSize:18,color:"#61688b",marginTop:35}}>See All</Text>
        </View>
      </View>
      <View style={{flex:1,alignItems:"center"}} >
        <FlatList showsVerticalScrollIndicator={false} numColumns={2}
        data={courses}

        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=>{
          return <CourseCard course={item} />
        }}
        />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen