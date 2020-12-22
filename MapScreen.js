import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import dataBase from "./DateBase.json";

const MapScreen = () => {

    const markers = dataBase.homes;

    return(

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 40.805890,
                    longitude: -96.702722,
                    latitudeDelta: 0.014109,
                    longitudeDelta: 0.02047
                }}>

                {markers.map((marker) => (<Marker onPress={() => navigation.navigate("Article",marker)} 
                                                           coordinate={marker.coord} title={marker.name} />) ) }
                
            </MapView>

    );
};

export default MapScreen;