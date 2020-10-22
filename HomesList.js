import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';

const HomesList = ({navigation}) => {
    
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

export default HomesList;