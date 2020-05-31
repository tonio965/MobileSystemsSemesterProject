import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './SecondScreen';
import ColourScreen from './ColourScreen';
import AccelerometerScreen from './AccelerometerScreen';
import OtherSensorsScreen from './OtherSensorsScreen';
import BarometerScreen from './BarometerScreen';
import DeviceInfoScreen from './DeviceInfoScreen';
import CreditsScreen from './CreditsScreen';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SecondScreen')}>
            <Text style={styles.text}>Touchscreen Tester</Text>
        </TouchableOpacity>

        <View
          style={styles.item3}>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ColourTester')}>
            <Text style={styles.text}>DeadPixel Tester</Text>
        </TouchableOpacity>

        <View
          style={styles.item4}>
        </View>
        


        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AccelerometerTester')}>
            <Text style={styles.text}>Accelerometer Tester</Text>
        </TouchableOpacity>

        <View
          style={styles.item3}>
        </View>


        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('OtherSensors')}>
            <Text style={styles.text}>Magnetometer Tester</Text>
        </TouchableOpacity>

        <View
          style={styles.item4}>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('BarometerScreen')}>
            <Text style={styles.text}>Barometer Tester</Text>
        </TouchableOpacity>

        <View
          style={styles.item3}>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DeviceInfoScreen')}>
            <Text style={styles.text}>Device info</Text>
        </TouchableOpacity>


        <View
          style={styles.item4}>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CreditsScreen')}>
            <Text style={styles.text}>Credits</Text>
        </TouchableOpacity>


    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}></StatusBar>
      <Stack.Navigator>
        <Stack.Screen 
          name="Menu" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            // cardStyle: { backgroundColor: '#5718B4' },
          }}
        />
        <Stack.Screen 
          name="SecondScreen" 
          component={SecondScreen}
          options={{
            headerShown: false
          }}
          />
        <Stack.Screen 
          name="ColourTester" 
          component={ColourScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen 
          name="AccelerometerTester" 
          component={AccelerometerScreen}
          options={{
            headerShown: false,
            // cardStyle: { backgroundColor: '#5718B4' },
          }} />
        
        <Stack.Screen 
          name="OtherSensors" 
          component={OtherSensorsScreen}
          options={{
            headerShown: false,
            // cardStyle: { backgroundColor: '#5718B4' },
          }} />

        <Stack.Screen 
          name="BarometerScreen" 
          component={BarometerScreen}
          options={{
            headerShown: false,
            // cardStyle: { backgroundColor: '#5718B4' },
          }} />
        
        <Stack.Screen 
          name="DeviceInfoScreen" 
          component={DeviceInfoScreen}
          options={{
            headerShown: false,
            // cardStyle: { backgroundColor: '#5718B4' },
          }} />

        <Stack.Screen 
          name="CreditsScreen" 
          component={CreditsScreen}
          options={{
            headerShown: true,
            // cardStyle: { backgroundColor: '#5718B4' },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10 
  },
  item: {
    width: '45%',
    padding: 15,
    borderRadius:20,
    backgroundColor:'#A371EC',
    height:120 
  },
  item2: {
    width: '45%',
    padding: 15,
    borderRadius:20,
    backgroundColor:'#5718B4',
    height:10 
  },
  item3: {
    width: '10%',
    padding: 15,
    borderRadius:20,
    backgroundColor:'#f2f2f2',
    height:10 
  },
  item4: {
    width: '100%',
    padding: 15,
    borderRadius:20,
    backgroundColor:'#f2f2f2',
    height:10 
  },
  text: {
    fontSize: 15,
    fontWeight: "bold"
  }
})