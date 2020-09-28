// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Button, Text, View } from 'react-native';

// export default function App() {
//   constructor() {
//     super()
//     this.state = {
//        myText: 'My Original Text'
//     }
//  }
//  updateText = () => {
//   this.setState({myText: 'My Changed Text'})
// }
//    let a =0;
//   return (
//     <View style={styles.container}>
//       <Text onPress = {this.updateText}>
//                {this.state.myText}
//             </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

let count = 0;

export default class reactApp extends Component {

  constructor() {

    super()
    this.state = {
      myText: 'Pressed ' + count
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.myText}
        </Text>
        <Button
          title="Press me"
          onPress={() => {
            this.setState({ myText: 'Pressed ' + count++ })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});