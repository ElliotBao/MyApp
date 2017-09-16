import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,TextInput } from 'react-native';

export default class LotsOfStyles extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View>
        <Text style={styles.red}>Weather report</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('MyApp', () => LotsOfStyles);
