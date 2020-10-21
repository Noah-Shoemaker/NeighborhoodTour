import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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