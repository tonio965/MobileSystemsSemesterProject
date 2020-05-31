import React, {useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, Alert } from 'react-native';
import { Barometer} from 'expo-sensors';

export default function BarometerScreen({navigation}) {
      const [barometerDatas, setBarometerDatas] = useState({});
    
    useEffect(() => {
        sendAlert();
        barometer();
      }, []);


    const { pressure = 0 } = barometerDatas;
    return (
        <View>
            <Text style={styles.title}>{pressure * 100} Pa</Text>
            <StatusBar hidden={true}></StatusBar>
            
        </View>

    );



    
    function barometer(){
        Barometer.addListener(barometerData => {
            setBarometerDatas(barometerData);
        });
        console.log("b: "+JSON.stringify(barometerDatas))
    }
    function sendAlert() {
        Alert.alert(
            "Barometer Sensor Tester",
            "Not every phone has one, if it doesn't work you don't have it",
            [
              { text: "Start"}
            ],
            { cancelable: true }
          );
    }
}

const styles = StyleSheet.create({
  title: {
  marginTop: Dimensions.get("window").height/2,
  textAlign: 'center',
  fontSize: 30,
  fontWeight: "bold"
  },
  title2: {
      marginTop: Dimensions.get("window").height/2,
      marginLeft: Dimensions.get("window").width/3,
      fontSize: 30,
      fontWeight: "bold"
    },
});