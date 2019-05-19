import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusPage } from "./src/components/common/StatusPage.js"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000033',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
