import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen,Music } from './screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler"



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
      <Stack.Screen name="Main" component={MainScreen} />
    
      <Stack.Screen name="Music" component={Music} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);
};
  


