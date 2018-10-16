import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

type Props = {};

class Input extends Component<Props> {
    

    render() {
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={styles.inputStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
})

export { Input }