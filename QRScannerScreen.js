import React from 'react';
import { Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScannerScreen = () => {
    
    return(
        <BarCodeScanner />
    );
}

export default QRScannerScreen;