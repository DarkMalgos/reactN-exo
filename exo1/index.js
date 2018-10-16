/** @format */

import {AppRegistry, View} from 'react-native';
import React, {Component} from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';
import {name as appName} from './app.json';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Header headerText={'Albums !'}/>
                <AlbumList/>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);