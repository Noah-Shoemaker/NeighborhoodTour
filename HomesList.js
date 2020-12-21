import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import dataBase from "./DateBase.json";

const DATA = dataBase.homes;

const HomesList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data = {DATA}
                renderItem={({item}) => <Text onPress={() => navigation.navigate("Article",item)}>{item.name}</Text>}
            />
        </View>
    );
}

export default HomesList;