import React, {useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Button,StatusBar} from 'react-native';
import { NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export default function ColourScreen({navigation}) {
    const [background, setBackground] = useState("white");
    const [isVisible, setisVisible] = useState(false);


    useEffect(() => {
      createAlert();
    },[]);


    const changeColour = () => {
        if(background === "red"){
            setBackground("green");
        }
        else if(background==="green"){
            setBackground("blue");
        }
        else if(background === "blue"){
            setBackground("red");

        }

    };

    function createAlert(){
      Alert.alert(
        "Colour test",
        "Screen will change colours to R/G/B on click to check if there are dead pixels (in different colour)",
        [
          { text: "Start", onPress: () => setBackground("red") }
        ],
        { cancelable: false }
      );
      
    }


    

  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: background }} onPress={changeColour}>
      <StatusBar hidden={true}/>
    </TouchableOpacity>
  );

  
}




