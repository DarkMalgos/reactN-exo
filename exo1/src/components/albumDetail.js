/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {};

export default class albumDetail extends Component<Props> {
    render() {
        console.log(this.props.album.thumbnail_image)
        return(
            <View>
                <View style={styles.cardSectionStyle}>
                    <View>
                        <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }}/>
                    </View>
                    <View style={styles.headerContentStyle}>  
                        <Text>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
})