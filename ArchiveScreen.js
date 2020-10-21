import React from 'react';
import { Text, View } from 'react-native';

const ArchiveScreen = ({navigation}) => {
    
    return(
        <View>
            <Text>Welcome to the Archive!</Text>
            <Button
            onPress={() => navigation.navigate('Article')}
            title="Article"
            />
        </View>
    );
}

export default ArchiveScreen;