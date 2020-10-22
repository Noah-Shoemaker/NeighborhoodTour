import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';

const FeatureList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data={[
                {key: 'Feature1'},
                {key: 'Feature2'},
                {key: 'Feature3'},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>
    );
}

export default FeatureList;