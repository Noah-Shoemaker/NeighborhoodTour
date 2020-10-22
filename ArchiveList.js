import React from 'react';
import { Text, View, Button } from 'react-native';

const ArchiveList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data={[
                {key: 'Home1'},
                {key: 'Home2'},
                {key: 'Home3'},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>
    );
}

export default ArchiveList;