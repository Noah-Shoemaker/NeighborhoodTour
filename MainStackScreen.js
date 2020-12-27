import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import QRScannerScreen from './QRScannerScreen';
import MapScreen from './MapScreen';
import ArchiveStack from './ArchiveStack';
import { TextInput } from 'react-native-gesture-handler';
import dataBase from "./DateBase.json";
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

function MainStackScreen() {

    const [auth, setauth] = useState(false);
    const [value, onChangeText] = useState('');

    useEffect(() => {dataBase.authentication.authState = auth}, [auth]);
    
    if (auth === false) {
        return (
            <View style={{flex: 1}}>
                <Text style={{flex: 1}}>Please enter the password from the booklet to access app.</Text>
                <TextInput onSubmitEditing={event => setauth(event.nativeEvent.text === dataBase.authentication.password)}
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  textContentType='password' 
                  secureTextEntry={true}
                  placeholder="Enter password"
                  style={{flex: 1}}
                  />
            </View>
        );
    }
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Archive" component={ArchiveStack}/>
            <Tab.Screen name="QRScanner" component={QRScannerScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
            
        );
}



export default MainStackScreen;