import React from 'react';
import { Text, View, Button } from 'react-native';
import HomesList from './HomesList';

const ArchiveScreen = ({navigation}) => {
    
    return(
        <View>

            <Text>Welcome to the Archive!</Text>

            <Button onPress={() => navigation.navigate('Homes List')} title="Homes List" />

            <Button onPress={() => navigation.navigate('Feature List')} title="Feature List" />

        </View>
    );
}

export default ArchiveScreen;