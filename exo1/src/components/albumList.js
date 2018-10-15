/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

type Props = {};

export default class albumList extends Component<Props> {
    state = { albums: []}
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
        .then(response => {
            console.log(response);
            this.setState({ albums: response.data })
        }).catch(e => {

        })
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {
        console.log(this.state)
        return(
            <View>
               {this.renderAlbums()}
            </View>
        );
    }
}