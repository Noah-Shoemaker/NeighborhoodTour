import React from 'react';
import { Text, ScrollView } from 'react-native';

const ArticleScreen = ({navigation,route}) => {
    
    return(
        <ScrollView>
            <Text>{route.params.name}</Text>
            <Text>Address: {route.params.address}</Text>
            <Text>Date Built: {route.params.date}</Text>
            <Text>Architect: {route.params.arch}</Text>
            <Text>{route.params.descript}</Text>
        </ScrollView>
    );
}

export default ArticleScreen;