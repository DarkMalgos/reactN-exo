import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {};

class Card extends Component<Props> {
    render() {
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {widt: 0, height: 2},
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 2,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    }
});

export { Card }