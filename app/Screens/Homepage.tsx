import React, { useEffect } from "react";
import {Html5QrcodeScanner} from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode";
import {View,Text,StyleSheet} from 'react-native';
const HomePage = () => {

    const brConfig = { fps: 100, aspectRatio: 2 };

    const qrCodeSuccessCallback = (decodedText,decodedResult) => {

        console.log("Text",decodedText)
    }
    useEffect(
        ()=>{

            let html5QrcodeScanner = new Html5Qrcode('reader');
            html5QrcodeScanner.start(
                { facingMode: "environment" },
      brConfig,
      qrCodeSuccessCallback
            )
        },[]
    )
    
    return(
        <View>
            <div id="reader"></div>
        </View>
    )
}
export default HomePage;