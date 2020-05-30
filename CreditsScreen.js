import React, {useState, useEffect } from 'react';
import { View, Text,TextInput, Button, Dimensions,FlatList, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
import * as firebase from 'firebase';


export default function CreditsScreen({navigation}) {

    const [autor, setAutor] = useState({});
    const [text, setText] = useState("");
    const firebaseConfig = {
        apiKey: "AIzaSyC5MVFmkvGWfafLlp4GjnogJLEuHKGYRpc",
        authDomain: "reactcredits.firebaseapp.com",
        databaseURL: "https://reactcredits.firebaseio.com",
        projectId: "reactcredits",
        storageBucket: "reactcredits.appspot.com",
        messagingSenderId: "885975688801",
        appId: "1:885975688801:web:c07878e847d24360b8ac20",
        measurementId: "G-J25MP32ZTR"
      };
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      console.log("initialized");
    }

    function sendRequest(){
      if(text.text && text.text.length>0){
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        var questionRef = firebase.database().ref('questions');
        questionRef.child(date+"/"+month+"/"+year+" "+hours+":"+min).set(text.text);
      }
    }



    

    
    useEffect(() => {
      var autorRef = firebase.database().ref('autor');
      autorRef.once('value').then(snapshot => {
        // snapshot.val() is the dictionary with all your keys/values from the '/store' path
        // this.setState({ stores: snapshot.val() })
        const aut = {
          name: snapshot.val().name,
          surname: snapshot.val().surname,
          desc: snapshot.val().desc
        }
        setAutor(aut);
        console.log(snapshot.val().name);
        console.log(snapshot.val().surname);
        console.log(snapshot.val().desc);
        
        // console.log(autor);
      })

      }, []);

      console.log(JSON.stringify(text.text));
    return(
        <View>
          <View style={styles.row}>
            <Text style={styles.bigText}>Author: </Text>
            <Text style={styles.text}>  {autor.name} {autor.surname}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bigText}>App description: </Text>
            <Text style={styles.text}>{autor.desc}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bigText}>Contact: </Text>
            <Text style={styles.text}>Any idea for improvements or bugs?</Text>
          </View>
            <TextInput
              style={styles.input}
              label='Contact me'
              onChangeText={text => setText({ text })}
            />
            <Button
              title="send info" onPress={() => sendRequest()}/>

        </View>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
  },
  text: {
    fontSize: 15
  },
  bigText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
},


})

