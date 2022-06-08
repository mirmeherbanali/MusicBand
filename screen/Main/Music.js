import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { Button } from 'react-native-paper';
import Band from '../../components/Band';
import About from '../../components/About';



export default function Music() {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{alignItems:'center',}}>
            <Image 
            style={{width:400,height:300}}
            source={require('../../assets/images/59850-blink-182-ios-android-animation.gif')}
            />
            </View>

        
        
        <View style={{alignItems:'center',justifyContent:'center',marginTop:5,}}>
            <Text style={{fontSize:36,marginRight:50}}>
                international Band Music Concert
            </Text>
        </View>
         <View style={{marginRight:45,flex:1}}>
        <Band/>
        </View>
        
        <About/>
        <View style={{alignItems:'center',justifyContent:'center'}} >
            <TouchableOpacity style={{width:"100%"}}>
            <Button style={{backgroundColor:'#FFDAB9',height:50,width:'100%',alignItems:'center',justifyContent:"center",borderRadius:10}}
            color='#000'>BUY TICKET $159</Button>
            </TouchableOpacity>
            
        </View>
       
      
    </View>
  )
}