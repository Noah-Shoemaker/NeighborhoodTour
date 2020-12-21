import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import dataBase from "/DataBase.json";

const HomesList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data = {dataBase.homes}
                renderItem={({item}) => <Text onPress={() => navigation.navigate("Article")}>{item.name}</Text>}
            />
        </View>
    );
}

export default HomesList;