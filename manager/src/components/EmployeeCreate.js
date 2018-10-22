import React, { Component } from 'react';
import { View, Text } from 'react-native';

//components
import { Card, CardSection, Input, Button, Spinner } from './common';

type Props = {}
class EmployeeCreate extends Component<Props> {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label={"Name"}
                        placeholder={"Jane"}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label={"Phone"}
                        placeholder={"06 88 99 57 00 "}
                    />
                </CardSection>

                <CardSection>
                    <Button buttonText={"Create"}/>
                </CardSection>

            </Card>
        );
    }
}

export default EmployeeCreate;