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
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

function MainStackScreen() {

    const [auth, setauth] = useState(false);
    const [value, onChangeText] = useState('');
    const ref = useRef(auth);

    useEffect(() => {dataBase.authentication.authState = auth}, [auth]);

    function checkPassword(e) {

        setauth(e === dataBase.authentication.password);
        ref.current = (e === dataBase.authentication.password);
        
        if (ref.current === false) {
            alert("Wrong password, please try again.");
        }
    }
    
    if (auth === false) {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <Text>Please enter the password from the booklet to access app.</Text>
                <TextInput onSubmitEditing={event => checkPassword(event.nativeEvent.text)}
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  textContentType='password' 
                  secureTextEntry={true}
                  placeholder="Enter password"
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