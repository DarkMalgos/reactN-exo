import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type Props = {};
class Spinner extends Component<Props> {

    render() {
        return(
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={this.props.size || 'large'} color="#0000ff"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { Spinner };