import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import Pokedex from './src/pages/Pokedex';
import Battle from './src/pages/Battle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        title: 'Search',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="search" color={color} size={size}/>
        )
      }}/>

      <Tab.Screen name="Battle" component={Battle} options={{
        title: 'Battle',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="flash-outline" color={color} size={size}/>
        )
      }}/>
      
      <Tab.Screen name="Pokedex" component={Pokedex} options={{
        title: 'Pokedex',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="desktop-outline" color={color} size={size}/>
        )
      }}/>


    </Tab.Navigator>
    </NavigationContainer>
  );
}


