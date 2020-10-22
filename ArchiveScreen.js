import React from 'react';
import { Text, View, Button } from 'react-native';
import ArchiveList from './ArchiveList';

const ArchiveScreen = ({navigation}) => {
    
    return(
        <View>
            <Text>Welcome to the Archive!</Text>
            <Button
            onPress={() => navigation.navigate('Article')}
            title="Article"
            />
            <ArchiveList></ArchiveList>
        </View>
    );
}

export default ArchiveScreen;