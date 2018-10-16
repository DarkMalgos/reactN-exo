/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

//Components
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

type Props = {};

export default class albumDetail extends Component<Props> {

    buyAlbum = () => {
        Linking.openURL(this.props.album.url)
    }

    render() {
        console.log(this.props.album.thumbnail_image)
        return(
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }}/>
                    </View>
                    <View style={styles.headerContentStyle}>  
                        <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: this.props.album.image }}/>
                </CardSection>
                <CardSection>
                    <Button onPress={this.buyAlbum}/>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        
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
})