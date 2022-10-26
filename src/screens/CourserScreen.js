import { View, Text ,SafeAreaView,Image,ImageBackground, FlatList} from 'react-native'
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialIcons'


const CourserScreen = ({route}) => {
    const BottomTabNavigator = () => {
        return (
            <View style={{height:80,bottom:0,zIndex:1,flexDirection:"row",alignItems:"center",paddingHorizontal:20}}>
<View style={{height:60,width:70,backgroundColor:"#ffedee",borderRadius:30,alignItems:"center",justifyContent:"center"}}>
<Icon name="local-mall" size={25} style={{color:"#ff6347"}} />
</View>
<View style={{flex:1,marginLeft:20,borderRadius:20,backgroundColor:"#61688b",alignItems:"center",padding:10}}>
<Text style={{fontSize:18,fontWeight:"bold",color:"#ff6347"}}>Mastering React Native</Text>
<Text style={{fontSize:16,color:"#aeb5bc",fontSize:18,fontWeight:"400"}}>By Can Kanbur</Text>
</View>
            
          </View>
        )
    }

    const {data} = route.params
  return (
    <SafeAreaView style={{flex:1,}}>
        <ImageBackground source={data.image} 
        style={{width:"100%",aspectRatio:1,paddingTop:40,paddingHorizontal:20}}
          >
          <Image resizeMode='contain' source={require('../assets/bestseller.png')} style={{width:100,marginBottom:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',top:-30}}>Design Thinking</Text>
            <View style={{top:-25,flexDirection:"row"}}>
                <Icon name='people' size={25} color={"#61688b"} style={{marginLeft:5}}/>
                <Text style={{fontSize:18,color:"#61688b",marginLeft:5}}>{data.students + "k"}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Icon name='star' size={25} color={"#61688b"} style={{marginLeft:5}}/>
                <Text style={{fontSize:18,color:"#61688b",marginLeft:5}}>{data.star + "k"}</Text>
            </View>
          </ImageBackground>
          <View style={{flex:1,marginTop:-35,borderTopRightRadius:20,borderTopLeftRadius:60,backgroundColor:"#fff"}}>
            <Text style={{fontSize:26,marginTop:25,marginHorizontal:20}}>Course Content</Text>
            <FlatList showsVerticalScrollIndicator={false}
            data={data.courseContent}
            keyExtractor={(item,index)=> index.toString()} 
            renderItem={({item,index})=>{
                return (
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:20,marginHorizontal:20,justifyContent:"space-between"}}>
                        <View style={{height:40,width:40,borderRadius:20,backgroundColor:"#e6e6e6",alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:20,fontWeight:"bold"}}>{index + 1}</Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"flex-start",marginHorizontal:20}}>
                        <Text style={{fontSize:22,color:"#61688b"}} >{item.title}</Text>
                        <Text style={{fontSize:16,marginTop:4,fontWeight:"500"}}>{item.time}</Text>
                        </View>
                        <View style={{height:50,width:50,backgroundColor:"#61688b",borderRadius:50}}>
                            <Icon name="play-arrow" size={30} color={"#fff"} style={{alignSelf:"center",marginTop:10}}/>
                        </View>
                    </View>
                )
            }
            }
            />
          </View>
          <BottomTabNavigator />
    </SafeAreaView>
  )
}

export default CourserScreen