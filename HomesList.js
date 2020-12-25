import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import dataBase from "./DateBase.json";

const HomesList = ({navigation}) => {
    
    return(
        <View>
            <FlatList
                data = {dataBase.homes}
                renderItem={({home}) => <Text onPress={() => navigation.navigate("Article",home)}>{home.name}</Text>}
            />
        </View>
    );
}

export default HomesList;