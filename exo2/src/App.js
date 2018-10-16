/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from '@firebase/app';


//components
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component<Props> {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBphoMkRyGx_GHAcW5VVnkKtDEkdaKtzBE",
      authDomain: "tuto-reactn.firebaseapp.com",
      databaseURL: "https://tuto-reactn.firebaseio.com",
      projectId: "tuto-reactn",
      storageBucket: "tuto-reactn.appspot.com",
      messagingSenderId: "754781693112"
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth'}/>
        <LoginForm/>
      </View>
    );
  }
}
