/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import firebase from '@firebase';


//components
import {Card, CardSection, Button, Input} from './common';
import { FirebaseAuth } from '@firebase/auth-types';

type Props = {};
export default class App extends Component<Props> {

    state = { 
        email: '',
        password: '',
        error: ''
    }

    login = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
            })
            .catch(() => {
                firebase.auth().CreateUserWithEmailAndPassword(email, password)
                  .then((response) => {

                  })
                  .catch((e) => {
                      this.setState({error: 'Authentication failed.'})
                  })  
            })
        console.log(this.state.email);
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
                <Text>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.login} buttonText={'Log in'}/>
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