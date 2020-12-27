import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import dataBase from "./DateBase.json";

const HomesList = ({navigation}) => {
  
    return(
        <View>s
            <FlatList
                data = {dataBase.homes}
                renderItem={ ({item}) => (<Text onPress={() => navigation.navigate("Article", item)}> {item.name} </Text>) }
            />
        </View>
    );
}

export default HomesList;