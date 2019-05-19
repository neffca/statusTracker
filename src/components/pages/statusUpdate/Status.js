import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Status extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <View>
      <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View
          style={[styles.circle,
            {backgroundColor: this.props.color}]}
          >
          <Text
            style={styles.content}
            >
            {this.props.status}
          </Text>
        </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    display: 'flex',
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000033',
  }

});
