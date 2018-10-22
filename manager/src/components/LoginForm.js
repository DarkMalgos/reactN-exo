import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';

//components
import { Card, CardSection, Input, Button, Spinner } from './common';

//actions
import { emailChanged, passwordChanged, loginUser } from './../actions';

type Props = {};
class LoginForm extends Component<Props> {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size={"large"} />
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                buttonText={"Login"}
            />
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label={"Email"}
                        placeholder={"email@gmail.com"}
                        keyboardType={"email-address"}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label={"Password"}
                        placeholder={"Enter your password"}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading}
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);