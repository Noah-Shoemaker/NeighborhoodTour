import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import dataBase from "./DateBase.json";

const HomesList = ({navigation}) => {
  
    return(
        <View style={styles.container}>
            <FlatList
                data = {dataBase.homes}
                renderItem={ ({item}) => <Text style={styles.text} onPress={() => navigation.navigate("Article", item)}> {item.name} </Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      alignItems:'center',
      alignContent:'center'
    },
    text: {
      fontFamily: "Cochin",
      textAlign: 'center',
      width: 350,
      fontSize: 20,
      marginBottom: 10
    }
  });
  
export default HomesList;