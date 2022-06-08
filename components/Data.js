import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';
import React from 'react'
import {useNavigation} from '@react-navigation/native';


const Data=()=> {
  const navigation = useNavigation();

    const data = [
        { id: '1',date:'1ST MAY-SAT-2:00PM', title: 'A virtual evening of smooth  jazz',image: require('../assets/images/101530-the-guitarist.gif'), },
        { id: '2',date:'1ST MAY-SAT-2:00PM', title: "jo malone london's mothers' day" ,image: require('../assets/images/104783-mothers-day.gif'),},
        { id: '3',date:'1ST MAY-SAT-2:00PM', title: "Women's leadership conference" , image: require('../assets/images/25649-women-power.gif'),},
        { id: '4',date:'1ST MAY-SAT-2:00PM', title: 'international kids safe parents night out', image: require('../assets/images/51107-parenting.gif'),},
        { id: '5',date:'1ST MAY-SAT-2:00PM', title: 'international gala music festival' , image: require('../assets/images/81966-girl-listening-to-music.gif'),}
      ];
      
  
 
 
 

    return (
        <View style={styles.container}>
            
            
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate('Music')}
                
                >
              <View style={styles.listItem}>
                
                <Text style={styles.listItemDate}>{item.date}</Text>
                
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                <Image style={{marginRight:278,height:100,width:86,marginLeft:14,marginTop:19}} 
                 source={item.image} />
                 </View>
                 <Text style={styles.listItemText}>{item.title}</Text>
                
              </View>
              </TouchableOpacity>
            )}
          />
          
        </View>
        
      );
    }

    export default Data;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems:'center',
      justifyContent:'center',
      height:'90%'

      
      

     
     
    },
   
    listItem: {
      
      marginTop:16,
      marginLeft:18,
      height:128,
      padding: 27,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#fff',
      borderTopEndRadius:45,
      borderBottomLeftRadius:45,
      width: '80%',
      elevation:4,
      
      
      
      
    },
    listItemText: {
      fontSize: 18,
      alignSelf:'center',
      justifyContent:'center',
      fontWeight:'bold',
      color:'#000',
      
      marginLeft:55,
      marginBottom:15,
      width:190
      

     
    },
    listItemDate: {
        fontSize: 18,
        alignSelf:'center',
        justifyContent:'center',
        color:'blue',
        fontSize:14
      }
  });