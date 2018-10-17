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
import '@firebase/auth';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

//components
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component<Props> {
  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBphoMkRyGx_GHAcW5VVnkKtDEkdaKtzBE",
      authDomain: "tuto-reactn.firebaseapp.com",
      databaseURL: "https://tuto-reactn.firebaseio.com",
      projectId: "tuto-reactn",
      storageBucket: "tuto-reactn.appspot.com",
      messagingSenderId: "754781693112"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        })
      } else {
        this.setState({
          loggedIn: false,
        })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <CardSection><Button onPress={() => {firebase.auth().signOut()}} buttonText={'Log out'}/></CardSection>;
    
      case false:
        return <LoginForm/>;

      default:
        return <CardSection><Spinner size={'large'}/></CardSection>;
    }
    return result
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={'Auth'}/>
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

export default App;
