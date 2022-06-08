import { View, } from 'react-native'
import React from 'react'

import { Appbar } from 'react-native-paper';
import Search from '../../components/Search';
import Data from '../../components/Data';
export default function MainScreen() {
      

   

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{marginTop:3,width:400}}>
    <Appbar.Header style={{width:'100%',backgroundColor:'#fff',elevation:0}}>
      <Appbar.BackAction
      style={{}}
      size={32}
       onPress={console.log('arya')} />
      <Appbar.Content
       title="Search"  titleStyle={{
         fontSize:25
      
      }} />
     
    </Appbar.Header>
    </View>
    <Search/>
    
    
    <Data/>
    


    </View>
    
  )
}


