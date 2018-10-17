/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};

class Header extends Component<Props> {
  render() {
    return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    shadowColor: '#fefefe',
    shadowOffset: { width: 56, height: 56 },
    shadowOpacity: .2,
    elevation: 8
  },
  textStyle: {
    fontSize: 20
  }
})

export { Header }