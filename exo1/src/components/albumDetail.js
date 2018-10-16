/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

type Props = {};

export default class albumDetail extends Component<Props> {

    buyAlbum = () => {
        console.log(this.props.album.url)
        Linking.openURL(this.props.album.url)
        return;
    }

    render() {
        console.log(this.props.album.thumbnail_image)
        return(
            <View style={styles.cardStyle}>
                <View style={styles.cardSectionStyle}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }}/>
                    </View>
                    <View style={styles.headerContentStyle}>  
                        <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: this.props.album.image }}/>
                </View>
                <View style={styles.cardSectionStyle}>
                    <TouchableOpacity style={styles.button} onPress={this.buyAlbum}>
                        <Text style={styles.buttonText}>Buy!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        shadowColor: '#000',
        shadowOffset: {widt: 0, height: 2},
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 2,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    cardSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 5,
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
})