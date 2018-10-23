import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {};

class CardSection extends Component<Props> {
    render() {
        return(
            <View style={[styles.containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 5,
    }
});

export { CardSection }