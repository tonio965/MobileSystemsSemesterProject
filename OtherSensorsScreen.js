import React, {useState, useEffect } from 'react';
import { View, Text, Dimensions, StatusBar, Alert, StyleSheet} from 'react-native';
import { Barometer, Magnetometer} from 'expo-sensors';

export default function OtherSensorsScreen({navigation}) {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
      const screen = Dimensions.get("screen");
      const [barometerDatas, setBarometerDatas] = useState({});
      const [currentDirection, setCurrentDirection] = useState();
    
    useEffect(() => {
        sendAlert();
        magnetometer();
        barometer();
      }, []);


    return (
        <View>
            <Text style={styles.title}>Current direction {currentDirection} </Text>
            <Text>x: {data.x}</Text>
            <Text>y: {data.y}</Text>
            <Text>z: {data.z}</Text>
            <StatusBar hidden={true}></StatusBar>
            
        </View>

    );



    function round(n) {
        if (!n) {
          return 0;
        }
        return Math.floor(n * 100) / 100;
    }


    function magnetometer(){
        Magnetometer.addListener((result) => {
            setData(result);
            let angle;
            if (Math.atan2(result.y, result.x) >= 0) {
                angle = Math.atan2(result.y, result.x) * (180 / Math.PI);
            }
            else {
                angle = (Math.atan2(result.y, result.x) + 2 * Math.PI) * (180 / Math.PI);
            }
            setCurrentDirection(createDirection(angle));

        });
        Magnetometer.setUpdateInterval(300);
    }

    function barometer(){
        Barometer.addListener(barometerData => {
            setBarometerDatas(barometerData);
        });
       
    }

    function sendAlert() {
        Alert.alert(
            "Magnetometer tester",
            "Screen shows calculated direction depending on magnetometer reading",
            [
              { text: "Start"}
            ],
            { cancelable: true }
          );
    }
    function createDirection(degree){
        if (degree >= 22.5 && degree < 67.5) {
            return 'NE';
          }
          else if (degree >= 67.5 && degree < 112.5) {
            return 'E';
          }
          else if (degree >= 112.5 && degree < 157.5) {
            return 'SE';
          }
          else if (degree >= 157.5 && degree < 202.5) {
            return 'S';
          }
          else if (degree >= 202.5 && degree < 247.5) {
            return 'SW';
          }
          else if (degree >= 247.5 && degree < 292.5) {
            return 'W';
          }
          else if (degree >= 292.5 && degree < 337.5) {
            return 'NW';
          }
          else {
            return 'N';
          }
    }
}

const styles = StyleSheet.create({
    title: {
      marginTop: Dimensions.get("window").height/2,
    //   marginLeft: Dimensions.get("window").width/4,
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
  