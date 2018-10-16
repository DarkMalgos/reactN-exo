/** @format */

import {AppRegistry, View} from 'react-native';
import React, {Component} from 'react';
import Header from './src/components/header';
import {name as appName} from './app.json';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Header headerText={'Firebase !'}/>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);