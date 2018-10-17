/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

//components
import { Header, Card, CardSection, Spinner } from './components/common';
import LibraryList from './components/LibraryList';

export default class App extends Component<Props> {
  state = {
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, }}>
          <Header headerText={'Redux'}/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
