import React from 'react';
import { Text, View } from 'react-native';
import MapView from "react-native-maps";

const MapScreen = () => {

    return(
        <View>

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 40.805890,
                    longitude: -96.702722,
                    latitudeDelta: -0.014109,
                    longitudeDelta: 0.02047
                }}
            />

        </View>
    );
};

export default MapScreen;