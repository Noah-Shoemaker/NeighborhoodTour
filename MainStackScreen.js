import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ArchiveScreen from './ArchiveScreen';
import QRScannerScreen from './QRScannerScreen';
import MapScreen from './MapScreen';

const Tab = createBottomTabNavigator();

function MainStackScreen() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Archive" component={ArchiveScreen}/>
                <Tab.Screen name="QRScanner" component={QRScannerScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        
    );
}

export default MainStackScreen;