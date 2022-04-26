


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Travellers from '../screens/Travellers';
import FlightSearch from '../screens/FlightSearch';
import Home2 from '../screens/Home2';
// import Home from '../screens/Home';
import {ConversionContextProvider} from '../util/ConversionContext';
import ToSearch from '../screens/ToSearch';
import OneWayFlight from '../screens/OneWayFlight';
import TwoWayFlight from '../screens/TwoWayFlight';
import Home3 from '../screens/Home3'
import Flightnew from'../screens/Flightnew';
import Flightnew2 from'../screens/Flightnew2';
import Passengers from '../screens/Passengers';
import RHome from '../screens/RHome';
import FlightPath from '../screens/FlightPath';
const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
    <MainStack.Screen
      name="Home3"
      component={Home3}
      options={{ headerShown: false }}
    />
    
  </MainStack.Navigator>
);
const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
     <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Travellers" component={Travellers} />
 
    <MainStack.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
   <MainStack.Screen name="FlightSearch" component={FlightSearch} />
   <MainStack.Screen name="ToSearch" component={ToSearch} />
   <MainStack.Screen name="OneWayFlight" component={OneWayFlight} options={{ headerShown: false }}/>
   <MainStack.Screen name="TwoWayFlight" component={TwoWayFlight} options={{ headerShown: false }} />

   <MainStack.Screen name="Home3" component={Home3} options={{ headerShown: false }} />


   <MainStack.Screen name="Flightnew" component={Flightnew}  />
   <MainStack.Screen name="Flightnew2" component={Flightnew2} options={{ headerShown: false }} />
   
   <MainStack.Screen name="Passengers" component={Passengers} options={{ headerShown: false }} />
   <MainStack.Screen name="RHome" component={RHome} options={{ headerShown: false }} />
   <MainStack.Screen name="FlightPath" component={FlightPath} />
  </ModalStack.Navigator>
);
export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
    <ModalStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);