import React, { Component } from 'react';

//components
import { Card, CardSection, Input, Button, Spinner } from './common';

type Props = {};
class LoginForm extends Component<Props> {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label={"Email"}
                        placeholder={"email@gmail.com"}
                        keyboardType={"email-address"}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label={"Password"}
                        placeholder={"Enter your password"}
                    />
                </CardSection>
                <CardSection>
                    <Button
                        buttonText={"Login"}
                    />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;