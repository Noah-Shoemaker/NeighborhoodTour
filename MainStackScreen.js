import React, {useState, useEffect, useRef} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
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
            <View style={styles.container}>
                <Image source={require('./assets/NSNA_Logo.png')} style={styles.logo}/>
                <Text style={styles.text}>Please enter the password from the booklet to access app.</Text>
                <TextInput onSubmitEditing={event => checkPassword(event.nativeEvent.text)}
                  style={styles.textInput}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems:'center',
        alignContent:'center'
    },
    text: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      width: 300,
      fontSize: 15,
      marginBottom: 10
    },
    textInput: {
        height: 40,
        width: 150,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    logo: {
        width: 280,
        height: 280,
        marginBottom: 30
    }
  });


export default MainStackScreen;