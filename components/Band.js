import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';
import React from 'react'
import {useNavigation} from '@react-navigation/native';


const Band=()=> {
  const navigation = useNavigation();

    const data = [
        { id: '1',place:'07 June,2022', time: 'Tuesday,4:00PM-9:00PM',image: require('../assets/images/95602-calendar.gif'), },
        { id: '2',place:'Gala Convention ', time: "36 Guild Street London,UK" ,image: require('../assets/images/81366-maps-pin-location-red.gif'),},
        { id: '3',place:'Mir Meherban ALi', time: "organizer" , image: require('../assets/images/15638-face-scana.gif')},
      
      ];
      
  
 
    return (
        <View style={styles.container}>
            
            
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               
              <View style={styles.listItem}>
                
                <Text style={styles.listItemDate}>{item.place}</Text>
                
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                <Image style={{marginRight:278,height:70,width:70,marginLeft:14,}} 
                 source={item.image} />
                 </View>
                 <Text style={styles.listItemText}>{item.time}</Text>
                
              </View>
             
            )}
          />
          
        </View>
        
      );
    }

    export default Band;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems:'center',
      justifyContent:'center',
     
     
    },
   
    listItem: {
      
      
      
      height:40,
      
      alignItems: 'center',
      justifyContent:'center',
    
      marginTop:30,
      width: '100%',
      
    
      
      
      
      
    },
    listItemText: {
      
      alignSelf:'center',
      justifyContent:'center',
      
      color:'#000',
      
     
     
      width:190
      

     
    },
    listItemDate: {
        
        alignSelf:'center',
        justifyContent:'center',
        color:'#000',
        fontWeight:'bold',
        fontSize:14,
        marginRight:75
      }
  });