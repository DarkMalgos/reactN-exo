/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { connect } from 'react-redux';


//components
import {Card, CardSection, Button, Input, Spinner} from './common';

//actions
import { emailChanged} from '../actions';

type Props = {};
export default class LoginForm extends Component<Props> {

    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    }

    validateEmail = (email) => {
        var re = /^[a-z0-9.-_]+@[a-z0-9]+.+[a-z0-9]$/;
          return re.test(email);
      };

    login = () => {
        this.setState({
            error: '',
            loading: true
        });
        const {email, password} = this.state;
        
        if (!this.validateEmail(this.state.email)) {
            this.setState({
                error: 'You are an error in your email.',
                loading: false
        });
            return;
        }
        if (this.state.password == '' || this.state.password.length < 6) {
            this.setState({
                error: 'You are an error in your password.',
                loading: false
            });
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLogginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLogginSuccess.bind(this))
                    .catch((e) => {
                        this.setState({
                            error: 'Authentication failed.',
                            loading: false
                        })
                    })  
            })
        console.log(this.state.email);
    }

    onLogginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size={'small'}/>
        }

        return (
            <Button onPress={this.login} buttonText={'Log in'}/>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    label={'Email'}
                    placeholder={'example@mail.com'}
                    keyboardType={'email-address'}
                    secureTextEntry={false}/>
                </CardSection>
                <CardSection>
                    <Input
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    label={'Password'}
                    placeholder={'enter your password'}
                    secureTextEntry={true}/>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
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
        color: 'red',
    }
})

export default connect(null, { emailChanged })(LoginForm)