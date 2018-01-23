/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  clickedme(){
    alert('was touched');
  }

  render() {
    return <View style={styles.container}>
        <Camera ref={cam => {
            this.camera = cam;
          }} 
          onBarCodeRead={this.onBarCodeRead.bind(this)} style={styles.preview} aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
          <TouchableHighlight onPress={this.clickedme.bind(this)}>
            <View style={{height:50, width:50, backgroundColor:'pink'}}></View>
          </TouchableHighlight>
        </Camera>
      </View>;
  }
  
  onBarCodeRead(e) {
      console.log(
          "Barcode Found!",
          "Type: " + e.type + "\nData: " + e.data
      );
    }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  
}


const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
