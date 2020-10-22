import React from 'react';
import { Text, View, Button } from 'react-native';
import HomesList from './HomesList';

const ArchiveScreen = ({navigation}) => {
    
    return(
        <View>

            <Text>Welcome to the Archive!</Text>

            <Button onPress={() => navigation.navigate('Article')} title="Article" />

            <Button onPress={() => navigation.navigate('HomesList')} title="Homes List" />

        </View>
    );
}

export default ArchiveScreen;