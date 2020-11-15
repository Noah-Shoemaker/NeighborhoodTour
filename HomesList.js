import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import ArticleScreen from './ArticleScreen';

const HomesList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data={[
                {key: 'Home1'},
                {key: 'Home2'},
                {key: 'Home3'},
                ]}
                renderItem={({item}) => <ArticleScreen>{item.key}</ArticleScreen>}
            />
        </View>
    );
}

export default HomesList;