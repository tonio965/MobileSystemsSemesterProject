import React, {useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Button,StatusBar, Dimensions, Image} from 'react-native';
import { NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Accelerometer } from 'expo-sensors';

export default function AccelerometerScreen({navigation}) {

    let [data, setData] = useState({});
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    let [positionX, setPositionX] =  useState(Math.round(screenWidth/2));
    let [positionY, setPositionY] = useState(Math.round(screenHeight/2));

    useEffect(()=> {
        accelerometer();
    },[]);






    return(
      <View>
        <StatusBar hidden={true}/>
        <Image 
          source = { require('./assets/newBall.png')}
          style={{
            position: 'absolute',
            left: positionX,
            top: positionY,
            width: 100,
            height: 100,
          }}>
        </Image>
      </View>

    );

    function accelerometer() {
        Accelerometer.addListener(accelerometerData => {
              setData(accelerometerData);
              let currX=Number(JSON.stringify(accelerometerData.x))*10;
              let currY=Number(JSON.stringify(accelerometerData.y))*10;
              setPositionX(positionX -= currX);
              setPositionY(positionY += currY);
          });
    }
}