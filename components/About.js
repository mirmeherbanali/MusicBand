import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';
import React from 'react'
import {useNavigation} from '@react-navigation/native';


const About=()=> {
  const navigation = useNavigation();

    const data = [
        { id: '1',title:'About Event', description: 
        " live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital,the brand, identifying its target audience, devising the event concept, and coordinating the technical aspects before actually launching the event. " },
      
      ];
      
  
 
 
 

    return (
        <View style={styles.container}>
            
            
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               
              <View style={styles.listItem}>

                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.listItemText}>{item.title}</Text>
                </View>
                
                
                 
                 <Text style={styles.listItemDescription}>{item.description}</Text>
                
              </View>
             
            )}
          />
          
        </View>
        
      );
    }

    export default About;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'25%',
      
      alignItems:'center',
      justifyContent:'center',
      
     
     
    },
   
    listItem: {
      
      
      
      
      height:'90%',
      
      alignItems: 'center',
      justifyContent:'center',
      
    
      
      width: '100%',
      
    
      
      
      
      
    },
    listItemText: {
      
      alignSelf:'center',
      justifyContent:'center',
      
      color:'#000',
      marginRight:200,
      marginTop: 20 ,  
      fontWeight:'bold',
      fontSize:25,
      width:'90%'
     
     
      
      

     
    },
    listItemDescription: {
        
        alignSelf:'center',
        justifyContent:'center',
        color:'#000',
      
        fontSize:14,
        marginRight:1,
        marginTop:10,
        fontWeight:'300'
      }
  });