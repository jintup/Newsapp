import * as React from 'react';

// import SignUp from "./src/Screens/SignUp"
// import Login from "./src/Screens/Login";
import Navigation from './src/navigation/Navigation';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator>
          
   
             {/* <Stack.Screen name="Login" component={Login} /> 
              <Stack.Screen name="SignUp" component={SignUp} /> */}
             <Stack.Screen name="Navigation" component={Navigation} options={{
        headerShown: false
      }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ) ;
}