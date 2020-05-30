import React, {useState, useEffect } from 'react';
import { View, Text, Dimensions,FlatList, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function SecondScreen({navigation}) {
    let [tableList,setTableList] = useState([]);
    let [dummy, setDummy]= useState(2);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    
    useEffect(() => {
        let tempArr=[];
        for(let i = 0; i< 220; i++){
            tempArr.push({key: i, colorProps:"red"})
        }
        setTableList(tempArr);
        sendAlert();
      }, []);

    const changeColour = (key) => {
        let table = [...tableList];
        table[key].colorProps="green";
        setTableList(table);

    };

    const sendAlert = () => {
        Alert.alert(
            "Touch test",
            "Click on a screen and it will change colour there elo",
            [
              { text: "Start"}
            ],
            { cancelable: false }
          );
    }
    return (
        
        <FlatList
          numColumns={10}
          data={tableList}
          extraData={tableList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress= { ()  => changeColour(item.key)}>
                <View key={item.key}
                    style={{
                    width: 40,
                    height: 40,
                    padding: 0,
                    backgroundColor: item.colorProps,
                    }}>
                </View>
                <StatusBar hidden={true}></StatusBar>
            </TouchableOpacity>
        )}
        />
    );
}

