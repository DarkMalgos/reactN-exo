import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {};

class Button extends Component<Props> {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export { Button }