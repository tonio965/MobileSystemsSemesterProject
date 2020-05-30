import React, {useState, useEffect } from 'react';
import { View, Text, Dimensions,FlatList, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Device from 'expo-device';

export default function DeviceInfoScreen({navigation}) {
    const [deviceInfoList, setDeviceInfoList] = useState([]);
    const [namesList, setNamesList] = useState([]);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        sendAlert();
        getDeviceInfo();
        // createItems();
      }, []);

    return(
        <View>
        <FlatList
          numColumns={1}
          data={deviceInfoList}
          extraData={deviceInfoList}
          renderItem={({ item }) => (
            <TouchableOpacity>
                <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
        )}
        />
        </View>

    );

    function sendAlert() {
        Alert.alert(
            "Device info list",
            "This is the info about the device",
            [
              { text: "Start"}
            ],
            { cancelable: true }
          );
    }

    function getDeviceInfo(){
        let deviceNameArr = [];
        deviceNameArr.push("Device name: " +Device.deviceName);
        deviceNameArr.push("Brand: "+Device.brand);
        deviceNameArr.push("Model name: "+ Device.modelName);
        if(Device.isDevice)
        deviceNameArr.push("Real device: true");
        else{
            deviceNameArr.push("Real device: false");
        }
        deviceNameArr.push("Device year class: "+Device.deviceYearClass);
        deviceNameArr.push("Total memory: "+Math.round(1.09*(Number(Device.totalMemory)/100000000)) + " Gigabytes");
        deviceNameArr.push("OS name: "+Device.osName);
        deviceNameArr.push("OS version: "+Device.osVersion);
        deviceNameArr.push("OS buildId: "+Device.osBuildId);
        setDeviceInfoList(deviceNameArr);
    }

    function createItems(){
        let itemList = [];
        console.log("dev list leng "+deviceInfoList.length)
        for(let i = 0 ; i<deviceInfoList.length;i++){
            itemList.push(
                key={i},
                <View style={{flexDirection: 'row'}}>
                    <Text>{namesList[i]}</Text>
                    <Text>{deviceInfoList[i]}</Text>
                </View>
            );
        }
        console.log("intemsLen: " + itemList.length);
        setItems(itemList);
    }



}

const styles = StyleSheet.create({
    title: {
    marginTop: Dimensions.get("window").height/20,
    fontSize: 20,
    fontWeight: "bold"
    },
    title2: {
        marginTop: Dimensions.get("window").height/2,
        marginLeft: Dimensions.get("window").width/3,
        fontSize: 30,
        fontWeight: "bold"
      },
});