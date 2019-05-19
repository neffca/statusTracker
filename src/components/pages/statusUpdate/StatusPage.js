import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Status from "./Status.js"

export default class StatusPage extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>How are you feeling today?</Text>
        <Status
          status='terrible'
          color='#b80031'
          />
        <Status
          status='bad'
          color='orange'
          />
        <Status
          status='neutral'
          color='yellow'
          />
        <Status
          status='good'
          color='teal'
          />
        <Status
          status='great'
          color='green'
          />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    color: '#b8edff',
  }
});
