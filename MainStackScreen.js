import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import QRScannerScreen from './QRScannerScreen';
import MapScreen from './MapScreen';
import ArchiveStack from './ArchiveStack';
import { TextInput } from 'react-native-gesture-handler';
import dataBase from "./DateBase.json";

const Tab = createBottomTabNavigator();

function MainStackScreen() {

    const [auth, setauth] = useState(false);

    if (auth === false) {
        return (
            <View>
                <Text>Please enter the password from the booklet to access app.</Text>
                <TextInput onSubmitEditing={text => setauth(text === dataBase.authentication.password)}/>
            </View>
        );
    }
    else {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Archive" component={ArchiveStack}/>
                <Tab.Screen name="QRScanner" component={QRScannerScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
            
        );
    }
}

export default MainStackScreen;