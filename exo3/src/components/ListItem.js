import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
//components
import { CardSection } from './common';

//actions
import * as actions from '../actions'

type Props = {};
class ListItem extends Component<Props> {

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{this.props.library.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);