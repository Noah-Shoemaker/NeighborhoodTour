import React from 'react';
import { Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QRScannerScreen = () => {
    
    return(
        <QRCodeScanner />
    );
}

export default QRScannerScreen;