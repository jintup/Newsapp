import * as React from 'react';
import Main from '../Screens/Main';
import Home from '../Screens/Home';
import Sports from '../Screens/Sports';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';



const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  return (  
      <Drawer.Navigator
      screenOptions={{headerShown:true,
                      drawerActiveBackgroundColor:color.accent_green,drawerInactiveBackgroundColor:'#f5f5f5',drawerInactiveTintColor:'white',drawerInactiveTintColor:'black',swipeEdgeWidth:1}} >
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Business News" component={Home} />
      <Drawer.Screen name="Sports News" component={Sports} />
      </Drawer.Navigator>
  );
}